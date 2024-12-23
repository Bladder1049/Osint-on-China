<script lang="ts">
  import { Link } from "@utils"
  import Logo from "@svg/logo.svg?component"
  import Navigation from "./Navigation.svelte"
  import ThemeToggle from "./ThemeToggle.svelte"

  export let pathName: string
</script>

<header class="sticky inset-x-0 top-0 z-50 px-6 bg-gray-200 dark:bg-gray-900 lg:px-10">
  <div class="container mx-auto py-6 border-b border-gray-900 border-opacity-10">
    <nav class="space-y-2 md:flex md:items-center md:justify-between">
      <!-- Logo -->
      <div class="w-2/3 max-w-[298px]">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div class="flex items-center space-x-4">
        <Navigation {pathName} />
        <ThemeToggle />
      </div>
    </nav>
  </div>
</header>