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
				>We offer access to a wealth of information that can help you make
				better decisions about your business or personal future at competitive
				prices.</Text
			>
			<Text
				>OSINT has been used in a variety of applications, including military
				intelligence and law enforcement investigations. We can help you analyze
				the data you find to identify new opportunities for growth or
				innovation, avoid costly errors, or improve security posture by keeping
				an eye on potential threats.</Text
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
						>OSINT can help you identify and gather information on individuals,
						organizations, and other entities. It can be used in conjunction
						with intelligence-gathering techniques to provide valuable insight
						into the activities of individuals or organizations.</Text
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
						>We know that the best way to locate your targeted information is
						through a careful combination of online research, professional
						networking, and personal connections.</Text
					>
				</div>
			</div>

			<!-- Solution for follow-up action plan -->
			<div class="space-y-5 text-white">
				<div>
					<LightBulb />
				</div>
				<div class="space-y-[10px]">
					<Text tag="h3" style="h4">Action</Text>
					<Text
						>OSINT enables us to quickly identify new opportunities and threats,
						giving you an edge over your competitors. This allows us to take
						action and make informed decisions that can improve your business
						strategy.</Text
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
