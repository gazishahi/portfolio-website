<script>
	export let href;
	export let text;
	import pointer from '$lib/images/pointer.png';
	import { Sound } from 'svelte-sound';

	const backAudio = new Sound(
		'https://dl.dropbox.com/scl/fi/bu8n7hdggrxkizgcmipwc/back.mp3?rlkey=qi7oeyhsl340xp9cu15xasmwo&st=bfyz7oav&dl=0'
	);
	const selectAudio = new Sound(
		'https://dl.dropbox.com/scl/fi/she6jhqo4wo6srv2eggbq/select.mp3?rlkey=sovfoc5p9w0e9ofhcgx0vx2wr&st=slwhv0m8&dl=0'
	);
	const hoverAudio = new Sound(
		'https://dl.dropbox.com/scl/fi/fg8iy8n0yphtva3llyryb/hover.mp3?rlkey=pb3eo21yrj2sk36t4acla36ir&st=dcu7z1uh&dl=0'
	);

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
