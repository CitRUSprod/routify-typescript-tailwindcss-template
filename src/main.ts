import hmr from "@roxi/routify/hmr"
import App from "./App.svelte"

const app = hmr(App, { target: document.body }, "routify-app")

export default app

if (import.meta.hot) {
    import.meta.hot.accept()
    import.meta.hot.dispose(() => {
        app.$destroy()
    })
}
