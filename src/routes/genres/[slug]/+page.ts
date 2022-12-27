import type { Movie } from 'src/lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	let movies: string[] = [];
	// const currentCountry = 'UK';
	// const res = await fetch(`/api/genres?${params.slug}`);
	movies = await res.json();
	const movieData: Movie[] = [];

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1b835a42e9msh2d0ffdb02089fadp16f225jsnf2930187ec7e',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};

	movies.map(async (title) => {
		try {
            
            const t = title.slice(7, 16);
			// const response = await fetch(
			// 	`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${t}&currentCountry=${currentCountry}`,
			// 	options
			// );

			// const movie: Movie = await response.json();

            console.log(movie);
			movieData.push(movie);
		} catch (err) {
			console.log(err);
		}
	});

	return { movieData };
}) satisfies PageLoad;
