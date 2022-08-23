<script>
	// Component imports
	import { Link, Text } from "@utils"

	// Static imports
	import Logo from "@svg/logo.svg"
</script>

<header class="sticky inset-x-0 top-0 bg-gray-200 p-6 lg:px-10">
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
				>
					<Text>home</Text>
				</Link>
			</li>
			<li>
				<Link
					href="/"
					className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
				>
					<Text>about</Text>
				</Link>
			</li>
			<li>
				<Link
					href="/"
					className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
				>
					<Text>services</Text>
				</Link>
			</li>
			<li>
				<Link
					href="/"
					className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
				>
					<Text>articles</Text>
				</Link>
			</li>
			<li>
				<Link
					href="/"
					className="hover:text-orange-500 duration-300 ease-in-out transition focus:text-orange-500"
				>
					<Text>contact</Text>
				</Link>
			</li>
		</ul>
	</nav>
</header>
