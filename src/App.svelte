<script lang="ts">
    import { Router } from "@roxi/routify"
    import { routes } from "@routify/routes"
</script>

<Router routes="{routes}" />

<style lang="postcss" global>
    :root,
    body,
    #routify-app {
        @apply h-full;
    }

    body {
        @apply bg-white;
        @apply dark:text-white dark:bg-gray-900;
    }
</style>
