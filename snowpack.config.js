const isDev = process.env.NODE_ENV === "development"

module.exports = {
    devOptions: {
        port: 5000
    },
    buildOptions: {
        out: "dist",
        sourcemap: isDev
    },
    optimize: {
        bundle: true,
        minify: true,
        target: "es2020"
    },
    mount: {
        assets: {
            url: "/",
            static: true
        },
        src: "/build",
        ".routify": "/routify"
    },
    alias: {
        "@": "./src",
        "@routify": "./.routify"
    },
    routes: [
        {
            match: "routes",
            src: ".*",
            dest: "/template.html"
        }
    ],
    plugins: [
        "@snowpack/plugin-svelte",
        [
            "@snowpack/plugin-build-script",
            {
                input: [".css", ".pcss"],
                output: [".css"],
                cmd: "postcss $FILE"
            }
        ]
    ]
}
