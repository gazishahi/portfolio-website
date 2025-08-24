<script>
	import NavLink from '$lib/components/NavLink.svelte';
	import { fly, scale } from 'svelte/transition';
	import pointer from '$lib/images/pointer.png';
	import github from '$lib/images/github.png';
	import linkedin from '$lib/images/linkedin.png';

	let hoverAudio;
	let selectAudio;
	let selectedProject = null;

	// Project data structure
	const projects = [
		{
			id: 'khidma',
			title: 'Stealth',
			status: 'ongoing',
			description: 'Building...',
			progress: 70,
			completedTasks: [
				'Authentication',
				'Email/SMS notifications',
				'Account management',
				'Payment processing',
				'Admin dashboard',
				'User dashboard',
				'User profile',
				'User settings',
			],
			currentTasks: [
				'Analytics',
				'User tagging',
				'Additional user account types',
				'Import user data',
				'More email/SMS triggers',
				'Optimizations'
			],
			techStack: ['React', 'Supabase', 'Typescript', 'Tailwind'],
			github: null,
			live: null,
		},
		{
			id: 'headstarter',
			title: 'Headstarter AI',
			status: 'completed',
			description: 'A 7-week intensive AI fellowship where I pursue 5 quests to enhance my mastery as a software engineer.',
			progress: 100,
			completedTasks: [
				'Find my party',
				'Build my base (portfolio website)',
				'Complete projects',
			],
			currentTasks: [
			],
			techStack: ['Svelte', 'Tailwind', 'Python', 'Next.js', 'Firebase'],
			github: null,
			live: null,
		},
		{
			id: 'relay',
			title: 'Relay Mobile Apps',
			status: 'completed',
			description: 'A platform to help those struggling with faith or seeking to learn the fundamentals of Islam.',
			progress: 100,
			completedTasks: [
				'Complete and submit v1.0 of iOS Application',
				'Core functionality implementation',
				'Releasd iOS Application',
				'Spread the word!',
				'Released Android Application'
			],
			currentTasks: [
				'TBD'
			],
			techStack: ['SwiftUI', 'AWS', 'SST', 'Kotlin'],
			github: 'https://github.com/Relay-Islam',
			live: 'https://www.relayislam.com/',
		},
		{
			id: 'codehive',
			title: 'CodeHive',
			status: 'abandoned',
			description: 'A collaborative platform designed to help software engineers struggling with technical skills.',
			progress: 20,
			completedTasks: [
				'Commence renovations of ally\'s base',
				'Initial setup and planning'
			],
			currentTasks: [
				'Wait for ally\'s signal (Jira ticket)',
				'Frontend development'
			],
			techStack: ['React', 'Spring Boot', 'Express.js', 'DynamoDB', 'Neo4j'],
			github: null,
			live: null,
		}
	];

	function playSelect() {
		selectAudio.play();
	}

	function playHover() {
		hoverAudio.play();
	}

	function selectProject(projectId) {
		selectedProject = projects.find(p => p.id === projectId);
		playSelect();
	}

	// Group projects by status
	$: ongoingProjects = projects.filter(p => p.status === 'ongoing');
	$: completedProjects = projects.filter(p => p.status === 'completed');
	$: abandonedProjects = projects.filter(p => p.status === 'abandoned');
</script>

<div class="min-h-screen p-4">
	<audio bind:this={hoverAudio} src="/audio/hover.mp3" />
	<audio bind:this={selectAudio} src="/audio/select.mp3" />
	
	<!-- Header -->
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-1">
			<div class="bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg p-6">
				<h1 class="font-minecraftia text-white text-2xl md:text-3xl [text-shadow:_0_4px_0_rgb(0_0_0_/_60%)] mb-1">
					Quests
				</h1>
			</div>
		</div>

		<!-- Ongoing Projects Section -->
		{#if ongoingProjects.length > 0}
			<div class="mb-2">
				<div class="bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg p-4 mb-1">
					<h2 class="font-minecraftia text-white text-2xl md:text-3xl [text-shadow:_0_3px_0_rgb(0_0_0_/_60%)] flex items-center justify-center">
						Ongoing Quests ({ongoingProjects.length})
					</h2>
				</div>
				<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
					{#each ongoingProjects as project (project.id)}
					<!-- Hover Pointer -->
					<div class="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<img src={pointer} alt="pointer" class="h-8 w-8" />
					</div>
						<div 
							class="group cursor-pointer transform transition-all duration-300 "
							on:click={() => selectProject(project.id)}
							on:mouseenter={playHover}
						>
							<div class="bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg p-6 h-full">
								<!-- Project Header -->
								<div class="flex items-center justify-between mb-4">
									<div class="flex items-center space-x-3">
													<!-- Hover Pointer -->
								<div class="flex justify-start opacity-0 group-hover:opacity-100">
									<img src={pointer} alt="pointer" class="h-8 w-8" />
								</div>
										<div>
											<h3 class="font-minecraftia text-white text-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
												{project.title}
											</h3>
										</div>
									</div>
									<div class="text-right">
										<div class="font-minecraftia text-white text-2xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
											{project.progress}%
										</div>
									</div>
								</div>

								<!-- Progress Bar -->
								<div class="w-full bg-slate-700 rounded-full h-3 mb-4">
									<div 
										class="bg-gradient-to-r from-yellow-500 to-yellow-200 h-3 rounded-full transition-all duration-500"
										style="width: {project.progress}%"
									></div>
								</div>

								<!-- Description -->
								<p class="font-pixeloid text-white text-sm mb-4 leading-relaxed [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
									{project.description}
								</p>

								<!-- Tech Stack -->
								<div class="mb-4">
									<h4 class="font-minecraftia text-white text-sm mb-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
										Tech Arsenal:
									</h4>
									<div class="flex flex-wrap gap-2">
										{#each project.techStack as tech}
											<span class="bg-slate-800 bg-opacity-50 text-white text-xs px-2 py-1 rounded border border-slate-600 font-pixeloid">
												{tech}
											</span>
										{/each}
									</div>
								</div>

								
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Completed Projects Section -->
		{#if completedProjects.length > 0}
			<div class="mb-2">
				<div class="bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg p-4 mb-1">
					<h2 class="font-minecraftia text-white text-2xl md:text-3xl [text-shadow:_0_3px_0_rgb(0_0_0_/_60%)] flex items-center justify-center">
						Completed Quests ({completedProjects.length})
					</h2>
				</div>
				<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
					{#each completedProjects as project (project.id)}
					<!-- Hover Pointer -->
					
						<div 
							class="group cursor-pointer transform transition-all duration-300 "
							on:click={() => selectProject(project.id)}
							on:mouseenter={playHover}
						>
							<div class="bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg p-6 h-full">
								<!-- Project Header -->
								<div class="flex items-center justify-between mb-4">
									<div class="flex items-center space-x-3">
										<div class="flex justify-start opacity-0 group-hover:opacity-100">
											<img src={pointer} alt="pointer" class="h-8 w-8" />
										</div>
										<div>
											<h3 class="font-minecraftia text-white text-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
												{project.title}
											</h3>
										</div>
									</div>
									<div class="text-right">
										<div class="font-minecraftia text-white text-2xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
											{project.progress}%
										</div>
									</div>
								</div>

								<!-- Progress Bar -->
								<div class="w-full bg-slate-700 rounded-full h-3 mb-4">
									<div 
										class="bg-gradient-to-r from-yellow-500 to-yellow-200 h-3 rounded-full transition-all duration-500"
										style="width: {project.progress}%"
									></div>
								</div>

								<!-- Description -->
								<p class="font-pixeloid text-white text-sm mb-4 leading-relaxed [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
									{project.description}
								</p>

								<!-- Tech Stack -->
								<div class="mb-4">
									<h4 class="font-minecraftia text-white text-sm mb-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
										Tech Arsenal:
									</h4>
									<div class="flex flex-wrap gap-2">
										{#each project.techStack as tech}
											<span class="bg-slate-800 bg-opacity-50 text-white text-xs px-2 py-1 rounded border border-slate-600 font-pixeloid">
												{tech}
											</span>
										{/each}
									</div>
								</div>

								
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Abandoned Projects Section -->
		{#if abandonedProjects.length > 0}
			<div class="mb-1">
				<div class="bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg p-4 mb-1">
					<h2 class="font-minecraftia text-white text-2xl md:text-3xl [text-shadow:_0_3px_0_rgb(0_0_0_/_60%)] flex items-center justify-center">
						Abandoned Quests ({abandonedProjects.length})
					</h2>
				</div>
				<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
					{#each abandonedProjects as project (project.id)}
						<div 
							class="group cursor-pointer transform transition-all duration-300"
							on:click={() => selectProject(project.id)}
							on:mouseenter={playHover}
						>
							<div class="bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg p-6 h-full opacity-80">
								<!-- Project Header -->
								<div class="flex items-center justify-between mb-4">
								
									<div class="flex items-center space-x-3">
											<!-- Hover Pointer -->
								<div class="flex justify-start opacity-0 group-hover:opacity-100">
									<img src={pointer} alt="pointer" class="h-8 w-8" />
								</div>
										<div>
											<h3 class="font-minecraftia text-white text-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
												{project.title}
											</h3>
										</div>
									</div>
									<div class="text-right">
										<div class="font-minecraftia text-white text-2xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
											{project.progress}%
										</div>
									</div>
								</div>

								<!-- Progress Bar -->
								<div class="w-full bg-slate-700 rounded-full h-3 mb-4">
									<div 
										class="bg-gradient-to-r from-yellow-500 to-yellow-200 h-3 rounded-full transition-all duration-500"
										style="width: {project.progress}%"
									></div>
								</div>

								<!-- Description -->
								<p class="font-pixeloid text-white text-sm mb-4 leading-relaxed [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
									{project.description}
								</p>

								<!-- Tech Stack -->
								<div class="mb-4">
									<h4 class="font-minecraftia text-white text-sm mb-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
										Tech Arsenal:
									</h4>
									<div class="flex flex-wrap gap-2">
										{#each project.techStack as tech}
											<span class="bg-slate-800 bg-opacity-50 text-white text-xs px-2 py-1 rounded border border-slate-600 font-pixeloid">
												{tech}
											</span>
										{/each}
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Project Details Modal -->
		{#if selectedProject}
			<div 
				class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
				on:click={() => selectedProject = null}
				in:scale={{ duration: 200 }}
				out:scale={{ duration: 200 }}
			>
				<div 
					class="bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
					on:click|stopPropagation
				>
					<!-- Modal Header -->
					<div class="flex items-center justify-between mb-6">
						<div class="flex items-center space-x-4">
							<div>
								<h2 class="font-minecraftia text-white text-3xl [text-shadow:_0_3px_0_rgb(0_0_0_/_60%)]">
									{selectedProject.title}
								</h2>
							</div>
						</div>
						<button 
							class="text-white text-2xl hover:text-red-300 transition-colors duration-200"
							on:click={() => selectedProject = null}
						>
							✕
						</button>
					</div>

					<!-- Progress Section -->
					<div class="mb-6">
						<div class="flex items-center justify-between mb-2">
							<h3 class="font-minecraftia text-white text-xl [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
								Quest Progress: {selectedProject.progress}%
							</h3>
						</div>
						<div class="w-full bg-slate-700 rounded-full h-4">
							<div 
								class="h-4 rounded-full transition-all duration-1000 bg-gradient-to-r from-yellow-500 to-yellow-200"
								style="width: {selectedProject.progress}%"
							></div>
						</div>
					</div>

					<!-- Tasks Section -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
						<!-- Completed Tasks -->
						<div class="bg-slate-800 bg-opacity-30 rounded-lg p-4 border border-slate-600">
							<h3 class="font-minecraftia text-green-300 text-lg mb-3 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
								Completed Quests
							</h3>
							<ul class="space-y-2">
								{#each selectedProject.completedTasks as task}
									<li class="font-pixeloid text-white text-sm flex items-center [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
										<span class="text-green-400 mr-2">✓</span>
										{task}
									</li>
								{/each}
							</ul>
						</div>

						<!-- Current Tasks -->
						{#if selectedProject.status !== 'completed'}
						<div class="bg-slate-800 bg-opacity-30 rounded-lg p-4 border border-slate-600">
							<h3 class="font-minecraftia text-yellow-300 text-lg mb-3 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
								
									{selectedProject.status === 'abandoned' ? 'Abandoned Tasks' : 'Current Quests'}
								
							</h3>
							<ul class="space-y-2">
								{#each selectedProject.currentTasks as task}
									<li class="font-pixeloid text-white text-sm flex items-center [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
										<span class="mr-2 {selectedProject.status === 'abandoned' ? 'text-red-400' : 'text-yellow-400'}">
											{selectedProject.status === 'abandoned' ? '✗' : '⟳'}
										</span>
										{task}
									</li>
								{/each}
							</ul>
						</div>
						{/if}
					</div>

					<!-- Tech Stack Details -->
					<div class="mb-6">
						<h3 class="font-minecraftia text-white text-xl mb-3 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]">
							Complete Tech Arsenal
						</h3>
						<div class="flex flex-wrap gap-3">
							{#each selectedProject.techStack as tech}
								<span class="bg-slate-800 bg-opacity-50 text-white text-sm px-3 py-2 rounded border border-slate-600 font-pixeloid hover:bg-slate-700 transition-colors duration-200">
									{tech}
								</span>
							{/each}
						</div>
					</div>

					<!-- Action Buttons -->
					<div class="flex flex-wrap gap-4 justify-center">
						{#if selectedProject.github}
							<a 
								href={selectedProject.github}
								class="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg border border-slate-600 font-minecraftia transition-all duration-200  flex items-center space-x-2"
								on:click={playSelect}
								on:mouseenter={playHover}
							>
								<img src={github} alt="GitHub" class="h-5 w-5" />
								<span>View Code</span>
							</a>
						{/if}
						{#if selectedProject.live}
							<a 
								href={selectedProject.live}
								class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg border border-blue-500 font-minecraftia transition-all duration-200  flex items-center space-x-2"
								on:click={playSelect}
								on:mouseenter={playHover}
							>
								<span>🌐 Live Demo</span>
							</a>
						{/if}
					</div>
				</div>
			</div>
		{/if}

		<!-- Footer Navigation -->
		<div class="text-center">
			<div class="text-white bg-gradient-to-t from-indigo-600 to-blue-500 border-4 border-slate-400 rounded-lg p-2">
				<NavLink href="/" text="Back" />
			</div>
		</div>
	</div>
</div>

<style>
	/* Custom scrollbar for modal */
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0.3);
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.5);
	}

	/* Custom shadow for cards */
	.shadow-3xl {
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
	}
</style>
