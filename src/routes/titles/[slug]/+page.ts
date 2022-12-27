import type { Movie } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const currentCountry = 'UK';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '1b835a42e9msh2d0ffdb02089fadp16f225jsnf2930187ec7e',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};

	try {
		// const t = params.slug.slice(7, 16);
		// const response = await fetch(
		// 	`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${params.slug}&currentCountry=${currentCountry}`,
		// 	options
		// );

		// const movie: Movie = await response.json();

		// console.log(movie);

		return {
			movie: {
				id: '/title/tt0944947/',
				title: {
					'@type': 'imdb.api.title.title',
					id: '/title/tt0944947/',
					image: {
						height: 1500,
						id: '/title/tt0944947/images/rm4204167425',
						url: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
						width: 1102
					},
					runningTimeInMinutes: 57,
					nextEpisode: '/title/tt1480055/',
					numberOfEpisodes: 73,
					seriesEndYear: 2019,
					seriesStartYear: 2011,
					title: 'Game of Thrones',
					titleType: 'tvSeries',
					year: 2011
				},
				certificates: { US: [[Object]] },
				ratings: {
					canRate: true,
					rating: 9.2,
					ratingCount: 2097722,
					otherRanks: [[Object]]
				},
				genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
				releaseDate: '2011-04-17',
				plotOutline: {
					id: '/title/tt0944947/plot/po2596634',
					text: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.'
				},
				plotSummary: {
					author: 'Sam Gray',
					id: '/title/tt0944947/plot/ps2733843',
					text: 'In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.'
				}
			}
		};
	} catch (err) {
		console.log(err);
	}
}) satisfies PageLoad;
