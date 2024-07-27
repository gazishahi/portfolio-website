<script lang="ts">
	import NavLink from '$lib/components/NavLink.svelte';
	import sprite from '$lib/images/runSprite.gif';
	import standingSprite from '$lib/images/standSprite.png';
	import pointer from '$lib/images/pointer.png';
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Typewriter from 'svelte-typewriter';

	let hoverAudio;
	let selectAudio;
	let runAudio;

	let showSprite = false;
	let showForm = false;

	let status = '';

	function playRun() {
		runAudio.play();
	}

	function playSelect() {
		selectAudio.play();
	}

	function playHover() {
		hoverAudio.play();
	}

	const handleSubmit = async (data) => {
		status = 'Submitting...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			status = result.message || 'Success';
		}
	};

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
			setTimeout(() => {
				showForm = true;
			}, 4200);
		});
	});
</script>

<div class="full-screen-center">
	<audio bind:this={hoverAudio} src="/audio/hover.mp3" />
	<audio bind:this={selectAudio} src="/audio/select.mp3" />
	<audio bind:this={runAudio} src="/audio/running.mp3" />
	{#if !showSprite}
		<div
			transition:fade
			class="flex flex-col absolute md:static top-10 justify-center bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg w-11/12 md:w-1/2 lg:w-2/5 xl:w-1/3"
		>
			<div
				class="flex flex-col justify-center md:mt-0 text-sm md:text-lg text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia w-full"
			>
				<div class="flex justify-start space-x-3 mt-5 mx-5 md:mx-0">
					<p class="md:ml-5">Gazi:</p>
					<div class="flex flex-col md:flex-row">
						<Typewriter
							class="flex flex-col"
							cursor={false}
							interval={30}
							mode={'cascade'}
							delay={800}
						>
							<p class="">I'm here! How can I help?</p>
						</Typewriter>
						{#if status == 'Email sent successfully!'}
							<Typewriter class="flex" cursor={false} interval={30} mode={'cascade'}>
								<p class="mt-2">Got it! I'll get back to you soon!</p>
							</Typewriter>
						{/if}
					</div>
				</div>

				{#if showForm}
					<div in:fade={{ delay: 500 }} class="flex justify-evenly w-full">
						<form
							on:submit|preventDefault={handleSubmit}
							class="w-full flex flex-col justify-center"
						>
							<input type="hidden" name="access_key" value="d85fff2d-1948-4f8e-aad4-4657ecfb0062" />

							<div class="flex flex-col mx-5">
								<div class="mt-5 md:mt-0 md:flex md:justify-evenly md:space-x-5 md:pb-3">
									<div>
										<p>Name</p>
										<input
											class="text-black py-2 indent-4 rounded-lg font-pixeloid mb-3 md:mb-0 w-full"
											type="text"
											name="name"
											required
										/>
									</div>

									<div>
										<p>Email</p>
										<input
											class="text-black py-2 indent-4 rounded-lg font-pixeloid mb-3 md:mb-0 w-full"
											type="text"
											name="email"
											required
										/>
									</div>
								</div>
								<textarea
									name="message"
									required
									rows="2"
									class="flex justify-center w-full h-1/2 text-black py-2 mt-3 md:mt-0 mb-3 indent-4 rounded-lg font-pixeloid"
								></textarea>
								<div class="hover:show-pointer flex justify-center">
									<input
										on:click={playSelect}
										on:mouseenter={playHover}
										class="hover:animate-pulse [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia pt-3"
										type="submit"
									/>
									<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
								</div>
							</div>
						</form>
					</div>
					<div class="flex justify-center mt-3 mb-1">{status}</div>
				{/if}
			</div>
			<div
				class="flex flex-col justify-center space-y-1 md:space-y-4 text-white border-t-4 border-slate-400 mb-1"
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

	.hover\:show-pointer:hover .pointer {
		display: block;
	}

	.pointer {
		display: none;
		position: absolute;
		transform: translateX(-70%);

		margin-left: -50px; /* Adjust this value for spacing */
	}
</style>
