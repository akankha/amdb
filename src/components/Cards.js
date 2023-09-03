import Link from "next/link";
import Image from "next/image";

import React from "react";
import Date from "./Date";

const Cards = ({ result }) => {
  return (
    <>
      <div className="cursor-pointer sm:m-2 hover:scale-105 transition-all">
        <Link href={`/movie/${result.id}`} className="">
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
          <div className="p-2">
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
