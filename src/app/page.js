import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchtranding";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchtranding" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 100000 } }
  );

  if (!res.ok) {
    throw new Error("Could not fetch the movie", res);
  }
  const movie = await res.json();
  const results = movie.results;

  return (
    <>
      <div>
        <Results results={results} />
      </div>
    </>
  );
}
