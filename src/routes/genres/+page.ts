import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1b835a42e9msh2d0ffdb02089fadp16f225jsnf2930187ec7e',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};

	// const res = await fetch('https://imdb8.p.rapidapi.com/title/list-popular-genres', options);

	// const data = await res.json();

	return {
		genres: [
			{ description: 'Action', endpoint: '/chart/popular/genre/action' },
			{ description: 'Adventure', endpoint: '/chart/popular/genre/adventure' },
			{ description: 'Animation', endpoint: '/chart/popular/genre/animation' },
			{ description: 'Biography', endpoint: '/chart/popular/genre/biography' },
			{ description: 'Comedy', endpoint: '/chart/popular/genre/comedy' },
			{ description: 'Crime', endpoint: '/chart/popular/genre/crime' },
			{ description: 'Documentary', endpoint: '/chart/popular/genre/documentary' },
			{ description: 'Drama', endpoint: '/chart/popular/genre/drama' },
			{ description: 'Family', endpoint: '/chart/popular/genre/family' },
			{ description: 'Fantasy', endpoint: '/chart/popular/genre/fantasy' },
			{ description: 'Film-Noir', endpoint: '/chart/popular/genre/film_noir' },
			{ description: 'History', endpoint: '/chart/popular/genre/history' },
			{ description: 'Horror', endpoint: '/chart/popular/genre/horror' },
			{ description: 'Music', endpoint: '/chart/popular/genre/music' }
		]
	};
}) satisfies PageLoad;
