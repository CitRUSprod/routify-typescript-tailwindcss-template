const path = require("path")
const manifest = require("./dist/asset-manifest")

module.exports = {
    entrypoint: "./dist/template.html",
    script: path.join("./dist", manifest["build/main.js"]),
    ssr: true,
    port: 5000
}
