import type { Movie } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, url }) => {
	const genre = url.searchParams.get('genre');
	const res = await fetch(`/api/titles?genre=${genre}`);
	const movieSuggestion: Movie = await res.json();

	return { movieSuggestion };

}) satisfies PageLoad;