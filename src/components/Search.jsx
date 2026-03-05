const Search = ({ query, setQuery }) => {
  return (
    <div>
      <p>
        filter shown with{" "}
        <input onChange={(e) => setQuery(e.target.value)} value={query} />
      </p>
    </div>
  );
};

export default Search;
