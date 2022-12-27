import type { RequestHandler } from './$types';

export const GET = (async ({ fetch, params }) => {
	const currentCountry = 'UK';

    console.log(params);

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1b835a42e9msh2d0ffdb02089fadp16f225jsnf2930187ec7e',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};

	// try {
	// 	const response = await fetch(
	// 		`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${params}&currentCountry=${currentCountry}`,
	// 		options
	// 	);

    //     console.log(response);

	// 	return response;
	// } catch (err) {
	// 	console.log(err);
	// }

	return new Response();
}) satisfies RequestHandler;
