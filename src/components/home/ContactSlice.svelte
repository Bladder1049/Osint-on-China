<script>
	// Component imports
	import { Section, Text, Container, ExternalLink, Link } from "@utils"

	// Static imports
	import Twitter from "@svg/icons/twitter.svg?component"
	import RSS from "@svg/icons/rss.svg?component"
	import HomeContact from "@svg/home-contact.svg?component"
	import Grid from "@svg/grid.svg?component"
	import Monero from "@svg/monero.svg?component"
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
							>If you'd like to learn more about our OSINT services, contact us
							today. We’ll talk about your requirements and get back to you with
							a customized quote and some additional information. The emails are 
							secured by proton email sevice and we strongly recommend you also 
							using proton mail to contact us. Therefore, the entire communication
						        would be End-To-End Encrypted (E2EE). Secure communications options 
							for Session, Wire and Element are available upon request.</Text
						>

						<!-- Links -->
						<div>
							<ul class="grid gap-2">
								<li>
									<a
										href="mailto:OSINTonChina@protonmail.com"
										class="text-orange-500 hover:underline focus:underline"
										>OSINTonChina@protonmail.com</a
									>
								</li>
								<li>
									<a
										href="mailto:support@osintonchina.com"
										class="text-orange-500 hover:underline focus:underline"
										>support@osintonchina.com</a
									>
								</li>
								<li>
									<a
										href="mailto:service@osintonchina.com"
										class="text-orange-500 hover:underline focus:underline"
										>service@osintonchina.com</a
									>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Socials -->
				<div
					class="space-y-6 md:flex md:items-center md:space-x-7 md:space-y-0"
				>
					<div>
						<Monero />
					</div>
					<div>
						<ul class="flex items-center space-x-5">
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
									href="/rss.xml"
									className="hover:scale-105 focus:scale-105 transition transform-gpu duration-300 ease-in-out"
								>
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
