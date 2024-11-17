const {join} = require("path");

const {addIconSelectors} = require("@iconify/tailwind");
const {createGlobPatternsForDependencies} = require("@nrwl/react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {},
    },
    plugins: [addIconSelectors(["simple-icons"])],
};
