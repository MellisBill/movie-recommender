import type { PageLoad } from './$types';

export const load = (({ params }) => {
	console.log(params);
	// const res = await fetch(`/api/genres/${params}`);
	// const movies = await res.json();

	// return { movies }
}) satisfies PageLoad;
