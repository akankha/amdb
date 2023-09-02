import React from "react";
import Cards from "./Cards";

const Results = ({ results }) => {
  return (
    <div>
      <div>
        {results &&
          results.map((result) => <Cards key={result.id} result={result} />)}
      </div>
    </div>
  );
};

export default Results;
