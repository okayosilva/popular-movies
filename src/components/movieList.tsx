import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movieApiService";
import { Movie } from "../types/movies";
import { Modal } from "./modal";
import { MovieCard } from "./movieCard";

export function MovieList() {
  const [modalIsOpen, setIsOpen] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>();
  const [selectMovies, setSelectMovies] = useState<Movie>();

  function handleSelectMovieWithOpenToModal(movies: Movie) {
    setSelectMovies(movies);
    setIsOpen(true);
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };

    fetchMovies();
  }, []);
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold">Popular Movies</h1>
        <p className="mt-2 text-xl text-gray-500">
          Find out what's trending in the world of cinema
        </p>
      </div>
      <section className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            onSelect={handleSelectMovieWithOpenToModal}
            movie={movie}
          />
        ))}
      </section>

      {selectMovies && modalIsOpen && (
        <Modal isOpen={modalIsOpen}>
          <div className="relative flex max-w-3xl flex-col gap-6 bg-white p-8 sm:flex-row md:h-[450px]">
            <button
              className="absolute right-2 top-2"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} className="text-zinc-900" />
            </button>
            <img
              className="h-80 w-full object-cover md:h-auto"
              src={`https://image.tmdb.org/t/p/w500/${selectMovies.poster_path}`}
              alt={selectMovies.title}
            />
            <div className="">
              <h2 className="text-2xl font-semibold">{selectMovies.title}</h2>
              <p className="text-base text-cyan-900">
                {selectMovies.release_date}, {selectMovies.vote_average}
              </p>
              <p className="mt-4 text-neutral-700">{selectMovies.overview}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
