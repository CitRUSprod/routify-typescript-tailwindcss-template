const sveltePreprocess = require("svelte-preprocess")
const { preprocess: windicss } = require("svelte-windicss-preprocess")

module.exports = {
    preprocess: [
        windicss({
            config: "tailwind.config.js",
            compile: true,
            globalPreflight: true,
            globalUtility: true
        }),
        sveltePreprocess({
            postcss: true
        })
    ]
}
