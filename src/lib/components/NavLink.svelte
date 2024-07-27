<script>
	export let href;
	export let text;
	import pointer from '$lib/images/pointer.png';
	import { goto } from '$app/navigation';

	let hoverAudio;
	let selectAudio;
	let backAudio;

	const playAudioAndNavigate = (event, text, url) => {
		event.preventDefault(); // Prevent the default link click behavior
		if (text == 'Go back') {
			backAudio.play().then(() => {
				// Delay navigation to let the audio play for a short duration
				setTimeout(() => {
					if (url.startsWith('http')) {
						// Navigate to external link
						window.location.href = url;
					} else {
						// Navigate to internal route
						goto(url);
					}
				}, 300); // Adjust the delay as needed
			});
		} else {
			selectAudio.play().then(() => {
				// Delay navigation to let the audio play for a short duration
				setTimeout(() => {
					if (url.startsWith('http')) {
						// Navigate to external link
						window.location.href = url;
					} else {
						// Navigate to internal route
						goto(url);
					}
				}, 400); // Adjust the delay as needed
			});
		}
	};

	function playBack() {
		backAudio.play();
	}

	function playSelect() {
		selectAudio.play();
	}

	function playHover() {
		hoverAudio.play();
	}
</script>

<audio bind:this={selectAudio} src="/audio/select.mp3" />
<audio bind:this={backAudio} src="/audio/back.mp3" />
<audio bind:this={hoverAudio} src="/audio/hover.mp3" />
<a
	{href}
	class="flex justify-center text-sm md:text-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] font-minecraftia hover:show-pointer"
	on:click={(event) => playAudioAndNavigate(event, text, href)}
	on:mouseenter={playHover}
>
	<div class="flex">
		<span class="mt-2">{text}</span>
		<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
	</div>
</a>

<style>
	.hover\:show-pointer:hover .pointer {
		display: block;
	}

	.pointer {
		display: none;
		position: absolute;
		transform: translateX(-120%);
		margin-top: -2px;
		margin-left: 5px; /* Adjust this value for spacing */
	}
</style>
