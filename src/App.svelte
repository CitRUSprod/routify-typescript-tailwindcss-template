<script lang="ts">
    import { Router } from "@roxi/routify"
    import { routes } from "@routify/routes"
</script>

<Router routes="{routes}" />

<style lang="postcss" global>
    @import "tailwindcss/tailwind.css";

    :root,
    body,
    #routify-app {
        @apply h-full;
    }
</style>
