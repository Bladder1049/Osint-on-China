<script>
	// Component imports
	import { Text, Container, Link, ExternalLink } from "@utils"

	// Static imports
	import Logo from "@svg/logo.svg?component"
	import Twitter from "@svg/icons/twitter.svg?component"
	import RSS from "@svg/icons/rss.svg?component"
</script>

<footer class="px-6 lg:px-10">
	<Container
		className="py-6 lg:py-16 border-t border-gray-900 border-opacity-10"
	>
		<div
			class="flex flex-col items-center justify-center space-y-5 xl:flex-row xl:items-start xl:justify-between xl:space-y-0 xl:space-x-6"
		>
			<!-- Logo -->
			<div class="w-full max-w-[200px]">
				<Logo clas="w-full h-full" />
			</div>

			<!-- Quick Links -->
			<div>
				<ul
					class="flex flex-wrap items-center gap-2 md:gap-5 xl:justify-center"
				>
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
				<!-- Copyright (destop and up) -->
				<div class="hidden xl:block xl:text-center">
					<Text style="small" className="opacity-50"
						>Copyright &copy; 2022 OsintOnChina.com | All Rights Reserved | <Link
							href="/privacy-policy"
							className="transition duration-300 ease-in-out hover:text-orange-500 hover:opacity-100 focus:text-orange-500 focus:opacity-100"
							>Privacy Policy</Link
						>
					</Text>
				</div>
			</div>

			<!-- Socials -->
			<div class="flex justify-center">
				<ul class="flex items-center space-x-5">
					<li>
						<Text>Follow us on</Text>
					</li>
					<li>
						<ExternalLink href="https://twitter.com/OSINTonChina">
							<Twitter />
						</ExternalLink>
					</li>
					<li>
						<Link href="#">
							<RSS />
						</Link>
					</li>
				</ul>
			</div>

			<!-- Copyright -->
			<div class="text-center lg:hidden">
				<Text style="small" className="">
					<span class="opacity-50"
						>Copyright &copy; 2022 OsintOnChina.com |All Rights Reserved</span
					>
					| <Link
						href="/privacy-policy"
						className="transition duration-300 opacity-50 ease-in-out hover:text-orange-500 hover:opacity-100 focus:text-orange-500 focus:opacity-100"
						>Privacy Policy</Link
					>
				</Text>
			</div>
		</div>
	</Container>
</footer>
