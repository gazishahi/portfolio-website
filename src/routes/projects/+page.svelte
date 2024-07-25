<script>
	import NavLink from '$lib/components/NavLink.svelte';
	import { fly } from 'svelte/transition';
	import pointer from '$lib/images/pointer.png';
	let showQuest1 = false;
	let showQuest2 = false;
	let showQuest3 = false;

	// Function to toggle the visibility
	function toggleQuest1() {
		showQuest1 = !showQuest1;
	}

	function toggleQuest2() {
		showQuest2 = !showQuest2;
	}

	function toggleQuest3() {
		showQuest3 = !showQuest3;
	}
</script>

<div class="flex items-center justify-center h-screen">
	<div class="flex flex-col rounded-lg size-11/12">
		<div
			class="flex bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg justify-center mb-1 text-2xl text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia"
		>
			<p class="mt-3">Quests</p>
		</div>

		<div class="flex h-full">
			<div
				class="mr-1 bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg h-full w-1/3"
			>
				<h2 class="m-5 font-minecraftia text-white text-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
					Ongoing Quests
				</h2>

				<div class="w-full space-y-2 flex flex-col justify-between pl-5">
					<div
						class="hover:show-pointer pl-10 mb-1 w-11/12 font-minecraftia text-white text-md [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] flex justify-start"
					>
						<button
							on:click={toggleQuest1}
							class=" flex justify-center m-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							Headstarter AI Fellowship
						</button>
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>

					<div
						class="hover:show-pointer pl-10 mb-1 w-11/12 font-minecraftia text-white text-md [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] flex justify-start"
					>
						<button
							on:click={toggleQuest2}
							class=" flex justify-center m-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							Relay Mobile Applications
						</button>
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>

					<div
						class="hover:show-pointer pl-10 mb-1 w-11/12 font-minecraftia text-white text-md [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] flex justify-start"
					>
						<button
							on:click={toggleQuest3}
							class=" flex justify-center m-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							CodeHive Frontend
						</button>
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>
				</div>

				<hr class="w-full" size="2" />
				<h2 class="m-5 font-minecraftia text-white text-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
					Completed Quests
				</h2>

				<div class="w-full space-y-2 flex flex-col justify-between pl-5">
					<div
						class="mb-1 w-11/12 font-minecraftia text-white text-md [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] flex flex-col bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg"
					>
						<button
							on:click={toggleQuest2}
							class="flex justify-center m-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							Relay Mobile Applications
						</button>
					</div>

					<div
						class="mb-1 w-11/12 font-minecraftia text-white text-md [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] flex flex-col bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg"
					>
						<button
							on:click={toggleQuest3}
							class="flex justify-center m-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							CodeHive Frontend
						</button>
					</div>
				</div>
			</div>
			<div
				class="[text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] relative my-component bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg w-2/3"
			>
				{#if showQuest1}
					<div class="flex justify-center" in:fly={{ x: -300 }} out:fly={{ x: -200 }}>
						<div class="font-minecraftia text-white">
							<h2>Complete 5 AI Projects</h2>
							<p>Current: Portfolo</p>
						</div>
					</div>
				{/if}
				{#if showQuest2}
					<div class="flex justify-center" in:fly={{ x: -300 }} out:fly={{ x: -200 }}>
						<div class="font-minecraftia text-white">
							<h2>Build iOS App</h2>
							<p>You can put any content here.</p>
						</div>
					</div>
				{/if}
				{#if showQuest3}
					<div class="flex justify-center" in:fly={{ x: -300 }} out:fly={{ x: -200 }}>
						<div class="font-minecraftia text-white">
							<h2>Redesign landing page using Figma Mockups</h2>
							<p>You can put any content here.</p>
						</div>
					</div>
				{/if}
				<div
					class="pt-1 pb-1 absolute bottom-0 right-0 left-0 text-white border-t-4 border-slate-400 rounded-br-lg rounded-bl-lg bg-gradient-to-t from-indigo-600 to-blue-500"
				>
					<NavLink href="/" text="Go back" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
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
		margin-top: 10px;
		margin-left: 5px; /* Adjust this value for spacing */
	}
</style>
