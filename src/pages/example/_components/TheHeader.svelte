<script lang="ts">
    import { url } from "@roxi/routify"
    import Icon from "mdi-svelte"
    import { mdiThemeLightDark } from "@mdi/js"
    import { darkTheme } from "@/stores"

    interface Link {
        text: string
        url: string
    }

    const links: Array<Link> = [
        {
            text: "Home",
            url: "./"
        },
        {
            text: "About",
            url: "./about"
        }
    ]

    function toggleDarkTheme() {
        $darkTheme = !$darkTheme
    }
</script>

<header class="flex items-center p-4 text-lg bg-green-700 text-white">
    <h1 class="mr-8 text-2xl">
        <a href="/">Routify App</a>
    </h1>
    <nav class="flex space-x-2 flex-grow">
        {#each links as link}
            <a
                class="block p-2 hover:bg-green-600 rounded duration-200"
                href="{$url(link.url)}"
            >
                <span>{link.text}</span>
            </a>
        {/each}
    </nav>
    <button
        class="p-2 outline-none focus:outline-none hover:bg-green-600 rounded-full duration-200"
        on:click="{toggleDarkTheme}"
    >
        <Icon path="{mdiThemeLightDark}" />
    </button>
</header>
