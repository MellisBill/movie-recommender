<script lang="ts">
	import GenrePicker from './components/GenrePicker.svelte';

	import { fade, fly } from 'svelte/transition';
	import SearchPicker from './components/SearchPicker.svelte';
	import Suggestion from './components/Suggestion.svelte';

	let genreSelected: boolean = false;
	let actorSelected: boolean = false;

	let selectedGenre: string = 'none';
	let route: string = '';
</script>

<div class="relative px-6 lg:px-8 ">
	<div class="mx-auto max-w-3xl">
		{#if !actorSelected && !genreSelected}
			<div in:fly={{ y: 200, duration: 500, delay: 500 }} out:fly={{ y: 200, duration: 500 }}>
				<div class="w-full grid grid-cols-2 py-12">
					<a
						href="/actor"
						class="mx-2 py-4 border-solid border-gray-400 border-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-30"
					>
						<div class="flex justify-center text-7xl py-8">😎</div>
						<div class="text-center text-xl text-semibold ">Actor</div>
					</a>

					<a
						href="/genres"
						class="mx-2 py-4 border-solid border-gray-400 border-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-30"
					>
						<div class="flex justify-center text-7xl py-8">🍿</div>
						<div class="text-center text-xl text-semibold ">Genre</div>
					</a>
				</div>
			</div>
		{/if}

		<!-- {#if genreSelected && selectedGenre === 'none'}
			<div in:fly={{ y: 200, duration: 500, delay: 500 }} out:fly={{ y: 200, duration: 500 }}>
				<GenrePicker bind:globalGenre={selectedGenre} bind:genreSelected />
			</div>
		{/if}

		{#if route === '/actor'}{/if}

		{#if selectedGenre !== 'none' && genreSelected}
			<Suggestion genre={selectedGenre} />
		{/if} -->
	</div>
</div>
