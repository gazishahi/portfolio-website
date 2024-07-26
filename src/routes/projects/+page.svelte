<script>
	import NavLink from '$lib/components/NavLink.svelte';
	import { fly } from 'svelte/transition';
	import pointer from '$lib/images/pointer.png';
	import { Sound } from 'svelte-sound';
	import github from '$lib/images/github.png';

	let showQuest1 = false;
	let showQuest2 = false;
	let showQuest3 = false;

	let completed = true;
	let ongoing = false;
	const selectAudio = new Sound(
		'https://dl.dropbox.com/scl/fi/she6jhqo4wo6srv2eggbq/select.mp3?rlkey=sovfoc5p9w0e9ofhcgx0vx2wr&st=slwhv0m8&dl=0'
	);
	const hoverAudio = new Sound(
		'https://dl.dropbox.com/scl/fi/fg8iy8n0yphtva3llyryb/hover.mp3?rlkey=pb3eo21yrj2sk36t4acla36ir&st=dcu7z1uh&dl=0'
	);

	// Function to toggle the visibility
	function toggleQuest1() {
		showQuest1 = true;
		showQuest2 = false;
		showQuest3 = false;
	}

	function toggleQuest2() {
		showQuest1 = false;
		showQuest2 = true;
		showQuest3 = false;
	}

	function toggleQuest3() {
		showQuest1 = false;
		showQuest2 = false;
		showQuest3 = true;
	}

	function playSelect() {
		selectAudio.play();
	}

	function playHover() {
		hoverAudio.play();
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
				class="mr-1 bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg h-full w-1/4"
			>
				<h2
					class="mt-5 ml-5 mb-3 font-minecraftia text-white text-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
				>
					Ongoing Quests
				</h2>

				<div class="w-full space-y-2 flex flex-col justify-between">
					<div
						class="hover:show-pointer pl-5 mb-1 w-full font-minecraftia text-white text-md [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] flex justify-start"
					>
						<button
							on:click={toggleQuest1}
							on:click={playSelect}
							on:mouseenter={playHover}
							class=" flex justify-center m-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							Headstarter AI Fellowship
						</button>
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>

					<div
						class="hover:show-pointer pl-5 mb-1 w-full font-minecraftia text-white text-md [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] flex justify-start"
					>
						<button
							on:click={toggleQuest2}
							on:click={playSelect}
							on:mouseenter={playHover}
							class=" flex justify-center m-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							Relay Mobile Applications
						</button>
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>

					<div
						class="hover:show-pointer pl-5 mb-1 w-full font-minecraftia text-white text-md [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] flex justify-start"
					>
						<button
							on:click={toggleQuest3}
							on:click={playSelect}
							on:mouseenter={playHover}
							class=" flex justify-center m-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							CodeHive Frontend
						</button>
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>
				</div>

				<hr class="w-full mt-3" />
				<h2
					class="mt-7 m-5 font-minecraftia text-white text-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
				>
					Completed Quests
				</h2>

				<div class="w-full space-y-2 flex flex-col justify-between">
					<div
						class="font-minecraftia text-white text-sm mx-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
					>
						<p class="leading-8">This section is currently being built! Stay tuned!</p>
						<p class="leading-8">In the meantime, you can visit my GitHub:</p>
						<div class="flex justify-center hover:show-pointer">
							<a
								href="https://github.com/gazishahi"
								class=" w-2/5 text-white flex mt-1 p-2 shadow-sm bg-blue-500 rounded-full transition-shadow hover:shadow-lg duration-300"
								on:click={playSelect}
								on:mouseenter={playHover}
							>
								<div class="flex space-x-3 justify-evenly">
									<img src={github} alt="GitHub" class="size-7 group-hover:animate-pulse" />
									<p class="mt-2">GitHub</p>
								</div>
							</a>
							<img src={pointer} alt="pointer" class="pointer h-12 w-12 mr-28" />
						</div>
					</div>
					<!-- <div
						class="hover:show-pointer pl-5 mb-1 w-full font-minecraftia text-white text-md [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] flex justify-start"
					>
						<button
							on:click={toggleQuest3}
							on:click={playSelect}
							on:mouseenter={playHover}
							class=" flex justify-center m-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							CodeHive Frontend
						</button>
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>

					<div
						class="hover:show-pointer pl-5 mb-1 w-full font-minecraftia text-white text-md [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] flex justify-start"
					>
						<button
							on:click={toggleQuest2}
							on:click={playSelect}
							on:mouseenter={playHover}
							class=" flex justify-center m-5 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							CodeHive Frontend
						</button>
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div> -->
				</div>
			</div>
			<main
				class="[text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] justify-start relative my-component bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg w-3/4"
			>
				{#if showQuest1}
					<div
						class="el1 m-7"
						in:fly={{ x: 100, duration: 400, delay: 150 }}
						out:fly={{ x: 100, duration: 400 }}
					>
						<div class="font-minecraftia text-white leading-10 space-y-5">
							<h1>
								The first week of the Headstarter AI Fellowship has begun. Throughout the next 7
								weeks, I will pursue 5 quests in AI to enhance my mastery as a software engineer.
								Here are the quests for this week:
							</h1>

							<div class="flex flex-col">
								<h1 class="text-xl">Current:</h1>

								<div class="flex">
									<input type="checkbox" bind:checked={ongoing} disabled />
									<p class="mt-3 ml-3">Summon an engineer</p>
								</div>
								<div class="flex">
									<input type="checkbox" bind:checked={ongoing} disabled />
									<p class="mt-3 ml-3">Test my skills in the trial interview</p>
								</div>
								<div class="flex">
									<input type="checkbox" bind:checked={ongoing} disabled />
									<p class="mt-3 ml-3">Share my journey</p>
								</div>
								<h1 class="text-xl mt-3">Completed:</h1>
								<div class="flex">
									<input type="checkbox" bind:checked={completed} disabled />
									<p class="mt-3 ml-3">Find my party</p>
								</div>
								<div class="flex">
									<input type="checkbox" bind:checked={completed} disabled />
									<p class="mt-3 ml-3">Build my base (portfolio website)</p>
								</div>
								<h1 class="text-xl mt-3">Tech Stack:</h1>
								<div class="flex flex-col">
									<p class="mt-3">Frontend: Svelte + Tailwind CSS</p>
								</div>
							</div>
						</div>
					</div>
				{:else if showQuest2}
					<div
						class="el1 m-7"
						in:fly={{ x: 100, duration: 400, delay: 150 }}
						out:fly={{ x: 100, duration: 400 }}
					>
						<div class="font-minecraftia text-white leading-10 space-y-5">
							<h1>
								My allies and I have embarked on a journey to create a platform that will help those
								who are struggling with their faith or do not have the means to learn the
								fundamentals of Islam. Here is what we must do:
							</h1>

							<div class="flex flex-col">
								<h1 class="text-xl">Current:</h1>
								<div class="flex">
									<input type="checkbox" bind:checked={ongoing} disabled />
									<p class="mt-3 ml-3">Release iOS Application</p>
								</div>
								<div class="flex">
									<input type="checkbox" bind:checked={ongoing} disabled />
									<p class="mt-3 ml-3">Spread the word!</p>
								</div>
								<div class="flex">
									<input type="checkbox" bind:checked={ongoing} disabled />
									<p class="mt-3 ml-3">Commence Android development</p>
								</div>
								<h1 class="text-xl mt-3">Completed:</h1>
								<div class="flex">
									<input type="checkbox" bind:checked={completed} disabled />
									<p class="mt-3 ml-3">Complete and submit v1.0 of iOS Application</p>
								</div>

								<h1 class="text-xl mt-3">Tech Stack:</h1>
								<div class="flex flex-col">
									<p class="mt-3">Frontend: SwiftUI</p>
									<p class="mt-3">Backend: AWS via SST</p>
								</div>
							</div>
						</div>
					</div>
				{:else if showQuest3}
					<div
						class="el1 m-7"
						in:fly={{ x: 100, duration: 400, delay: 150 }}
						out:fly={{ x: 100, duration: 400 }}
					>
						<div class="font-minecraftia text-white leading-10 space-y-5">
							<h1>
								My allies require my assistance! They have been working tireless to build a web
								application that is designed to help those who are struggling with their technical
								skills in software engineering. We are to build a collaborative platform that will
								help them in their journey. Here is what we must do:
							</h1>

							<div class="flex flex-col">
								<h1 class="text-xl">Current:</h1>
								<div class="flex">
									<input type="checkbox" bind:checked={ongoing} disabled />
									<p class="mt-3 ml-3">Wait for your ally's signal (Jira ticket)</p>
								</div>
								<div class="flex">
									<input type="checkbox" bind:checked={completed} disabled />
									<p class="mt-3 ml-3">Commence renovations of ally's base</p>
								</div>
								<h1 class="text-xl mt-3">Tech Stack:</h1>
								<div class="flex flex-col">
									<p class="mt-3">Frontend: React</p>
									<p class="mt-3">Backend: Spring Boot + Express.js</p>
									<p class="mt-3">Database: DynamoDB+ Neo4j</p>
								</div>
							</div>
						</div>
					</div>
				{/if}
				<div
					class="pt-1 pb-1 absolute bottom-0 right-0 left-0 text-white border-t-4 border-slate-400 rounded-br-lg rounded-bl-lg bg-gradient-to-t from-indigo-600 to-blue-500"
				>
					<NavLink href="/" text="Go back" />
				</div>
			</main>
		</div>
	</div>
</div>

<style>
	main {
		font-family: sans-serif;
		text-align: start;
		overflow: hidden;
		height: 100%;
		display: grid;
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

	.el1 {
		grid-column: 1/2;
		grid-row: 1/2;
	}
</style>
