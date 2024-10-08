import { Movie } from "../types/movies";
import { getGenre } from "../utils/getGenre";

type MovieCardProps = {
  movie: Movie;
  onSelect: (movie: Movie) => void;
};

export function MovieCard({ movie, onSelect }: MovieCardProps) {
  const {
    adult,
    genre_ids,
    id,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;

  return (
    <div className="cursor-pointer" onClick={() => onSelect(movie)}>
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-72 w-full object-cover"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div className="mt-4 text-left">
          <h2 className="line-clamp-1 text-xl font-semibold">{title}</h2>
          <p className="text-base text-cyan-900">
            {getGenre(genre_ids)}, {vote_average.toFixed(1)}
          </p>
          <p className="mt-4 line-clamp-3 text-neutral-700">{overview}</p>
        </div>
      </div>
    </div>
  );
}
