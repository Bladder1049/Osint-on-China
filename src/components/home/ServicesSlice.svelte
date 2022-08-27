<script>
	// Component imports
	import { Text, Section, Container } from "@utils"

	// Static imports
	import MagnifyingGlass from "@svg/icons/magnifying-glass.svg?component"
	import PinPoint from "@svg/icons/pin-point.svg?component"
	import LightBulb from "@svg/icons/light-bulb.svg?component"
	import Grid from "@svg/grid.svg?component"
</script>

<Section id="services" className="relative">
	<Container className="bg-orange-600 bg-orange rounded-2xl relative z-10">
		<!-- Wrapper -->
		<div
			class="space-y-5 rounded-2xl bg-orange-550 p-6 text-white md:p-10 lg:py-[70px] xl:px-[90px]"
		>
			<Text tag="h2" className="text-center">Services</Text>
			<Text
				>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
				sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
				rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
				ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
				elitr, sed diam.</Text
			>
		</div>

		<!-- Wrapper -->
		<div
			class="grid gap-10 p-6 md:grid-cols-3 md:p-10 lg:py-16 xl:gap-[82px] xl:px-[90px]"
		>
			<!-- Identify -->
			<div class="space-y-5 text-white">
				<div>
					<MagnifyingGlass />
				</div>
				<div class="space-y-[10px]">
					<Text tag="h3" style="h4">Identify</Text>
					<Text
						>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod te</Text
					>
				</div>
			</div>

			<!-- Locate -->
			<div class="space-y-5 text-white">
				<div>
					<PinPoint />
				</div>
				<div class="space-y-[10px]">
					<Text tag="h3" style="h4">Locate</Text>
					<Text
						>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod te</Text
					>
				</div>
			</div>

			<!-- Solution for follow-up action plan -->
			<div class="space-y-5 text-white">
				<div>
					<LightBulb />
				</div>
				<div class="space-y-[10px]">
					<Text tag="h3" style="h4">Solution for follow-up action plan</Text>
					<Text
						>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod te</Text
					>
				</div>
			</div>
		</div>
	</Container>

	<!-- Wave graphic -->
	<div class="hidden origin-center xl:absolute xl:bottom-0 xl:right-0 xl:block">
		<div class="translate-x-1/2 transform-gpu">
			<Grid />
		</div>
	</div>
</Section>
