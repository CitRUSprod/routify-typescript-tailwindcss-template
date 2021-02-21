declare module "@roxi/routify/hmr" {
    import { SvelteComponent } from "svelte"

    interface Options {
        target: HTMLElement
    }

    function hmr<T extends typeof SvelteComponent>(
        Component: T,
        options?: Options,
        id?: string,
        eventName?: string
    ): InstanceType<T>

    export default hmr
}
