<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	console.log(data);

</script>

<div class="">
	<h1>Hello</h1>
	{#each data.movieData as title}
		<div>{title.title.title}</div>
	{/each}
</div>
