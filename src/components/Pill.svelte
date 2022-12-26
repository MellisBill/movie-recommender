<script lang="ts">
	import type { PageData } from '../routes/$types';

	export let genre: string;

    let selectedGenres: string[] = [];

    // function addGenre(event) {
    //     selectedGenres = [...selectedGenres, genre]
    // }

</script>

<button class="btn-outline rounded-3xl border-2 px-2 py-1 my-2 active:border-yellow-500 hover:border-yellow-500">
	{genre}
</button>
