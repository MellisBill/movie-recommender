<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let route = $page.route.id;
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
				{#if $page.route.id === '/'}
					<div class="chat-bubble my-2">Hello my names Millie and I like movies!</div>
					<div class="chat-bubble">Select below whether you want to search by Actor or Genre</div>
				{/if}

				{#if $page.route.id === '/genres'}
					<div class="chat-bubble my-2">Action or comedy, I have got you covered!</div>
				{/if}

				{#if $page.route.id === '/title'}
					<div class="chat-bubble my-2">What do you think? ❤️</div>
				{/if}
			</div>
		</div>
		<slot />
	</div>
</div>
