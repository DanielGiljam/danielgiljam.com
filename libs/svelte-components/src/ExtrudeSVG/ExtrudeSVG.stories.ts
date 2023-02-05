import ExtrudeSVGComponent from "./ExtrudeSVG.svelte";

export default {
    component: ExtrudeSVGComponent,
};

export const Primary = (args: unknown) => ({
    Component: ExtrudeSVGComponent,
    props: args,
});

Primary.args = {
    svgMarkup:
        '<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M320 160c0 80.687-59.855 147.504-137.548 158.434l.044-22.75c57.872-9.54 103.612-55.263 113.177-113.125h-90.659v-22.515L320 160zM160 41.809V320C71.694 320 0 248.306 0 160S71.694 0 160 0c25.719 0 50.028 6.081 71.567 16.884l-10.056 20.109C202.999 27.708 182.105 22.482 160 22.482v.005c-7.65 0-22.466 1.824-22.466 1.824C72.306 35.048 22.482 91.751 22.482 160s49.824 124.952 115.052 135.689V43.945A118.623 118.623 0 01160 41.809z"/></svg>',
};
