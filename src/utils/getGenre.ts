import { Genres } from "../types/genres";

export function getGenre(genre_ids: number[]) {
  genre_ids;
  let genres = "";
  for (let i = 0; i < Math.min(genre_ids.length, 2); i++) {
    genres += Genres[genre_ids[i]] + ", ";
  }
  return genres.slice(0, -2);
}
