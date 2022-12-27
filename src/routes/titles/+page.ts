import type { Movie } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, url }) => {
	const genre = url.searchParams.get('genre');
	console.log(genre);
	const currentCountry = 'UK';
	// const responses = ['/title/tt11564570/', '/title/tt10640346/', '/title/tt12003946/'];
	let movies: string[] = [];

	const titles: Movie[] = [];

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1b835a42e9msh2d0ffdb02089fadp16f225jsnf2930187ec7e',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};
	
	const res = await fetch(`/api/genres?${genre}`);
	movies = await res.json();

	console.log(movies);

	movies.map(async (res: string) => {
		try {
			const t = res.slice(7, 16);
			const response = await fetch(
				`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${t}&currentCountry=${currentCountry}`,
				options
			);

			const movie: Movie = await response.json();

			titles.push(movie);
		} catch (err) {
			console.log(err);

			throw error(400, 'Err: ' + err);
		}
	});
	// return {
	// 	titles: [
	// 		{
	// 			id: '/title/tt11564570/',
	// 			title: {
	// 				'@type': 'imdb.api.title.title',
	// 				id: '/title/tt11564570/',
	// 				image: {
	// 					height: 2222,
	// 					id: '/title/tt11564570/images/rm3932489473',
	// 					url: 'https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg',
	// 					width: 1482
	// 				},
	// 				runningTimeInMinutes: 139,
	// 				title: 'Glass Onion: A Knives Out Mystery',
	// 				titleType: 'movie',
	// 				year: 2022
	// 			},
	// 			certificates: {
	// 				US: [
	// 					{
	// 						certificate: 'PG-13',
	// 						certificateNumber: 53766,
	// 						ratingReason:
	// 							'Rated PG-13 for strong language, some violence, sexual material and drug content',
	// 						ratingsBody: 'MPAA',
	// 						country: 'US'
	// 					}
	// 				]
	// 			},
	// 			ratings: {
	// 				canRate: true,
	// 				rating: 7.4,
	// 				ratingCount: 106457,
	// 				topRank: 1444
	// 			},
	// 			genres: ['Comedy', 'Crime', 'Drama', 'Mystery', 'Thriller'],
	// 			releaseDate: '2022-12-23',
	// 			plotOutline: {
	// 				id: '/title/tt11564570/plot/po4928044',
	// 				text: 'Famed Southern detective Benoit Blanc travels to Greece for his latest case.'
	// 			},
	// 			plotSummary: {
	// 				author: 'grantss',
	// 				id: '/title/tt11564570/plot/ps6998972',
	// 				text: "Five long-time friends are invited to the Greek island home of billionaire Miles Bron. All five know Bron from way back and owe their current wealth, fame and careers to him. The main event is a murder weekend game with Bron to be the victim. In reality, they all have reasons to kill him. Also invited is Benoit Blanc, the world's greatest detective."
	// 			}
	// 		},
	// 		{
	// 			id: '/title/tt10640346/',
	// 			title: {
	// 				'@type': 'imdb.api.title.title',
	// 				disambiguation: 'I',
	// 				id: '/title/tt10640346/',
	// 				image: {
	// 					height: 3000,
	// 					id: '/title/tt10640346/images/rm865155841',
	// 					url: 'https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
	// 					width: 2025
	// 				},
	// 				runningTimeInMinutes: 188,
	// 				title: 'Babylon',
	// 				titleType: 'movie',
	// 				year: 2022
	// 			},
	// 			certificates: {
	// 				US: [
	// 					{
	// 						attributes: ['cert#53776'],
	// 						certificate: 'R',
	// 						ratingReason:
	// 							'Rated R for strong and crude sexual content, graphic nudity, bloody violence, drug use, and pervasive language.',
	// 						ratingsBody: 'MPAA',
	// 						country: 'US'
	// 					}
	// 				]
	// 			},
	// 			ratings: {
	// 				canRate: true,
	// 				rating: 7.5,
	// 				ratingCount: 3279
	// 			},
	// 			genres: ['Comedy', 'Drama', 'History'],
	// 			releaseDate: '2022-12-23',
	// 			plotOutline: {
	// 				id: '/title/tt10640346/plot/po6818680',
	// 				text: 'A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.'
	// 			},
	// 			plotSummary: {
	// 				id: '/title/tt10640346/plot/ps6998808',
	// 				text: 'An original epic set in 1920s Los Angeles led by Brad Pitt, Margot Robbie and Diego Calva, with an ensemble cast including Jovan Adepo, Li Jun Li and Jean Smart. A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.'
	// 			}
	// 		},
	// 		{
	// 			id: '/title/tt12003946/',
	// 			title: {
	// 				'@type': 'imdb.api.title.title',
	// 				id: '/title/tt12003946/',
	// 				image: {
	// 					height: 1350,
	// 					id: '/title/tt12003946/images/rm1186005505',
	// 					url: 'https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_.jpg',
	// 					width: 1080
	// 				},
	// 				runningTimeInMinutes: 112,
	// 				title: 'Violent Night',
	// 				titleType: 'movie',
	// 				year: 2022
	// 			},
	// 			certificates: {
	// 				US: [
	// 					{
	// 						certificate: 'R',
	// 						certificateNumber: 53925,
	// 						ratingReason:
	// 							'Rated R for strong bloody violence, language throughout and some sexual references',
	// 						ratingsBody: 'MPAA',
	// 						country: 'US'
	// 					}
	// 				]
	// 			},
	// 			ratings: {
	// 				canRate: true,
	// 				rating: 6.9,
	// 				ratingCount: 33701,
	// 				topRank: 2742
	// 			},
	// 			genres: ['Action', 'Comedy', 'Crime', 'Fantasy', 'Thriller'],
	// 			releaseDate: '2022-12-02',
	// 			plotOutline: {
	// 				id: '/title/tt12003946/plot/po6479044',
	// 				text: 'When a group of mercenaries attack the estate of a wealthy family, Santa Claus must step in to save the day (and Christmas).'
	// 			},
	// 			plotSummary: {
	// 				author: 'Justin Kroll',
	// 				id: '/title/tt12003946/plot/ps6479043',
	// 				text: "A team of elite mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage. But the team isn't prepared for a surprise combatant: Santa Claus is on the grounds, and he's about to show why this Nick is no saint."
	// 			}
	// 		}
	// 	]
	// };
	console.log(titles.length);
	return { titles };
}) satisfies PageLoad;
