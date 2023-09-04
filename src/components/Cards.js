import Link from "next/link";
import Image from "next/image";

import React from "react";
import Date from "./Date";

const Cards = ({ result }) => {
  return (
    <>
      <div className="cursor-pointer sm:m-2 hover:scale-105 hover:background-gray-900 hover:shadow-slate-300 transition-all">
        <Link href={`/movie/${result.id}`} className="">
          <div className="relative">
            <Image
              src={`https://image.tmdb.org/t/p/w440_and_h660_face/${
                result.backdrop_path || result.poster_path
              }`}
              width={440}
              height={660}
              alt="movie image"
              className="rounded-lg  transition duration-200"
              // placeholder="blur"
              // blurDataURL=""
            ></Image>

            <div
              className="flex w-11 h-11 bg-slate-900 bg-opacity-90 rounded-full shrink-0 grow-0 
            absolute -bottom-4 left-2 ring-2 ring-amber-300 ring-offset-1 ring-inset"
            >
              {/* w-11 h-11 shrink-0 grow-0 rounded-full bg-green-300 text-green-700 */}
              <p className="flex justify-center items-center text-xs text-center text-white w-full">
                {/* {Math.round(result.vote_average, 1)} */}
                {result.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
          <div className="p-2 mt-2">
            <h2 className="text-md font-bold">{result.title || result.name}</h2>
            <p className="flex items-center text-gray-500 text-sm">
              <Date dateString={result.first_air_date || result.release_date} />
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
