<script lang="ts">
	import type { PageData } from "./$types";


    export let data: PageData;

    const movie = data.movie;
</script>

<h1>{movie?.title.title}</h1>