<script lang="ts">
	import type { Movie } from '$lib/types';
	import { each } from 'svelte/internal';
	import { fly } from 'svelte/transition';
	
	export let suggestion: Movie;
</script>

<div class="mx-auto max-w-7xl">
	<div class="mx-auto max-w-3xl">
			<div class="hero">
				<div class="hero-content flex-col lg:flex-row prose">
					<img
						src={suggestion.title.image.url}
						alt={suggestion.title.title}
						class="max-w-xs rounded-lg shadow-2xl "
					/>
					<div>
						<h1 class="text-5xl font-bold">{suggestion.title.title}</h1>
						<p class="">
							{suggestion.plotOutline.text}
						</p>
						<div class="space-x-2">
							{#each suggestion.genres as genre}
								<div class="badge badge-accent">{genre}</div>
							{/each}
						</div>

						<div class="stats stats-vertical w-full shadow mt-6 lg:stats-horizontal">
							<div class="stat">
								<div class="stat-title">IMDb Rating</div>
								<div class="stat-value">{suggestion.ratings.rating}</div>
							</div>

							<div class="stat">
								<div class="stat-title">Running time</div>
								<div class="stat-value">{suggestion.title.runningTimeInMinutes}mins</div>
							</div>
							<div class="stat">
								<div class="stat-title">Release date</div>
								<div class="stat-value">{suggestion.releaseDate}</div>
							</div>
						</div>
						<div class="py-6">
							<button class="btn btn-primary">Gimme another one</button>
						</div>
					</div>
				</div>
			</div>
	</div>
</div>
