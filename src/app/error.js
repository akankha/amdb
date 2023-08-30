"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mt-10"> Something Went Wrong</h2>
      <button
        onClick={() => reset()}
        className="bg-amber-500 px-5 py-2 text-white font-semibold mt-5 rounded"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
