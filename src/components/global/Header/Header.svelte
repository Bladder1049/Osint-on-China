<script lang="ts">
	// Svelte imports
	import { onMount } from "svelte"

	// Component imports
	import { Link, Text, Container } from "@utils"

	// Static imports
	import Logo from "@svg/logo.svg?component"

	// Props
	export let pathName: string

	/**
	 * State
	 */
	let theme: string

	/**
	 * Helpers
	 */
	onMount(() => {
		// Read the theme from local storage.
		theme = window.localStorage.getItem("theme")
	})

	const handleThemeChange = () => {
		if (theme === "dark") {
			theme = "light"
			localStorage.theme = theme
			document.documentElement.classList.remove("dark")
		} else {
			theme = "dark"
			localStorage.theme = theme
			document.documentElement.classList.add("dark")
		}
	}
</script>

<header
	class="sticky inset-x-0 top-0 z-50 px-6 bg-gray-200 dark:bg-gray-900 lg:px-10"
>
	<Container className="py-6 border-b border-gray-900 border-opacity-10">
		<nav class="space-y-2 md:flex md:items-center md:justify-between">
			<!-- Logo -->
			<div class="w-2/3 max-w-[298px]">
				<Link href="/">
					<Logo />
				</Link>
			</div>

			<!-- Links -->
			<ul class="relative flex flex-wrap items-center gap-2 md:gap-5">
				<li>
					<Link
						href="/"
						className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
						{pathName}
					>
						<Text>home</Text>
					</Link>
				</li>
				<li>
					<Link
						href="/#about"
						className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
						{pathName}
					>
						<Text>about</Text>
					</Link>
				</li>
				<li>
					<Link
						href="/services"
						className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
						{pathName}
					>
						<Text>services</Text>
					</Link>
				</li>
				<li>
					<Link
						href="/articles"
						className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
						{pathName}
					>
						<Text>articles</Text>
					</Link>
				</li>
				<li>
					<Link
						href="/#contact"
						className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
						{pathName}
					>
						<Text>contact</Text>
					</Link>
				</li>
				<li
					class="absolute inset-y-0 right-0 translate-y-[-200%] transform-gpu md:relative md:block md:translate-y-0"
				>
					<button
						on:click={handleThemeChange}
						class="flex items-center justify-center w-12 h-12 text-white bg-orange-500 rounded-lg dark:bg-orange-700"
					>
						{#if theme === "dark"}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-8 h-8"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								/>
							</svg>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
								/>
							</svg>
						{/if}
					</button>
				</li>
			</ul>
		</nav>
	</Container>
</header>
