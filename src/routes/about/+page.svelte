<script lang="ts">
	import NavLink from '$lib/components/NavLink.svelte';
	import { onMount } from 'svelte';
	import pointer from '$lib/images/pointer.png';
	import pfp from '$lib/images/pfp.png';
	import sprite from '$lib/images/finalSprite.gif';
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import Query from '$lib/Query.svelte';
	import Typewriter from 'svelte-typewriter';
	import { Sound } from 'svelte-sound';

	let time = new Date();
	let showAbilities = false;
	let showStatus = true;
	let showJob = false;
	let showPfp = false;

	const selectAudio = new Sound(
		'https://dl.dropbox.com/scl/fi/she6jhqo4wo6srv2eggbq/select.mp3?rlkey=sovfoc5p9w0e9ofhcgx0vx2wr&st=slwhv0m8&dl=0'
	);
	const hoverAudio = new Sound(
		'https://dl.dropbox.com/scl/fi/fg8iy8n0yphtva3llyryb/hover.mp3?rlkey=pb3eo21yrj2sk36t4acla36ir&st=dcu7z1uh&dl=0'
	);

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
		requestAnimationFrame(() => {
			setTimeout(() => {
				showPfp = true;
			}, 0);
		});

		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	function toggleAbilities() {
		showAbilities = true;
		showStatus = false;
		showJob = false;
	}

	function toggleStatus() {
		showStatus = true;
		showAbilities = false;
		showJob = false;
	}

	function toggleJob() {
		showJob = true;
		showStatus = false;
		showAbilities = false;
	}

	function playSelect() {
		selectAudio.play();
	}

	function playHover() {
		hoverAudio.play();
	}
</script>

<div class="flex items-center justify-center h-screen">
	<div class="flex rounded-lg size-11/12 2xl:size-4/5">
		<div class="w-4/5 mr-1">
			<div
				class="flex bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg mb-1 h-1/3 w-full"
			>
				<img src={sprite} alt="Sprite" class="w-30 h-40 flex mt-8 ml-5" />
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
							<p>Current EXP:</p>
							<p>{365 - yearsSinceBirthday}</p>
						</div>
					</div>
					<div class="flex mt-5 justify-between">
						<div class="flex">
							<p class="pr-5 text-cyan-300">HP</p>
							<p>{ageDays}</p>
						</div>
						<div class="flex space-x-5">
							<p>To next level:</p>
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
								class="bg-gradient-to-r from-yellow-500 to-yellow-200 h-1.5 rounded-full"
								style="width: {birthdayPercentage}%"
							></div>
						</div>
					</div>
				</div>
			</div>

			<div
				class="bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg mr-1 h-2/3 w-full relative"
			>
				<main>
					{#if showStatus}
						<div
							class="el1 font-minecraftia text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
							in:fly={{ x: 100, duration: 400, delay: 150 }}
							out:fly={{ x: 100, duration: 400 }}
						>
							<div class="flex justify-start">
								{#if showPfp}
									<img
										src={pfp}
										alt="ProfilePicture"
										class="top-0 left-0 w-32 h-32 rounded-md border-2 border-slate-400 m-3"
										transition:fade={{ delay: 800 }}
									/>
								{/if}
								<div class="mt-5 flex relative">
									<div
										class="flex justify-start font-minecraftia text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] w-full whitespace-pre"
									>
										<Typewriter
											class="flex"
											cursor={false}
											interval={30}
											mode={'cascade'}
											delay={1500}
											disabled={!showStatus}
										>
											<div class="space-y-0 fix-text">
												<p>Hey! I'm Gazi, thanks for visiting my personal website!</p>
												<div class="flex whitespace-pre">
													<p>I'm a software engineer at &nbsp;</p>
													<a href="https://www.relayislam.com/" class="text-cyan-300">Relay</a>
													<p>&nbsp; and a software engineering fellow at &nbsp;</p>
													<a href="https://www.headstarter.co/" class="text-cyan-300">
														Headstarter AI
													</a>
												</div>
												<p>
													with a passion for web and mobile development. Some things about me...
												</p>
											</div>
										</Typewriter>
									</div>
								</div>
							</div>
							<div class="grid grid-cols-2 divide-x-2">
								<div class="flex flex-col justify-start">
									<Typewriter
										cursor={false}
										interval={30}
										mode={'cascade'}
										delay={9000}
										disabled={!showStatus}
									>
										<div class="flex justify-between m-3">
											<p>School:</p>
											<p>The City College of New York</p>
										</div>
										<div class="flex justify-between m-3">
											<p>Graduated:</p>
											<p>December 2023</p>
										</div>
										<div class="flex justify-between m-3">
											<p>Degree:</p>
											<p>Bachelor's of Engineering</p>
										</div>
										<div class="flex justify-between m-3">
											<p>Major:</p>
											<p>Computer Engineering</p>
										</div>
									</Typewriter>
								</div>
								<div class="flex justify-start">
									<Typewriter
										cursor={false}
										interval={30}
										mode={'cascade'}
										delay={13500}
										disabled={!showStatus}
									>
										<div class="m-3 space-y-3">
											<p>I like:</p>
											<p>Listening to the voices in my head</p>
											<p>Playing video games (pray I beat Elden Ring)</p>
											<p>Running and working out</p>
										</div>
									</Typewriter>
								</div>
							</div>
							<div class="m-3">
								<Typewriter
									cursor={false}
									interval={30}
									mode={'cascade'}
									delay={17000}
									disabled={!showStatus}
								>
									<p class="mb-1">Other things about me:</p>
									<p class="leading-8">
										Proud Muslim. Bengali American. Unfortunately a middle child. My typical form of
										media consumption consists of pretentious video essays, tech news, and games.
										Got an iOS app coming out soon. Big fan of role-playing games like Final
										Fantasy/Kingdom Hearts, as you could probably tell. And of course, I am super
										excited about becoming an AI engineer.
									</p>
								</Typewriter>
							</div>
						</div>
					{:else if showAbilities}
						<div
							class="el1 m-5 flex justify-center"
							in:fly={{ x: 100, duration: 400, delay: 150 }}
							out:fly={{ x: 100, duration: 400 }}
						>
							<div
								class="grid grid-cols-2 gap-x-20 font-minecraftia text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] w-full"
							>
								<div class="space-y-4">
									<h1 class="text-xl">Languages</h1>
									<div class="flex justify-between">
										<p>Python</p>
										<p class="text-cyan-300">LV4</p>
									</div>
									<div class="flex justify-between">
										<p>C/C++</p>
										<p class="text-cyan-300">LV7</p>
									</div>
									<div class="flex justify-between">
										<p>Java</p>
										<p class="text-cyan-300">LV2</p>
									</div>
									<div class="flex justify-between">
										<p>JavaScript/TypeScript</p>
										<p class="text-cyan-300">LV3</p>
									</div>
									<div class="flex justify-between">
										<p>HTML/CSS</p>
										<p class="text-cyan-300">LV3</p>
									</div>
									<div class="flex justify-between">
										<p>Svelte</p>
										<p class="text-cyan-300">LV1</p>
									</div>
									<div class="flex justify-between">
										<p>Swift/SwiftUI</p>
										<p class="text-cyan-300">LV3</p>
									</div>
									<div class="flex justify-between">
										<p>SQL/PostgreSQL</p>
										<p class="text-cyan-300">LV2</p>
									</div>
									<div class="flex justify-between">
										<p>Solidity</p>
										<p class="text-cyan-300">LV1</p>
									</div>
								</div>

								<div class="space-y-4">
									<h1 class="text-xl">Technologies</h1>
									<div class="flex justify-between">
										<p>React</p>
										<p class="text-cyan-300">LV2</p>
									</div>
									<div class="flex justify-between">
										<p>Next.js</p>
										<p class="text-cyan-300">LV1</p>
									</div>

									<div class="flex justify-between">
										<p>Amazon Web Services</p>
										<p class="text-cyan-300">LV1</p>
									</div>
									<div class="flex justify-between">
										<p>Node.js</p>
										<p class="text-cyan-300">LV2</p>
									</div>
									<div class="flex justify-between">
										<p>Spring Boot</p>
										<p class="text-cyan-300">LV1</p>
									</div>
									<div class="flex justify-between">
										<p>Docker</p>
										<p class="text-cyan-300">LV1</p>
									</div>
									<div class="flex justify-between">
										<p>Git/GitHub</p>
										<p class="text-cyan-300">LV4</p>
									</div>
									<div class="flex justify-between">
										<p>Android Studio</p>
										<p class="text-cyan-300">LV2</p>
									</div>
									<div class="flex justify-between">
										<p>Firebase</p>
										<p class="text-cyan-300">LV2</p>
									</div>
								</div>
							</div>
						</div>
					{:else if showJob}
						<div
							class="el1 m-5 flex flex-col"
							in:fly={{ x: 100, duration: 400, delay: 150 }}
							out:fly={{ x: 100, duration: 400 }}
						>
							<div
								class="grid grid-cols-12 justify-items-start gap-4 font-minecraftia text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] w-full"
							>
								<h1 class="col-span-12 text-xl">Current Jobs</h1>
								<p class="col-span-5">Headstarter AI</p>
								<p class="col-span-6 text-cyan-300">Software Engineering Fellow</p>
								<p class="col-span-1">2024</p>

								<p class="col-span-5">Relay</p>
								<p class="col-span-6 text-cyan-300">Software Engineer</p>
								<p class="col-span-1">2024</p>

								<hr class="w-full mt-2 mb-5 col-span-12" />

								<h1 class="col-span-12 text-xl">Completed Jobs</h1>
								<p class="col-span-5">Tech Incubator at Queens College</p>
								<p class="col-span-6 text-cyan-300">Software Developer Intern</p>
								<p class="col-span-1">2023</p>

								<p class="col-span-5">Research Foundation of CUNY</p>
								<p class="col-span-6 text-cyan-300">Blockchain Researh Intern</p>
								<p class="col-span-1">2023</p>

								<p class="col-span-5">Google</p>
								<p class="col-span-6 text-cyan-300">Computer Science Research Mentee</p>
								<p class="col-span-1">2022</p>

								<p class="col-span-5">CodePath</p>
								<p class="col-span-6 text-cyan-300">Software Engineering Fellow</p>
								<p class="col-span-1">2021</p>
							</div>

							<!-- <div
								class="flex flex-col font-minecraftia text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
							>
								<div class="flex justify-between">
									<p>Headstarter AI</p>
									<p>Software Engineering Fellow</p>
									<p>2024</p>
								</div>

								<div class="flex justify-between">
									<p>Relay</p>
									<p>Software Engineer</p>
									<p>2024</p>
								</div>

								<div class="flex justify-between">
									<p>Tech Incubator at Queens College</p>
									<p>Software Developer Intern</p>
									<p>2023</p>
								</div>

								<div class="flex justify-between">
									<p>Research Foundation of CUNY</p>
									<p>Blockchain Researh Intern</p>
									<p>2023</p>
								</div>

								<div class="flex justify-between">
									<p>Google</p>
									<p>Computer Science Research Mentee</p>
									<p>2022</p>
								</div>

								<div class="flex justify-between">
									<p>CodePath</p>
									<p>Software Engineering Fellow</p>
									<p>2021</p>
								</div>
							</div> -->
						</div>
					{/if}
				</main>
			</div>
		</div>

		<div class="flex flex-col rounded-lg h-full w-1/5">
			<div
				class="flex flex-col bg-gradient-to-t from-indigo-600 to-blue-500 text-white text-xl font-minecraftia justify-start border-4 border-slate-400 rounded-lg mb-1 h-2/3 w-full [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
			>
				<div class="hover:show-pointer">
					<button
						on:click={playSelect}
						on:mouseenter={playHover}
						on:click={toggleStatus}
						class="flex justify-start mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
					>
						Status
					</button>
					<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
				</div>
				<div class="hover:show-pointer">
					<button
						on:click={playSelect}
						on:mouseenter={playHover}
						on:click={toggleAbilities}
						class="flex justify-start mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
					>
						Abilities
					</button>
					<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
				</div>
				<div class="hover:show-pointer">
					<button
						on:click={playSelect}
						on:mouseenter={playHover}
						on:click={toggleJob}
						class="flex justify-start mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
					>
						Job
					</button>
					<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
				</div>
				<div class="hover:show-pointer">
					<a
						on:click={playSelect}
						on:mouseenter={playHover}
						class="flex justify-start mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						href="https://dl.dropbox.com/scl/fi/gxrwno0lp8vgyzkh4iknz/Gazi-Shahi-Resume.pdf?rlkey=18kd5x54tohr1gn77jzrr1wa6&st=bins3mca&dl=0"
					>
						Resume
					</a>
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

	.el1 {
		height: 5em;
		grid-column: 1/2;
		grid-row: 1/2;
	}

	.fix-text {
		white-space: pre;
	}

	main {
		font-family: sans-serif;
		text-align: start;
		overflow: hidden;
		height: 100%;
		display: grid;
	}
</style>
