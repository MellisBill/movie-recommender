import type { RequestHandler } from './$types';

export const GET = (async () => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1b835a42e9msh2d0ffdb02089fadp16f225jsnf2930187ec7e',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};

	const response = await fetch('https://imdb8.p.rapidapi.com/title/list-popular-genres', options);
	const data = await response.json();

	return new Response(data);
}) satisfies RequestHandler;
