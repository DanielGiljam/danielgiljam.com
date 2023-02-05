<script lang="ts">
    import * as THREE from "three";
    import {SVGLoader} from "three/examples/jsm/loaders/SVGLoader";
    import * as SC from "svelte-cubed";

    export let svgMarkup: string;

    let group: SC.Group;

    $: {
        if (group != null) {
            const threeGroup = group.getSelf();
            const box = new THREE.Box3().setFromObject(threeGroup);
            const size = new THREE.Vector3();
            box.getSize(size);
            const xOffset = (size.x * 100) / -2;
            const yOffset = (size.y * 100) / -2;
            const zOffset = (size.z * 100) / -2;
            for (const child of threeGroup.children) {
                child.position.x = xOffset;
                child.position.y = yOffset;
                child.position.z = zOffset;
            }
        }
    }

    const loader = new SVGLoader();
    const svgData = loader.parse(svgMarkup);
    const shapes = svgData.paths.flatMap((path) => path.toShapes(true));
    const material = new THREE.MeshStandardMaterial({color: 0xffffff});
</script>

<SC.Canvas antialias>
    <SC.Group
        rotation={[0, 0, 0]}
        scale={[0.01, -0.01, 0.01]}
        bind:this={group}
    >
        {#each shapes as shape}
            <SC.Mesh
                geometry={new THREE.ExtrudeGeometry(shape, {
                    depth: 20,
                    bevelEnabled: false,
                })}
                {material}
            />
        {/each}
    </SC.Group>
    <SC.PerspectiveCamera position={[0, 0, 5]} />
    <SC.AmbientLight intensity={0.6} />
    <SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />
</SC.Canvas>
