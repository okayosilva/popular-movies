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
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-64 w-full rounded-lg object-cover"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500">{release_date}</p>
          <p className="text-gray-500">{overview}</p>
          <p className="text-gray-500">{vote_average}</p>
        </div>
      </div>
    </div>
  );
}
