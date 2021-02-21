const colors = require("tailwindcss/colors")
const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles")

const isProd = process.env.NODE_ENV === "production"

function svelteClassColonExtractor(content) {
    return content.match(/(?<=class:)(\w+)/gm) || []
}

function toKebabCase(str) {
    const words = str.match(/(^|[A-Z])[a-z]*/g)
    const result = words.map(word => word.toLowerCase()).join("-")
    return result
}

function convertObjectKeysToKebabCase(obj) {
    const entries = Object.entries(obj)
    const newEntries = entries.map(([key, value]) => [toKebabCase(key), value])
    const result = Object.fromEntries(newEntries)
    return result
}

module.exports = {
    darkMode: "class",
    theme: {
        extend: {
            colors: convertObjectKeysToKebabCase(colors)
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
