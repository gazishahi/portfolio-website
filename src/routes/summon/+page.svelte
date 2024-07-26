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
	import { Sound } from 'svelte-sound';

	const runAudio = new Sound('/audio/running.mp3');
	const selectAudio = new Sound('/audio/select.mp3');
	const hoverAudio = new Sound('/audio/hover.mp3');

	let showSprite = false;
	let showForm = false;

	function playRun() {
		runAudio.play();
	}

	let status = '';

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
	{#if !showSprite}
		<div
			transition:fade
			class="flex flex-col justify-center bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/2"
		>
			<div
				class="flex flex-col justify-start m-5 text-lg text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia size-full relative w-full h-2/3"
			>
				<div class="flex justify-start space-x-3 mb-5">
					<p>Gazi:</p>

					<Typewriter class="flex" cursor={false} interval={30} mode={'cascade'} delay={800}>
						<p class="">I'm here! How can I help?</p>
					</Typewriter>
					{#if status == 'Email sent successfully!'}
						<Typewriter class="flex" cursor={false} interval={30} mode={'cascade'}>
							<p>Got it! I'll get back to you soon!</p>
						</Typewriter>
					{/if}
				</div>

				{#if showForm}
					<div in:fade={{ delay: 500 }} class="flex justify-evenly">
						<form on:submit|preventDefault={handleSubmit}>
							<input type="hidden" name="access_key" value="d85fff2d-1948-4f8e-aad4-4657ecfb0062" />

							<div class="flex flex-col">
								<div class="flex justify-evenly space-x-10 pb-3">
									<div>
										<p>Name</p>
										<input
											class="text-black py-2 indent-4 rounded-lg font-pixeloid"
											type="text"
											name="name"
											required
										/>
									</div>

									<div>
										<p>Email</p>
										<input
											class="text-black py-2 indent-4 rounded-lg font-pixeloid"
											type="text"
											name="email"
											required
										/>
									</div>
								</div>
								<textarea
									name="message"
									required
									rows="3"
									class="flex justify-center w-full h-1/2 text-black py-2 mb-3 indent-4 rounded-lg font-pixeloid"
								></textarea>
								<div class="hover:show-pointer flex justify-center">
									<input
										on:click={playSelect}
										on:mouseenter={playHover}
										class="hover:animate-pulse [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia py-3"
										type="submit"
									/>
									<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
								</div>
							</div>
						</form>
					</div>
					<div class="flex justify-center">{status}</div>
				{/if}
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

	.hidden {
		display: none;
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
