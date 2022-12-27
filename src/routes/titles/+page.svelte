<script lang="ts">
	import { each } from 'svelte/internal';
	import type { PageData } from './$types';

	export let data: PageData;

	const titles = data.titles;
</script>

<div class="mx-auto max-w-7xl">
	<div class="mx-auto max-w-3xl">
		<h1 class="text-4xl font-bold">Suggestions ❤️</h1>

		<div class="mt-6 space-y-12 md:grid md:grid-cols-3 md:gap-x-6 md:space-y-0">
			{#each titles as title}
				<div class="group relative">
					<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
						<img
							class="h-full w-full object-cover object-center"
							src={title.title.image.url}
							alt={title.title.title}
						/>
					</div>
					<div>{title.title.title}</div>
				</div>
			{/each}

            <button class="btn">Something else</button>
		</div>
	</div>
</div>
