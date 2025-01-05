<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	type Contributions = {
		total: number;
	};

	const query = createQuery<Contributions>({
		queryKey: ['total'],
		queryFn: async () =>
			await fetch('https://github-contributions-api.jogruber.de/v4/gazishahi?y=all').then((r) =>
				r.json()
			)
	});

	let totalContributions = 0;

	$: if ($query.isSuccess) {
		const contributions = $query.data.total;
		totalContributions = Object.values(contributions).reduce((acc, value) => acc + value, 0);
	}
</script>

<div class="my-0">
	{#if $query.isPending}
		Loading...
	{/if}
	{#if $query.error}
		An error has occurred:
		{$query.error.message}
	{/if}
	{#if $query.isSuccess}
		<p>{$query.data.total['2025']} / {totalContributions}</p>
	{/if}
</div>
