import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch, params }) => {
	const limit = 1;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1b835a42e9msh2d0ffdb02089fadp16f225jsnf2930187ec7e',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(
			`https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=${params.slug}&limit=${limit}`,
			options
		);

		return response;
	} catch (err) {
		console.log(err);
		throw error(400, 'Error occurred: ' + err);
	}

	// return response;
	return new Response();
}) satisfies RequestHandler;
