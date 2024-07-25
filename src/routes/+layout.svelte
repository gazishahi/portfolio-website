<script>
	import { browser } from '$app/environment';
	import '../app.css';
	import { Sound } from 'svelte-sound';
	import { onNavigate } from '$app/navigation';
	import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

	import song1 from '$lib/audio/Adventure.mp3';

	const bgAudio = new Sound(song1, { loop: true });

	let showPlay = true;
	let showPause = false;
	function playSound() {
		bgAudio.play();
		showPause = true;
		showPlay = false;
	}

	function pauseSound() {
		bgAudio.stop();
		showPause = false;
		showPlay = true;
	}

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<QueryClientProvider client={queryClient}>
	<div>
		{#if showPlay}
			<button class="absolute top-0 left-0" on:click={playSound}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-6"
				>
					<path
						fill-rule="evenodd"
						d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		{/if}
		{#if showPause}
			<button class="absolute top-0 left-0" on:click={pauseSound}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="size-6"
				>
					<path
						fill-rule="evenodd"
						d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		{/if}

		<slot />
	</div>
</QueryClientProvider>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation: 400ms cubic-bezier(0.4, 0, 1, 1) both fade-out;
	}

	:root::view-transition-new(root) {
		animation: 400ms cubic-bezier(0, 0, 0.2, 1) 400ms both fade-in;
	}
</style>
