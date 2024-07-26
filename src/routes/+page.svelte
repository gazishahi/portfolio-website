<script>
	import NavLink from '$lib/components/NavLink.svelte';
</script>

<div class="flex flex-col items-center justify-center h-screen bg-white overflow-hidden">
	<div class="space-y-4">
		<h1
			class="flex text-9xl font-finalFantasy justify-center underline decoration-8 mb-24 tracking-wider text-outline"
		>
			GAZI SHAHI
		</h1>

		<NavLink href="/about" text="About" />
		<NavLink href="/projects" text="Quests" />
		<!-- <NavLink href="/journal" text="Journal" /> -->
		<NavLink href="/contact" text="Party" />
		<!-- <NavLink href="/test" text="Test" /> -->
	</div>
</div>

<style>
	.text-outline {
		text-shadow: 0 0 1px white;
	}
</style>
