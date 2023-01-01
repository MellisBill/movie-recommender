<script lang="ts">
	import '../app.css';
	import GenrePicker from './components/GenrePicker.svelte';

	import { fade, fly } from 'svelte/transition';
	import SearchPicker from './components/SearchPicker.svelte';
	import Suggestion from './components/Suggestion.svelte';

	let genreSelected: boolean = false;
	let actorSelected: boolean = false;

	let selectedGenre: string = 'none';
</script>

<div class="relative px-6 lg:px-8 ">
	<div class="mx-auto max-w-3xl">
		<div class="chat chat-start max-w-lg mx-auto">
			<div class="chat-image avatar">
				<canvas
					id="canvas"
					height="200"
					width="200"
					class="relative overflow-hidden rounded-full"
				/>
				<script src="https://unpkg.com/@rive-app/canvas@1.0.79"></script>
				<script>
					new rive.Rive({
						src: 'src/lib/cat_animation.riv',
						canvas: document.getElementById('canvas'),
						animations: 'Idle',
						autoplay: true
					});
				</script>
			</div>

			<div class="flex flex-col my-8">
				{#if !actorSelected && !genreSelected}
					<div class="chat-bubble my-2">Hello my names Millie and I like movies!</div>
					<div class="chat-bubble">Select below whether you want to search by Actor or Genre</div>
				{/if}
				{#if genreSelected}
					<div class="chat-bubble my-2">genres</div>
				{/if}
			</div>
		</div>

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

					<button
						on:click={() => (genreSelected = true)}
						class="mx-2 py-4 border-solid border-gray-400 border-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-30"
					>
						<div class="flex justify-center text-7xl py-8">🍿</div>
						<div class="text-center text-xl text-semibold ">Genre</div>
					</button>
				</div>
			</div>
		{/if}

		{#if genreSelected && selectedGenre === 'none'}
			<div in:fly={{ y: 200, duration: 500, delay: 500 }} out:fly={{ y: 200, duration: 500 }}>
				<GenrePicker bind:globalGenre={selectedGenre} bind:genreSelected />
			</div>
		{/if}

		{#if actorSelected}{/if}

		{#if selectedGenre !== 'none' && genreSelected}
			<Suggestion genre={selectedGenre} />
		{/if}
	</div>
</div>
