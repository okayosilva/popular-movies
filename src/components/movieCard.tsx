import { Genres } from "../types/genres";
import { Movie } from "../types/movies";

export function MovieCard({
  adult,
  genre_ids,
  id,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  vote_average,
}: Movie) {
  function getGenre() {
    genre_ids;
    let genres = "";
    for (let i = 0; i < Math.min(genre_ids.length, 2); i++) {
      genres += Genres[genre_ids[i]] + ", ";
    }
    return genres.slice(0, -2);
  }
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-72 w-full object-cover"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div className="mt-4 text-left">
          <h2 className="line-clamp-1 text-xl font-semibold">{title}</h2>
          {/* <p className="text-gray-500">{release_date}</p> */}
          <p className="text-base text-cyan-900">
            {getGenre()}, {vote_average.toFixed(1)}
          </p>
          <p className="mt-4 line-clamp-3 text-neutral-700">{overview}</p>
        </div>
      </div>
    </div>
  );
}
