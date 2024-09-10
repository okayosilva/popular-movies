import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movieApiService";
import { Movie } from "../types/movies";
import { MovieCard } from "./movieCard";

export function MovieList() {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      console.log(popularMovies);
      setMovies(popularMovies);
    };

    fetchMovies();
  }, []);
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold">Popular Movies</h1>
        <p className="mt-2 text-xl text-gray-500">
          Find out what's trending in the world of cinema
        </p>
      </div>
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-4">
        {movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </section>
    </div>
  );
}
