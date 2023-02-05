const rootMain = require("../../../.storybook/main");

module.exports = {
    ...rootMain,

    stories: [
        ...rootMain.stories,
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [...rootMain.addons],
    webpackFinal: async (config, {configType}) => {
        // apply any global webpack configs that might have been specified in .storybook/main.js
        if (rootMain.webpackFinal) {
            config = await rootMain.webpackFinal(config, {configType});
        }

        // add your own webpack tweaks if needed
        const svelteLoader = config.module.rules.find(
            (rule) => rule.loader && rule.loader.includes("svelte-loader"),
        );
        svelteLoader.options = {
            ...svelteLoader.options,
            ...require("../svelte.config.cjs"),
        };

        return config;
    },
};
