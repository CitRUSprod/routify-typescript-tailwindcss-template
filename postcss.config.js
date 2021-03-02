const isProd = process.env.NODE_ENV === "production"

module.exports = {
    plugins: [require("postcss-preset-env"), isProd && require("cssnano")]
}
