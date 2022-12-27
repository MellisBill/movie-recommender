// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { Image, OtherRank, PlotOutline, PlotSummary, Ratings, Title } from "./lib/types";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			movie: Movie;
			title: Title;
			image: Image;
			ratings: Ratings;
			otherRank: OtherRank;
			plotOutline: PlotOutline;
			plotSummary: PlotSummary;
		}
		// interface PageData {}
		// interface Platform {}
	}
}
