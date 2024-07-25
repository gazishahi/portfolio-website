<script>
	export let href;
	export let text;
	import pointer from '$lib/images/pointer.png';
</script>

<a
	{href}
	class="flex justify-center text-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] font-minecraftia hover:show-pointer"
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
