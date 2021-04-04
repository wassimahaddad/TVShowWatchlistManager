const tmdb = {
  apiKey: "?api_key=f656551bdd5ebdb168235db96894f77a",
  baseUrl: "https://api.themoviedb.org/3/tv/",
  posterPath: "https://image.tmdb.org/t/p/original",
  search: `https://api.themoviedb.org/3/search/tv?api_key=f656551bdd5ebdb168235db96894f77a&query=`,
  appendVideo: "&append_to_response=videos",
  defaultOverview: "No information available",
  defaultFirstAired: "No information available",
  defaultTrailer: "Trailer not available for this show",
};

export default tmdb;
