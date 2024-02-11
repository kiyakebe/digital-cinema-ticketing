import FilterBar from "../components/Movies/FilterBar";
import MoviesDisplay from "../components/Movies/MoviesDisplay";
import Navigation from "../components/Navigation/Navigation";

const Movies = () => {
  return (
    <>
      <Navigation />
      <div className="d py-4">
      </div>
      <div className="container-md d-flex">
        <FilterBar />
        <MoviesDisplay />
      </div>
    </>
  );
};

export default Movies;
