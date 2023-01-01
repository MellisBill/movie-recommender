import type { PageLoad } from './$types';

export const load = (async ({ fetch, url }) => {
	// const genre = url.searchParams.get('genre');

	// if (genre !== null) {
	// 	const res = await fetch(`/api/titles?genre=${genre?.toLowerCase()}`);
	// 	const movieSuggestion = await res.json();
	// 	console.log(movieSuggestion);
	// 	if (res.ok) {
	// 		return movieSuggestion;
	// 	} else {
	// 		throw new Error(movieSuggestion);
	// 	}
	// }
}) satisfies PageLoad;
