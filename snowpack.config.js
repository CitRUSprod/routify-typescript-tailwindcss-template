const isDev = process.env.NODE_ENV === "development"

const srcMount = {
    src: "/build"
}

module.exports = {
    devOptions: {
        port: 5000,
        output: "stream"
    },
    buildOptions: {
        out: "dist",
        sourcemap: isDev
    },
    optimize: {
        minify: true,
        target: "es2020"
    },
    mount: {
        ...(isDev ? {} : srcMount),
        "src/static": {
            url: "/",
            static: true
        },
        ...(isDev ? srcMount : {}),
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
        "@snowpack/plugin-typescript",
        [
            "@snowpack/plugin-run-script",
            {
                cmd: "svelte-check --output human",
                watch: "$1 --watch"
            }
        ],
        "@snowpack/plugin-svelte",
        "snowpack-plugin-hash"
    ]
}
