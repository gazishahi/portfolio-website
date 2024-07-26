<script>
	export let href;
	export let text;
	import pointer from '$lib/images/pointer.png';
	import back from '$lib/audio/back.mp3';
	import select from '$lib/audio/select.mp3';
	import hover from '$lib/audio/hover.mp3';
	import { Sound } from 'svelte-sound';

	const backAudio = new Sound(back);
	const selectAudio = new Sound(select);
	const hoverAudio = new Sound(hover);

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

<a
	{href}
	class="flex justify-center text-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] font-minecraftia hover:show-pointer"
	on:click={text == 'Go back' ? playBack : playSelect}
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
