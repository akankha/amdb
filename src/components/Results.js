import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      <div>
        {results &&
          results.map((result) => <div key={result.id}>{result.title}</div>)}
      </div> 
    </div>
  );
};

export default Results;
