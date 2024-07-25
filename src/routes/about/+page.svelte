<script>
	import NavLink from '$lib/components/NavLink.svelte';
	import { onMount } from 'svelte';
	import pointer from '$lib/images/pointer.png';
	import sprite from '$lib/images/finalSprite.gif';
	import { fly } from 'svelte/transition';
	import Query from '$lib/Query.svelte';
	import StatusDialog from '$lib/StatusDialog.svelte';
	import Typewriter from 'svelte-typewriter';

	let time = new Date();
	let showEquipment = false;
	let showAbilities = false;
	let showStatus = false;
	let showJob = false;

	// these automatically update when `time`
	// changes, because of the `$:` prefix
	$: hours = time.getHours().toString().padStart(2, '0');
	$: minutes = time.getMinutes().toString().padStart(2, '0');
	$: seconds = time.getSeconds().toString().padStart(2, '0');

	// Replace with your last birthday date
	const lastBirthday = new Date('2024-05-21');
	const birthDay = new Date('2001-05-21');

	function daysSince(date) {
		const now = new Date();
		const timeDiff = now - date;
		return Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
	}

	function yearsSince(date) {
		const now = new Date();
		const timeDiff = now - date;
		return Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365)); // Convert milliseconds to days
	}

	// Calculate days since last birthday
	const daysSinceBirthday = daysSince(lastBirthday).toFixed(0);
	const ageDays = daysSince(birthDay).toFixed(0);
	const ageYears = yearsSince(birthDay).toFixed(0);

	// Divide by 365 to get the number of years
	const yearsSinceBirthday = 365 - daysSinceBirthday;
	const birthdayPercentage = (100 * daysSinceBirthday) / 365;

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	function toggleEquipment() {
		showEquipment = !showEquipment;
		showStatus = false;
	}

	function toggleAbilities() {
		showAbilities = !showAbilities;
	}

	function toggleStatus() {
		showStatus = !showStatus;
		showEquipment = false;
	}

	function toggleJob() {
		showJob = !showJob;
	}
</script>

<div class="flex items-center justify-center h-screen">
	<div class="flex rounded-lg size-11/12">
		<div class="w-4/5 mr-1">
			<div
				class="flex bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg mb-1 h-1/3 w-full"
			>
				<img src={sprite} alt="Sprite" class="w-30 h-40 flex mt-5 ml-5" />
				<div
					class="m-5 text-xl text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia w-full"
				>
					<div class="flex justify-between">
						<p>Gazi Shahi</p>
						<p>Software Engineer</p>
					</div>
					<div class="flex mt-5 justify-between">
						<div class="flex">
							<p class="pr-5 text-cyan-300">LV</p>
							<p>{ageYears}</p>
						</div>
						<div class="flex space-x-5">
							<p>EXP:</p>
							<p>{365 - yearsSinceBirthday}</p>
						</div>
					</div>
					<div class="flex mt-5 justify-between">
						<div class="flex">
							<p class="pr-5 text-cyan-300">HP</p>
							<p>{ageDays}</p>
						</div>
						<div class="flex space-x-5">
							<p>EXP to Next Lvl:</p>
							<p>{yearsSinceBirthday.toFixed(0)}</p>
						</div>
					</div>
					<div class="flex mt-5 justify-between">
						<div class="flex">
							<p class="pr-5 text-cyan-300">MP</p>
							<Query />
						</div>
						<div class="w-2/3 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
							<div
								class="bg-yellow-300 h-1.5 rounded-full"
								style="width: {birthdayPercentage}%"
							></div>
						</div>
					</div>
				</div>
			</div>

			<div
				class="flex justify-center bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg mr-1 h-2/3 w-full"
			>
				{#if showEquipment}
					<div class="flex justify-center" in:fly={{ x: -300 }} out:fly={{ x: -200 }}>
						<div class="font-minecraftia text-white">
							<p>PC</p>
							<p>Processor: Ryzen 9 7900X</p>
						</div>
					</div>
				{/if}

				{#if showStatus}
					<div class="m-5 flex justify-center">
						<div
							class="flex justify-center font-minecraftia text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							<Typewriter class="flex" cursor={false} interval={70}>
								<p>Hey! I'm Gazi</p>
							</Typewriter>
							<Typewriter cursor={false} interval={70} delay={3000}>
								<p>, thanks for visiting my personal website!</p>
							</Typewriter>
						</div>
					</div>
				{/if}

				{#if showAbilities}
					<div
						class="m-5 flex justify-center"
						in:fly={{ delay: 100, x: -100 }}
						out:fly={{ x: -50 }}
					>
						<div
							class="flex flex-col justify-center font-minecraftia text-white space-y-7 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							<p>Python</p>
							<p>C/C++</p>
							<p>Java</p>
							<p>JavaScript</p>
							<p>React</p>
							<p>Next.js</p>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<div class="flex flex-col rounded-lg w-1/5">
			<div
				class="flex flex-col bg-gradient-to-t from-indigo-600 to-blue-500 text-white text-xl font-minecraftia justify-start border-4 border-slate-400 rounded-lg mb-1 h-2/3 w-full [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
			>
				<div class="hover:show-pointer">
					<button
						on:click={toggleEquipment}
						class="flex justify-start mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>Equipment</button
					>
					<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
				</div>
				<div class="hover:show-pointer">
					<button
						on:click={toggleStatus}
						class="flex justify-start mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>Status</button
					>
					<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
				</div>
				<div class="hover:show-pointer">
					<button
						on:click={toggleAbilities}
						class="flex justify-start mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>Abilities</button
					>
					<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
				</div>
				<div class="hover:show-pointer">
					<button
						on:click={toggleJob}
						class="flex justify-start mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>Job</button
					>
					<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
				</div>
			</div>

			<div
				class="flex justify-center bg-gradient-to-t from-indigo-600 to-blue-500 p-5 text-white text-xl font-minecraftia border-4 border-slate-400 rounded-lg mb-1 h-1/7 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
			>
				<p class="mt-3">New York City</p>
			</div>

			<div
				class=" text-white bg-gradient-to-t from-indigo-600 to-blue-500 text-lg font-minecraftia border-4 border-slate-400 rounded-lg h-1/7 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
			>
				<div class="ml-5 mr-5 mt-5 flex justify-between">
					<p>Time</p>
					<p>{hours} : {minutes} : {seconds}</p>
				</div>

				<div class="ml-5 mr-5 mt-5 mb-5 flex justify-between">
					<p>Gil</p>
					<p>0</p>
				</div>
				<div class="pt-3 pb-3 flex justify-center border-t-4 border-slate-400">
					<NavLink href="/" text="Go back" />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.hover\:show-pointer:hover .pointer {
		display: block;
	}

	.pointer {
		display: none;
		position: absolute;
		transform: translateX(-100%);
		transform: translateY(-80%); /* Adjust this value for spacing */
	}
</style>
