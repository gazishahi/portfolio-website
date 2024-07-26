<script>
	import { fly } from 'svelte/transition';

	let green = true;
</script>

<main>
	{#if green}
		<div
			in:fly={{ x: 100, duration: 400, delay: 150 }}
			out:fly={{ x: 100, duration: 400 }}
			class="el1"
		></div>
	{:else}
		<div
			in:fly={{ x: 100, duration: 400, delay: 150 }}
			out:fly={{ x: 100, duration: 400 }}
			class="el2"
		></div>
	{/if}
</main>
<button
	on:click={() => {
		green = !green;
	}}
>
	Switch
</button>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
		overflow: hidden;
		height: 80px;
		display: grid;
	}

	.el1,
	.el2 {
		height: 5em;
		grid-column: 1/2;
		grid-row: 1/2;
	}

	.el1 {
		background-color: green;
	}

	.el2 {
		background-color: blue;
	}

	button {
		display: block;
		margin: 1em auto;
	}
</style>
