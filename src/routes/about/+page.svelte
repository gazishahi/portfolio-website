<script lang="ts">
	import { Tooltip } from '@svelte-plugins/tooltips';
	import NavLink from '$lib/components/NavLink.svelte';
	import { onMount } from 'svelte';
	import pointer from '$lib/images/pointer.png';
	import pfp from '$lib/images/pfp.png';
	import sprite from '$lib/images/finalSprite.gif';
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import Query from '$lib/Query.svelte';
	import Typewriter from 'svelte-typewriter';

	let time = new Date();
	let showAbilities = false;
	let showStatus = true;
	let showJob = false;
	let showPfp = false;

	let hoverAudio;
	let selectAudio;

	// these automatically update when `time`
	// changes, because of the `$:` prefix
	$: hours = time.getHours().toString().padStart(2, '0');
	$: minutes = time.getMinutes().toString().padStart(2, '0');
	$: seconds = time.getSeconds().toString().padStart(2, '0');

	// Replace with your last birthday date
	const lastBirthday = new Date('2025-05-21');
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
	function stopHover() {
		hoverAudio.pause();
	}

	let typing = true;
	function completeTyping() {
		typing = false;
	}
</script>

<div class="flex items-center justify-center h-screen">
	<audio bind:this={hoverAudio} src="/audio/hover.mp3" />
	<audio bind:this={selectAudio} src="/audio/select.mp3" />
	<div class="md:flex rounded-lg size-11/12 2xl:size-4/5">
		<div class="md:w-4/5 mr-1">
			<div
				class="md:flex bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg mb-1 h-[260px] md:h-[28%] w-full"
			>
				<div class="flex w-full md:w-fit justify-center md:justify-normal mt-5">
					<img src={sprite} alt="Sprite" class="w-30 h-40 flex mr-6 mt-6 md:mt-0 ml-3" />

					<div
						class="mr-3 md:hidden space-y-3 md:space-y-0 justify-between text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia"
					>
						<p>Gazi Shahi</p>
						<p>Software Engineer</p>
						<div class="flex text-sm">
							<Tooltip arrow={false} animation="fade" content="Age in years">
								<p class="pr-5 text-cyan-300">LV</p>
							</Tooltip>
							<p>{ageYears}</p>
						</div>
						<div class="flex text-sm">
							<Tooltip arrow={false} animation="fade" content="Age in days">
								<p class="pr-5 text-cyan-300">HP</p>
							</Tooltip>
							<p>{ageDays}</p>
						</div>
						<div class="flex text-sm">
							<div class="flex">
								<Tooltip
									arrow={false}
									animation="fade"
									content="GitHub contributions in current year over the total contributions"
								>
									<p class="pr-5 text-cyan-300">MP</p>
								</Tooltip>
								<Query />
							</div>

							<div class="hidden md:block w-2/3 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
								<div
									class="bg-gradient-to-r from-yellow-500 to-yellow-200 h-1.5 rounded-full"
									style="width: {birthdayPercentage}%"
								></div>
							</div>
						</div>
						<div class="flex text-sm space-x-5">
							<Tooltip arrow={false} animation="fade" content="Days since last birthday">
								<p class="text-cyan-300">Current EXP</p>
							</Tooltip>
							<p>{365 - yearsSinceBirthday}</p>
						</div>
						<div class="flex text-sm space-x-5">
							<Tooltip arrow={false} animation="fade" content="Days until next birthday">
								<p class="text-cyan-300">To next level</p>
							</Tooltip>
							<p>{yearsSinceBirthday.toFixed(0)}</p>
						</div>
					</div>
				</div>
				<div
					class="m-5 text-sm md:text-xl text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] font-minecraftia w-full"
				>
					<div class="hidden md:flex space-y-3 md:space-y-0 justify-between">
						<p>Gazi Shahi</p>
						<p>Software Engineer</p>
					</div>
					<div class="hidden md:flex mt-5 justify-between md:mr-0 mr-8 w-full">
						<div class="hidden md:flex">
							<Tooltip arrow={false} animation="fade" content="Age in years">
								<p class="pr-5 text-cyan-300">LV</p>
							</Tooltip>
							<p>{ageYears}</p>
						</div>
						<div class="flex space-x-5">
							<Tooltip arrow={false} animation="fade" content="Days since last birthday">
								<p>Current EXP:</p>
							</Tooltip>
							<p>{365 - yearsSinceBirthday}</p>
						</div>
					</div>
					<div class="flex mt-5 justify-between md:mr-0 mr-8">
						<div class="hidden md:flex">
							<Tooltip arrow={false} animation="fade" content="Age in days">
								<p class="pr-5 text-cyan-300">HP</p>
							</Tooltip>
							<p>{ageDays}</p>
						</div>
						<div class="hidden md:flex space-x-5">
							<Tooltip arrow={false} animation="fade" content="Days until next birthday">
								<p>To next level:</p>
							</Tooltip>
							<p>{yearsSinceBirthday.toFixed(0)}</p>
						</div>
					</div>
					<div class="flex mt-5 justify-between">
						<div class="hidden md:flex">
							<Tooltip
								arrow={false}
								animation="fade"
								content="GitHub contributions in current year over the total contributions"
							>
								<p class="pr-5 text-cyan-300">MP</p>
							</Tooltip>
							<Query />
						</div>
						<div class="hidden md:block w-2/3 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
							<div
								class="bg-gradient-to-r from-yellow-500 to-yellow-200 h-1.5 rounded-full"
								style="width: {birthdayPercentage}%"
							></div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div
					class="md:hidden grid grid-rows-3 grid-cols-2 md:flex-col bg-gradient-to-t from-indigo-600 to-blue-500 text-white text-sm md:text-xl font-minecraftia justify-center border-4 border-slate-400 rounded-lg mb-1 md:pb-0 md:h-2/3 w-full [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
				>
					<div class="hover:show-pointer">
						<button
							on:click={playSelect}
							on:mouseenter={playHover}
							on:mouseleave={stopHover}
							on:click={toggleStatus}
							class="flex justify-center mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							Status
						</button>
						{#if showStatus}
							<img src={pointer} alt="pointer" class="showPointer h-12 w-12" />
						{/if}

						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>
					<div class="hover:show-pointer">
						<button
							on:click={playSelect}
							on:mouseenter={playHover}
							on:click={toggleAbilities}
							class="justify-center mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							Abilities
						</button>
						{#if showAbilities}
							<img src={pointer} alt="pointer" class="showPointer h-12 w-12" />
						{/if}
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>
					<div class="mt-4 col-span-2 border-t-4 border-slate-400"></div>

					<div class="hover:show-pointer">
						<button
							on:click={playSelect}
							on:mouseenter={playHover}
							on:click={toggleJob}
							class="justify-center ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
						>
							Job
						</button>
						{#if showJob}
							<img src={pointer} alt="pointer" class="showPointer h-12 w-12" />
						{/if}
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>
					<div class="hover:show-pointer">
						<a
							on:click={playSelect}
							on:mouseenter={playHover}
							class="flex justify-start ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
							href="https://dl.dropbox.com/scl/fi/gxrwno0lp8vgyzkh4iknz/Gazi-Shahi-Resume.pdf?rlkey=18kd5x54tohr1gn77jzrr1wa6&st=bins3mca&dl=0"
						>
							Resume
						</a>
						<img src={pointer} alt="pointer" class="pointer h-12 w-12" />
					</div>
				</div>
			</div>

			<div
				class="bg-gradient-to-t from-indigo-600 text-sm md:text-md to-blue-500 border-4 border-slate-400 rounded-lg mr-1 md:h-2/3 xl:h-2/3 h-[460px] w-full relative mb-1 md:mb-0"
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
										class="top-0 left-0 w-14 h-14 md:w-32 md:h-32 rounded-md border-2 border-slate-400 m-3"
										transition:fade={{ delay: 800 }}
									/>
								{/if}

								<div class="mt-5 flex relative">
									<div
										class="flex justify-start font-minecraftia text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] w-full whitespace-pre"
									>
										{#if typing}
											<Typewriter
												class="flex"
												cursor={false}
												interval={5}
												mode={'cascade'}
												delay={1500}
											>
												<div class="space-y-0 text-pretty">
													<p>Hey! I'm Gazi, thanks for visiting my personal website!</p>
													<div class="md:flex md:whitespace-pre">
														<p>I'm a software engineer at&nbsp;</p>
														<a href="https://www.relayislam.com/" class="text-cyan-300">
															Relay&nbsp
														</a>
														<p>with a passion for web and mobile development.</p>
													</div>
													<p>Some things about me...</p>
												</div>
											</Typewriter>
										{:else}
											<div class="space-y-0 text-pretty">
												<p>Hey! I'm Gazi, thanks for visiting my personal website!</p>
												<div class="md:flex md:whitespace-pre">
													<p>I'm a software engineer at&nbsp;</p>
													<a href="https://www.relayislam.com/" class="text-cyan-300">Relay&nbsp</a>
													<p>with a passion for web and mobile development.</p>
												</div>
												<p>Some things about me...</p>
											</div>
										{/if}
									</div>
								</div>
							</div>
							<div class="md:grid md:grid-cols-2 md:divide-x-2">
								<div class="flex flex-col justify-start">
									{#if typing}
										<Typewriter
											cursor={false}
											interval={5}
											mode={'cascade'}
											delay={3000}
											disabled={!showStatus}
										>
											<div class="flex justify-between m-3">
												<p>School:</p>
												<p>The City College of New York</p>
											</div>
											<div class="flex justify-between m-3">
												<p>Degree:</p>
												<p>BE in Computer Engineering</p>
											</div>
										</Typewriter>
									{:else}
										<div class="m-3 space-y-3">
											<div class="flex justify-between">
												<p>School:</p>
												<p>The City College of New York</p>
											</div>
											<div class="flex justify-between">
												<p>Degree:</p>
												<p>BE in Computer Engineering</p>
											</div>
										</div>
									{/if}
								</div>
								<div class="md:flex justify-start">
									{#if typing}
										<Typewriter
											cursor={false}
											interval={5}
											mode={'cascade'}
											delay={4000}
											disabled={!showStatus}
										>
											<div class="m-3 space-y-3">
												<p>I like:</p>
												<p>Listening to the voices in my head</p>
												<p>Playing video games (playing Forspoken)</p>
												<p>Running and working out</p>
											</div>
										</Typewriter>
									{:else}
										<div class="m-3 space-y-3">
											<p>I like:</p>
											<p>Listening to the voices in my head</p>
											<p>Playing video games (playing Forspoken)</p>
											<p>Running and working out</p>
										</div>
									{/if}
								</div>
							</div>
							<div class="hidden md:flex md:flex-col m-3">
								{#if typing}
									<Typewriter
										cursor={false}
										interval={5}
										mode={'cascade'}
										delay={5000}
										disabled={!showStatus}
										on:done={completeTyping}
									>
										<p class="mb-1">Other things about me:</p>
										<p class="leading-8">
											Proud Muslim. Bengali American. Unfortunately, a middle child. My typical form
											of media consumption consists of pretentious video essays, tech news, and
											games. Got an iOS app coming out soon. Big fan of role-playing games like
											Final Fantasy/Kingdom Hearts, as you could probably tell. And of course, I am
											super excited about becoming an AI engineer.
										</p>
									</Typewriter>
								{:else}
									<p class="mb-1">Other things about me:</p>
									<p class="leading-8">
										Proud Muslim. Bengali American. Unfortunately, a middle child. My typical form
										of media consumption consists of pretentious video essays, tech news, and games.
										Released the Relay iOS app. Big fan of role-playing games like Final
										Fantasy/Kingdom Hearts, as you could probably tell. Working on some startup
										stuff.
									</p>
								{/if}
							</div>
						</div>
					{:else if showAbilities}
						<div
							class="absolute top-3 right-3 font-minecraftia text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
							in:fly={{ x: 10, duration: 400, delay: 150 }}
							out:fly={{ x: 10, duration: 400 }}
						>
							<p>LV = YOE</p>
						</div>
						<div
							class="el1 m-5 flex justify-center relative"
							in:fly={{ x: 100, duration: 400, delay: 150 }}
							out:fly={{ x: 100, duration: 400 }}
						>
							<div
								class="grid grid-cols-2 gap-x-5 md:gap-x-20 font-minecraftia text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] w-full"
							>
								<div class="space-y-4">
									<h1 class="text-lg md:text-xl mt-4">Languages</h1>
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
										<p>JavaScript/ TypeScript</p>
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
										<p>Swift/ SwiftUI</p>
										<p class="text-cyan-300">LV3</p>
									</div>
									<div class="flex justify-between">
										<p>SQL/ PostgreSQL</p>
										<p class="text-cyan-300">LV2</p>
									</div>
									<div class="flex justify-between">
										<p>Solidity</p>
										<p class="text-cyan-300">LV1</p>
									</div>
									<div class="flex justify-between">
										<p>Kotlin</p>
										<p class="text-cyan-300">LV1</p>
									</div>
								</div>

								<div class="space-y-4">
									<h1 class="text-lg md:text-xl mt-4">Technologies</h1>
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
							class="el1 m-5 h-5/6"
							in:fly={{ x: 100, duration: 400, delay: 150 }}
							out:fly={{ x: 100, duration: 400 }}
						>
							<div
								class="grid grid-cols-12 justify-items-start gap-2 md:gap-4 font-minecraftia text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)] w-full"
							>
								<h1 class="col-span-12 text-xl">Current Jobs</h1>
								<p class="col-span-5">Relay</p>
								<p class="col-span-6 text-cyan-300">Software Engineer</p>
								<p class="col-span-1">2024</p>

								<hr class="w-full mt-2 mb-5 col-span-12" />

								<h1 class="col-span-12 text-xl">Completed Jobs</h1>
								<p class="col-span-5">Headstarter AI</p>
								<p class="col-span-6 text-cyan-300">Software Engineering Fellow</p>
								<p class="col-span-1">2024</p>

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

		<div class="flex flex-col rounded-lg md:w-1/5 md:h-[95%] xl:h-[95%]">
			<div
				class="hidden md:flex md:flex-col bg-gradient-to-t from-indigo-600 to-blue-500 text-white text-sm md:text-xl font-minecraftia justify-start border-4 border-slate-400 rounded-lg mb-1 pb-3 md:pb-0 md:h-2/3 w-full [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
			>
				<div class="hover:show-pointer">
					<button
						on:click={playSelect}
						on:mouseenter={playHover}
						on:mouseleave={stopHover}
						on:click={toggleStatus}
						class="flex justify-start mt-5 ml-12 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
					>
						Status
					</button>
					{#if showStatus}
						<img src={pointer} alt="pointer" class="showPointer h-12 w-12" />
					{/if}

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
					{#if showAbilities}
						<img src={pointer} alt="pointer" class="showPointer h-12 w-12" />
					{/if}
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
					{#if showJob}
						<img src={pointer} alt="pointer" class="showPointer h-12 w-12" />
					{/if}
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
				class="flex justify-center bg-gradient-to-t from-indigo-600 to-blue-500 p-1 text-white text-sm md:text-lg font-minecraftia border-4 border-slate-400 rounded-lg mb-1 h-14 md:h-1/7 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
			>
				<p class="mt-4 md:mt-3">New York City</p>
			</div>

			<div
				class=" text-white bg-gradient-to-t from-indigo-600 to-blue-500 text-lg font-minecraftia mb-3 md:mb-0 border-4 border-slate-400 rounded-lg h-1/7 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
			>
				<div class="ml-5 mr-5 mt-5 flex md:flex-col lg:flex-row justify-between">
					<p>Time</p>
					<p>{hours} : {minutes} : {seconds}</p>
				</div>

				<div class="ml-5 mr-5 mt-5 mb-5 flex md:flex-col lg:flex-row justify-between">
					<Tooltip arrow={false} animation="fade" content="LeetCode Problems Solved">
						<p>Gil</p>
					</Tooltip>
					<p>71</p>
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

	.showPointer {
		position: absolute;
		transform: translateX(-100%);
		transform: translateY(-80%);
	}

	.el1 {
		height: 5em;
		grid-column: 1/2;
		grid-row: 1/2;
	}

	/* .fix-text {
		white-space: pre;
	} */

	main {
		font-family: sans-serif;
		text-align: start;
		overflow: hidden;
		height: 100%;
		display: grid;
	}
</style>
