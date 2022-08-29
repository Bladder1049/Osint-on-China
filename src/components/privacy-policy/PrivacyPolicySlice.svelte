<script>
	// Component imports
	import { Hero, Text, Container } from "@utils"

	// Static imports
	import Grid from "@svg/grid.svg?component"
</script>

<Hero>
	<Container>
		<div class="space-y-10">
			<div class="text-center">
				<Text tag="h1" style="h2" className="text-orange-500"
					>Privacy Policy</Text
				>
			</div>

			<div class="space-y-6">
				<Text tag="h2" style="h3" className="text-orange-500">Website:</Text>
				<Text
					>Your privacy is our top priority. Therefore, we do not collect any
					information from anyone who visits this website, nor will we provide
					your information to any third party as we do not hold any log,
					metadata or any kind of information from our visitors. This website
					does not have any cookies, analytics tools and trackers. The major
					part of the website, the landing page and privacy policy, is coded
					with pure HTML/CSS and uses the Astro framework to provide a better
					and faster user experience.
				</Text>
				<Text>
					We use open-source headless CMS with Astro to build our Articles pages
					and do not have any server-side function to reduce potential
					vulnerability. In addition, we only have two social media functions,
					Twitter and RSS. We will not ask you to like or subscribe to our
					service, so we will not collect your email address or fingerprint from
					you. On top of that, we do not have any affiliate partnerships. In
					short, we will never provide or sell any information to any third
					party since we do not have it.
				</Text>
			</div>
			<div class="space-y-6">
				<Text tag="h2" style="h3" className="text-orange-500">Services:</Text>
				<Text
					>Should you choose to reach us to use our service, we strongly
					recommend you to have a secure encrypted Protonmail account to ensure
					E2EE protection for the communications process. We will not provide
					the obtained or stored contact and email address to any third party
					and will not ask for your personal identity. However, should we find
					malicious activities during the email communication, we will
					discontinue the communication.
				</Text>
				<Text>
					For the products or reports we provide based on your requirements, we
					adopt the best standards to protect and secure the integrity of the
					products and reports. We welcome you to provide your public PGP and
					encrypt the products/reports and will only use the mutually agreed
					E2EE channel to deliver to you. Our server is completely air-gap and
					follows the best practice to our knowledge, and we encourage you to
					use XMR for the payment.
				</Text>
			</div>
			<div class="space-y-6">
				<Text tag="h2" style="h3" className="text-orange-500">Extra note:</Text>
				<Text
					>We welcome anyone to examine the code of our website, and please
					inform us. We reserve the right to change this privacy policy but
					would only make it more strict to ensure your privacy will be in the
					safest hand.
				</Text>
			</div>
		</div>
	</Container>

	<!-- Wave graphic -->
	<div class="hidden origin-center xl:absolute xl:left-0 xl:bottom-0 xl:block">
		<div class="-translate-x-2/3 -translate-y-1/2 transform-gpu">
			<Grid />
		</div>
	</div>
</Hero>
