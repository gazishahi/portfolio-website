<script>
	import NavLink from '$lib/components/NavLink.svelte';
	import summoner from '$lib/images/trace.svg';
	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.png';
	import twitter from '$lib/images/xlogo.png';
</script>

<div class="flex items-center justify-center h-screen">
	<div
		class="flex flex-col bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg w-1/3 h-1/2"
	>
		<div
			class="flex justify-center m-5 text-2xl text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia"
		>
			<p>Add me to your party</p>
		</div>

		<div class="flex flex-col justify-center space-y-6 text-white">
			<div class="flex justify-center group">
				<NavLink href="https://github.com/gazishahi" text="GitHub" />
				<img src={github} alt="GitHub" class="size-7 ml-2 group-hover:animate-pulse" />
			</div>
			<div class="flex justify-center group">
				<NavLink href="https://linkedin.com/in/gazishahi/" text="LinkedIn" />
				<img src={linkedin} alt="LinkedIn" class="size-7 ml-2 group-hover:animate-pulse" />
			</div>
			<div class="flex justify-center group">
				<NavLink href="https://x.com/gazishahi01" text="X (Twitter)" />
				<img src={twitter} alt="X/Twitter" class="size-7 ml-2 group-hover:animate-pulse" />
			</div>
			<div class="flex justify-center">
				<NavLink href="/summon" text="Summon" />
				<img src={summoner} alt="Summoner" class="size-7 ml-2 group-hover:animate-pulse" />
			</div>

			<div class="border-t-4 border-slate-400 pt-2">
				<NavLink href="/" text="Go back" />
			</div>
		</div>
	</div>
</div>
