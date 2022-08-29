<script lang="ts">
	// Component imports
	import { Link, Text, Container } from "@utils"

	// Static imports
	import Logo from "@svg/logo.svg"

	// Props
	export let pathName: string
</script>

<header class="sticky inset-x-0 top-0 z-50 bg-gray-200 px-6 lg:px-10">
	<Container className="py-6 border-b border-gray-900 border-opacity-10">
		<nav class="space-y-2 md:flex md:items-center md:justify-between">
			<!-- Logo -->
			<div class="w-2/3 max-w-[298px]">
				<Link href="/">
					<img
						src={Logo}
						width={298}
						height={55}
						alt="Osint on China"
						loading="lazy"
						class="w-full"
					/>
				</Link>
			</div>

			<!-- Links -->
			<ul class="flex flex-wrap items-center gap-2 md:gap-5">
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
						href="/about"
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
						href="/contact"
						className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
						{pathName}
					>
						<Text>contact</Text>
					</Link>
				</li>
			</ul>
		</nav>
	</Container>
</header>
