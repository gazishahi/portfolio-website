<script lang="ts">
	let text = "Hey! I'm Gazi, Thanks for visiting my personal website!";
</script>

<div class="my-4">
	<h1 class="typewriter text-lg font-bold">{text}</h1>
</div>

<style>
	@keyframes typewriter {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	.typewriter {
		overflow: hidden;
		border-right: 0.5em solid transparent; /* Customize the caret */
		white-space: nowrap;
		animation: typewriter 4s steps(40) 1s forwards;
	}
</style>
