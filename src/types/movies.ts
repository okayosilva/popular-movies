export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  genre_ids: number[];
  adult: boolean;
  popularity: number;
}

export interface MovieResponse {
  results: Movie[];
}
