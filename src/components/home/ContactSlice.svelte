<script>
	// Component imports
	import { Section, Text, Container, ExternalLink, Link } from "@utils"

	// Static imports
	import Twitter from "@svg/icons/twitter.svg?component"
	import RSS from "@svg/icons/rss.svg?component"
	import HomeContact from "@svg/home-contact.svg?component"
	import Grid from "@svg/grid.svg?component"
</script>

<Section id="contact" className="relative">
	<Container className="relative z-10">
		<div class="md:flex md:items-center md:space-x-12 xl:space-x-[70px]">
			<!-- Right side -->
			<div class="hidden md:block md:w-1/2">
				<HomeContact />
			</div>

			<!-- Left side -->
			<div class="space-y-12 md:w-1/2 md:max-w-[557px]">
				<div class="space-y-4">
					<!-- Contact us content -->
					<div class="space-y-3">
						<Text tag="h2">Contact us</Text>
						<Text
							>These two addresses are hosted at ProtonMail. If contacting from
							a ProtonMail address, the entire communication is End-To-End
							Encrypted (E2EE). Secure communications options for Wire, and
							Tutanota are available upon request."</Text
						>

						<!-- Links -->
						<div>
							<ul class="grid gap-2">
								<li>
									<a
										href="mailto:"
										class="text-orange-500 hover:underline focus:underline"
										>contact@email.com</a
									>
								</li>
								<li>
									<a
										href="mailto:"
										class="text-orange-500 hover:underline focus:underline"
										>secondcontact@email.com</a
									>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Socials -->
				<div>
					<div />
					<div>
						<ul class="flex items-center space-x-5">
							<li>
								<ExternalLink href="#">
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
				</div>
			</div>
		</div>
	</Container>

	<!-- Wave -->
	<div class="hidden md:absolute md:top-0 md:left-0 md:block">
		<div class="-translate-x-2/3 -translate-y-1/4 transform-gpu">
			<Grid />
		</div>
	</div>
</Section>
