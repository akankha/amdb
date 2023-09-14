import { format, parseISO } from "date-fns";
import Image from "next/image";

const MoviePage = async ({ params }) => {
  const MovieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${process.env.API_KEY}`
  );

  const credit = await fetch(
    `https://api.themoviedb.org/3/movie/${MovieId}/credits?api_key=${process.env.API_KEY}`
  );

  const movie = await res.json();
  const cast = await credit.json();

  // Check if movie.release_date is a valid date string
  const releaseDate =
    movie.release_date && isValidDate(movie.release_date)
      ? parseISO(movie.release_date)
      : null;

  // Function to check if a string is a valid date
  function isValidDate(dateString) {
    const date = parseISO(dateString);
    return !isNaN(date.getTime());
  }

  const gradientStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative sm:h-screen">
      <div style={gradientStyle} className="absolute inset-0"></div>
      <div className="relative z-10 sm:flex p-10 sm:h-full">
        <div className="sm:w-1/3">
          {/* The poster image */}
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            width={440}
            height={560}
            alt="movie image"
            className="rounded px-4"
          />
        </div>
        <div className="sm:w-2/3 p-8 text-white">
          <h2 className="text-3xl font-semibold mb-4">
            {movie.title} ({releaseDate ? format(releaseDate, "yyyy") : "N/A"})
          </h2>
          <p className="italic text-sm">
            {releaseDate
              ? format(releaseDate, "MMMM d, yyyy")
              : "Release date not available"}
            <span className="mx-2">|</span>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <div className="my-4">
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p>{movie.overview}</p>
          </div>
          <div className="my-4">
            <h2 className="text-2xl font-semibold mb-2">Top Billed Cast</h2>
            <div className="flex flex-wrap">
              {cast.cast.slice(0, 8).map((result) => (
                <p
                  key={result.id}
                  className="bg-amber-400 text-white rounded px-2 py-1 m-1 font-semibold"
                >
                  {result.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
