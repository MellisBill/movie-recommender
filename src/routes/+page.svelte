<script lang="ts">
	const genres = [
		{
			description: 'Action',
			endpoint: '/chart/popular/genre/action'
		},
		{
			description: 'Adventure',
			endpoint: '/chart/popular/genre/adventure'
		},
		{
			description: 'Animation',
			endpoint: '/chart/popular/genre/animation'
		},
		{
			description: 'Biography',
			endpoint: '/chart/popular/genre/biography'
		},
		{
			description: 'Comedy',
			endpoint: '/chart/popular/genre/comedy'
		},
		{
			description: 'Crime',
			endpoint: '/chart/popular/genre/crime'
		},
		{
			description: 'Documentary',
			endpoint: '/chart/popular/genre/documentary'
		},
		{
			description: 'Drama',
			endpoint: '/chart/popular/genre/drama'
		},
		{
			description: 'Family',
			endpoint: '/chart/popular/genre/family'
		},
		{
			description: 'Fantasy',
			endpoint: '/chart/popular/genre/fantasy'
		},
		{
			description: 'Film-Noir',
			endpoint: '/chart/popular/genre/film_noir'
		},
		{
			description: 'History',
			endpoint: '/chart/popular/genre/history'
		},
		{
			description: 'Horror',
			endpoint: '/chart/popular/genre/horror'
		},
		{
			description: 'Music',
			endpoint: '/chart/popular/genre/music'
		},
		{
			description: 'Musical',
			endpoint: '/chart/popular/genre/musical'
		},
		{
			description: 'Mystery',
			endpoint: '/chart/popular/genre/mystery'
		},
		{
			description: 'Romance',
			endpoint: '/chart/popular/genre/romance'
		},
		{
			description: 'Sci-Fi',
			endpoint: '/chart/popular/genre/sci_fi'
		},
		{
			description: 'Sport',
			endpoint: '/chart/popular/genre/sport'
		},
		{
			description: 'Thriller',
			endpoint: '/chart/popular/genre/thriller'
		},
		{
			description: 'War',
			endpoint: '/chart/popular/genre/war'
		},
		{
			description: 'Western',
			endpoint: '/chart/popular/genre/western'
		}
	];

	let selectedGenre: string = 'none';

	// function add(genre: string) {
	// 	if (addedGenres.includes(genre)) return;
	// 	addedGenres = [...addedGenres, genre];
	// }

	// function remove(addedGenre: string) {
	// 	addedGenres = addedGenres.filter(genre => genre !== addedGenre)
	// }

	function handleSubmit() {}
</script>

<div class="flex flex-col mx-auto">
	<div>
		<h1 class="text-7xl font-bold">Welcome👋</h1>
		<h2>What type of genre would you like to watch?</h2>
	</div>
	<div class="py-8">
		<h2>Selected Genre</h2>
		{#if selectedGenre !== 'none'}
			<div class="flex">
				<button
					class="flex flex-row btn-outline mx-1 rounded-3xl border-2 px-2 py-1 my-2 active:border-yellow-500 hover:border-yellow-500 hover:bg-transparent"
					on:click={() => (selectedGenre = 'none')}
				>
					{selectedGenre}<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						width="24px"
						viewBox=" 0 0 43 43"
						stroke="white"
						fill="white"
						><path
							d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
						/></svg
					>
				</button>
			</div>
		{/if}
	</div>
	<div class="flex flex-row flex-wrap max-w-lg justify-center space-x-4">
		{#each genres as genre}
			<button
				class="btn-outline rounded-3xl border-2 px-2 py-1 my-2 active:border-yellow-500 hover:border-yellow-500"
				on:click={() => (selectedGenre = genre.description)}
			>
				{genre.description}
			</button>
		{/each}
	</div>
	<button class="btn bg-yellow-400 my-3">
		<a href="/titles?genre={selectedGenre.toLowerCase()}">Continue</a>
	</button>
</div>
