export type Movie = {
	id: string;
	title: Title;
	certificates: Certificates;
	ratings: Ratings;
	genres: string[];
	releaseDate: string;
	plotOutline: PlotOutline;
	plotSummary: PlotSummary;
};

export type Title = {
	id: string;
	image: Image;
	runningTimeInMinutes: number;
	nextEpisode: string;
	numberOfEpisodes: number;
	seriesEndYear: number;
	seriesStartYear: number;
	title: string;
	titleType: string;
	year: number;
};

export type Image = {
	height: number;
	id: string;
	url: string;
	width: number;
};

export type Ratings = {
	canRate: boolean;
	rating: number;
	ratingCount: number;
	otherRanks: OtherRank[];
};

export type OtherRank = {
	id: string;
	label: string;
	rank: number;
	rankType: string;
};

export type PlotOutline = {
	id: string;
	text: string;
};

export type PlotSummary = {
	author: string;
	id: string;
	text: string;
};
