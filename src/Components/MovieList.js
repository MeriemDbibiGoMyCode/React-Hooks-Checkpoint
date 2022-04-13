import MovieCard from "./MovieCard";
const MovieList = ({ movie, deleteHAndler, handleDone, search, rating }) => {
  console.log("movie", movie);
  return (
    <div>
      {movie
        .filter(
          (el) =>
            el.name.toLowerCase().includes(search.toLowerCase().trim()) &&
            el.rating >= rating
        )
        .map((e, i) => (
          <MovieCard
            movie={e}
            key={i}
            deleteHAndler={deleteHAndler}
            handleDone={handleDone}
          />
        ))}
    </div>
  );
};
export default MovieList;
