import {render} from "@testing-library/svelte";

import Test from "./Test.svelte";

it("it works", async () => {
    const {getByText} = render(Test);

    expect(getByText("Hello component!"));
});
