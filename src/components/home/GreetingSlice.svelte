<script>
	// Component imports
	import { Section, Text, Container } from "@utils"

	// Static imports
	import SyncoreGlyph from "@svg/syncore-glyph.svg?component"
</script>

<Section id="greeting" className="flex-1 flex flex-col">
	<Container className="flex-1 flex flex-col justify-center items-center">
		<div>
			<SyncoreGlyph class="h-24 w-24" />
		</div>
		<div class="text-center">
			<Text tag="p" style="h6">syncore-starter-astro</Text>
			<Text className="text-sm-fluid">v1.3.0</Text>
		</div>
	</Container>
</Section>
