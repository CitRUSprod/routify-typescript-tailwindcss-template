import { writable, get } from "svelte/store"

function setDarkClass(value: boolean) {
    if (value) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
}

function getDarkTheme() {
    const prevValue = localStorage.getItem("dark-theme")

    if (prevValue) {
        const value: boolean = JSON.parse(prevValue)
        return value
    } else {
        return false
    }
}

function setDarkTheme(value: boolean) {
    localStorage.setItem("dark-theme", JSON.stringify(value))
    setDarkClass(value)
}

function createDarkTheme() {
    const store = writable(false)
    const { subscribe, set, update } = store

    return {
        subscribe,
        set(value: boolean) {
            setDarkTheme(value)
            set(value)
        },
        update(updater: Parameters<typeof update>[0]) {
            const value = updater(get(store))
            setDarkTheme(value)
            set(value)
        },
        sync() {
            const value = getDarkTheme()
            setDarkClass(value)
            set(value)
        }
    }
}

export const darkTheme = createDarkTheme()
