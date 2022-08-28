<script>
	// Component imports
	import { Text, Container, Link, ExternalLink } from "@utils"

	// Static imports
	import Logo from "@svg/logo.svg?component"
	import Twitter from "@svg/icons/twitter.svg?component"
	import RSS from "@svg/icons/rss.svg?component"
</script>

<footer class="p-6 lg:px-10 xl:py-12">
	<Container>
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
						>Copyright &copy; 2022 OsintOnChina.com | All Rights Reserved | <a
							href="/privacy-policy"
							class="transition duration-300 ease-in-out hover:text-orange-500 focus:text-orange-500"
							>Privacy Polciy</a
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
						<ExternalLink
							href="https://twitter.com/OSINTonChina"
							className="hover:scale-105 focus:scale-105 transition transform-gpu duration-300 ease-in-out"
						>
							<Twitter />
						</ExternalLink>
					</li>
					<li>
						<Link
							href="#"
							className="hover:scale-105 focus:scale-105 transition transform-gpu duration-300 ease-in-out"
						>
							<RSS />
						</Link>
					</li>
				</ul>
			</div>

			<!-- Copyright -->
			<div class="text-center lg:hidden">
				<Text style="small" className="opacity-50"
					>Copyright &copy; 2022 OsintOnChina.com |All Rights Reserved | <a
						href="/privacy-policy"
						class="transition duration-300 ease-in-out hover:text-orange-500 focus:text-orange-500"
						>Privacy Policy</a
					>
				</Text>
			</div>
		</div>
	</Container>
</footer>
