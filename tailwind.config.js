const colors = require("tailwindcss/colors")
const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles")

const isProd = process.env.NODE_ENV === "production"

function svelteClassColonExtractor(content) {
    return content.match(/(?<=class:)(\w+)/gm) || []
}

module.exports = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                gray: colors.gray,
                red: colors.red,
                yellow: colors.yellow,
                green: colors.green,
                blue: colors.blue,
                indigo: colors.indigo,
                purple: colors.purple,
                pink: colors.pink
            }
        }
    },
    purge: {
        enabled: isProd,
        content: ["./assets/template.html", "./src/**/*.{css,pcss,svelte}"],
        options: {
            defaultExtractor(content) {
                return [
                    ...tailwindExtractor(content),
                    ...svelteClassColonExtractor(content)
                ]
            },
            keyframes: true
        }
    }
}
