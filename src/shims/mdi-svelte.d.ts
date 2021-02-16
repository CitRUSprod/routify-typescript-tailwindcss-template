declare module "mdi-svelte" {
    import { SvelteComponentTyped } from "svelte"

    interface Props {
        path: string
        size?: string | number
        flip?: string | boolean
        rotate?: number
        color?: string
        spin?: number | boolean
    }

    export default class extends SvelteComponentTyped<Props> {}
}
