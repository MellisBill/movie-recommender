import type { Movie } from '$lib/types';
import { error, type RequestHandler } from '@sveltejs/kit';

export const GET = (async ({ fetch, url }) => {
	const genre = url.searchParams.get('genre');
	console.log("Hello " + genre);

	const limit = 100;
	const currentCountry = 'GB';

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1b835a42e9msh2d0ffdb02089fadp16f225jsnf2930187ec7e',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};

	const uri = `https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=${genre}&limit=${limit}`;
	const response = await fetch(uri, options)
		.then((res) => res.json())
		.then(async (suggestions: string[]) => {
			const random = Math.floor(Math.random() * 100)
			const suggestionSliced = suggestions[random].split('/');
            

			const res = await fetch(
				`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${suggestionSliced[2]}&currentCountry=${currentCountry}`,
				options
			).catch((err) => {
				throw error(400, 'Problem with overview: ' + err);
			});

			return res;
		})
		.catch((err) => {
			throw error(400, 'Problem with suggestions: ' + err);
		})

		.catch((err) => {
			throw error(400, 'Error with fetching genre ' + err);
		});

	return response;
}) satisfies RequestHandler;
