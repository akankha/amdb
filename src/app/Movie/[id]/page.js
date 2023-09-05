import Image from "next/image";
import { format, parseISO } from "date-fns";
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

  return (
    <>
      <div
        className={`flex m-10 bg-[url(https://image.tmdb.org/t/p/w440_and_h660_face/${movie.backdrop_path})] h-screen`}
      >
        <div className="w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            width={440}
            height={560}
            alt="movie image"
            className="rounded px-4 "
            // placeholder="blur"
            // blurDataURL=""
          ></Image>
        </div>
        <div className="w-2/3">
          <div className="">
            <h2>
              {movie.title} ({format(parseISO(movie.release_date), "yyyy")})
            </h2>
            <p className="italic text-sm px-1">
              {format(parseISO(movie.release_date), "LLLL d, yyyy")}
              <span className="before:content-['*'] before:px-2">
                {movie.genres.map((genre) => console.log(genre))}
              </span>
            </p>
          </div>
          <div className="">
            <h2 className="my-3 font-bold ">OverView</h2>
            <p>{movie.overview}</p>
          </div>
          <div className="my-4">
            <h2 className="my-3 font-bold ">Top billed Cast</h2>

            {cast.cast.slice(0, 8).map((result) => (
              <p className="inline-block px-2 py-1 rounded bg-amber-400 mx-1 my-1 font-semibold">
                {result.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
