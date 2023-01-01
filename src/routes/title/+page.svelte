<script lang="ts">
	import type { Movie } from '$lib/types';
	import Suggestion from '../components/Suggestion.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let suggestion: Movie | null = null;

	async function getSuggestion() {
		suggestion = null;
		const genre = $page.url.searchParams.get('genre');
		const res = await fetch(`/api/titles?genre=${genre?.toLowerCase()}`);
		suggestion = await res.json();

		// suggestion = {
		// 	id: '/title/tt0944947/',
		// 	title: {
		// 		id: '/title/tt0944947/',
		// 		image: {
		// 			height: 1500,
		// 			id: '/title/tt0944947/images/rm4204167425',
		// 			url: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
		// 			width: 1102
		// 		},
		// 		runningTimeInMinutes: 57,
		// 		nextEpisode: '/title/tt1480055/',
		// 		numberOfEpisodes: 73,
		// 		seriesEndYear: 2019,
		// 		seriesStartYear: 2011,
		// 		title: 'Game of Thrones',
		// 		titleType: 'tvSeries',
		// 		year: 2011
		// 	},
		// 	certificates: {
		// 		US: [
		// 			{
		// 				certificate: 'TV-MA',
		// 				country: 'US'
		// 			}
		// 		]
		// 	},
		// 	ratings: {
		// 		canRate: true,
		// 		rating: 9.2,
		// 		ratingCount: 1952444,
		// 		otherRanks: [
		// 			{
		// 				id: '/chart/ratings/toptv',
		// 				label: 'Top 250 TV',
		// 				rank: 13,
		// 				rankType: 'topTv'
		// 			}
		// 		]
		// 	},
		// 	genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
		// 	releaseDate: '2011-04-17',
		// 	plotOutline: {
		// 		id: '/title/tt0944947/plot/po2596634',
		// 		text: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.'
		// 	},
		// 	plotSummary: {
		// 		author: 'Sam Gray',
		// 		id: '/title/tt0944947/plot/ps2733843',
		// 		text: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.'
		// 	}
		// };
	}

	onMount(async () => {
		getSuggestion();
	});
</script>

<div>
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto max-w-3xl">
			{#if suggestion === null}
				<div class="text-center my-36 text-6xl">
					🤔
					<div class="text-lg mt-2">Thinking...</div>
				</div> 
				
			
			{/if}

			{#if suggestion !== null}
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
							<div class="">
								{#each suggestion.genres as genre}
									<div class="badge badge-accent mx-1">{genre}</div>
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
								<button on:click={getSuggestion} class="btn btn-primary">Gimme another one</button>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
