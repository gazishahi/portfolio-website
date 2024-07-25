<script>
	import NavLink from '$lib/components/NavLink.svelte';
</script>

<div class="flex items-center justify-center h-screen">
	<div
		class="flex flex-col bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg size-11/12"
	>
		<div
			class="flex justify-center m-5 text-2xl text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia"
		>
			<p>My Journey So Far</p>
		</div>

		<div class="flex flex-col justify-center space-y-4 text-white">
			<NavLink href="/" text="Go back" />
		</div>
	</div>
</div>
