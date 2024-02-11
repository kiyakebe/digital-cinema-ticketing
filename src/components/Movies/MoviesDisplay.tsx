import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

interface Movie {
  movie_name: string;
  movie_description: string;
  video_url: string;
  duration: number;
  cover_image: string;
  date: string;
  start_time: string;
}

const MovieCard = ({
  movie_name,
  movie_description,
  video_url,
  duration,
  cover_image,
  date,
  start_time,
}: Movie) => {
  return (
    <div className="p-3 col-12 col-md-6 col-lg-3">
      <div className="card">
        <img
          src={cover_image}
          className="card-img-top card-image"
          alt={movie_name}
        />
        <div className="card-body">
          <h5 className="card-title fw-medium">
            <span>Name: </span> {movie_name}
          </h5>
          <p className="card-text movie-info fw-medium">
            <span>Description: </span> {movie_description}
          </p>
          <p className="card-text movie-info fw-medium">
            <span>Duration: </span>
            {duration}min
          </p>
          <p className="card-text movie-info fw-medium">
            <span>Date: </span>
            {date}
          </p>
          <p className="card-text movie-info fw-medium">
            <span>Starting Time: </span>
            {start_time}
          </p>
          <a href={video_url} target="_blank">
            Watch Trailer Here
          </a>
        </div>
        <button className="card-footer movie-card-footer">Book Now</button>
      </div>
    </div>
  );
};

const MoviesDisplay = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/cinema/get_movies/")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h2 className="ps-4 pb-3">Movies</h2>
      <div className="d-flex flex-wrap container-md">
        {movies ? (
          movies.map((movie) => {
            return (
              <MovieCard
                movie_name={movie?.movie_name}
                movie_description="hjkshfd"
                duration={movie.duration}
                date={movie.date}
                start_time={movie.start_time}
                video_url={movie.video_url}
                cover_image={movie.cover_image}
              />
            );
          })
        ) : (
          <h5>Movie not Avoilable</h5>
        )}
      </div>
    </div>
  );
};

export default MoviesDisplay;
