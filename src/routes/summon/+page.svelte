<script lang="ts">
	import NavLink from '$lib/components/NavLink.svelte';
	import sprite from '$lib/images/runSprite.gif';
	import standingSprite from '$lib/images/standSprite.png';
	import pfp from '$lib/images/pfp.png';
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Typewriter from 'svelte-typewriter';
	import running from '$lib/audio/running.mp3';
	import { Sound } from 'svelte-sound';

	const runAudio = new Sound(running);

	let showSprite = false;

	function playRun() {
		runAudio.play();
	}

	onMount(() => {
		requestAnimationFrame(() => {
			setTimeout(() => {
				showSprite = true;
			}, 0);
			setTimeout(() => {
				playRun();
			}, 350);
			setTimeout(() => {
				showSprite = false;
			}, 2300);
		});
	});
</script>

<div class="full-screen-center">
	{#if !showSprite}
		<div
			transition:fade
			class="flex flex-col justify-center bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/2"
		>
			<div
				class="flex flex-col justify-start m-5 text-lg text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia size-full relative w-full h-2/3"
			>
				<div class="flex justify-start space-x-3 mb-5">
					<img
						src={pfp}
						alt="pfp"
						class="w-32 h-32 top-0 left-0 rounded-md border-2 border-slate-400"
					/>
					<Typewriter class="flex" cursor={false} interval={30} mode={'cascade'} delay={800}>
						<p class="pt-2">I'm here! How can I help?</p>
					</Typewriter>
				</div>
				<form action="">
					<label for="fname">First name:</label>
					<input type="text" id="fname" name="fname" />
					<br />
					<br />
					<label for="lname">Last name:</label>
					<input type="text" id="lname" name="lname" />
					<br />
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>

			<div
				class="flex flex-col justify-center space-y-4 text-white border-t-4 border-slate-400 pt-2 mb-2"
			>
				<NavLink href="/contact" text="Go back" />
			</div>
		</div>
	{/if}
	{#if showSprite}
		<img
			src={sprite}
			alt="animatedSprite"
			in:fly={{ duration: 2400, x: 900, opacity: 1, easing: quadOut }}
			class="absolute bottom-0 w-30 h-40"
		/>
	{:else}
		<img src={standingSprite} alt="standingSprite" class="absolute bottom-0 w-30 h-40" />
	{/if}
</div>

<style>
	.full-screen-center {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
	}
</style>
