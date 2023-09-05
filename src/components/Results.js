import Cards from "./Cards";

const Results = ({ results }) => {
  return (
    <div>
      <div className="sm:grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-5xl mx-auto py-4">
        {results &&
          results.map((result) => <Cards key={result.id} result={result} />)}
      </div>
    </div>
  );
};

export default Results;
