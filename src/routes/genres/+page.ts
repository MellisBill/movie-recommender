import type { PageLoad } from './$types';


export const load = (async ({ fetch }) => {
    const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1b835a42e9msh2d0ffdb02089fadp16f225jsnf2930187ec7e',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};

	const res = await fetch('https://imdb8.p.rapidapi.com/title/list-popular-genres', options);

    const genres = await res.json();

    console.log(genres);

    return { genres };

}) satisfies PageLoad;