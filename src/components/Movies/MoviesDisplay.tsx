import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Booking from "./Book";

export interface Movie {
  movie_id: number;
  movie_name: string;
  movie_description: string;
  video_url: string;
  duration_in_minute: number;
  cover_image: string;
  date: string;
  start_time: string;
}

const MovieCard = ({
  movie_id,
  movie_name,
  video_url,
  duration_in_minute,
  cover_image,
  date,
  start_time,
}: Movie) => {
  const [modalShow, setModalShow] = useState(false);

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
            <span>Duration: </span>
            {duration_in_minute}min
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
        <button
          className="card-footer movie-card-footer"
          onClick={() => setModalShow(true)}
        >
          Book Now
        </button>
        <Booking
          show={modalShow}
          onHide={() => setModalShow(false)}
          movie_id={movie_id}
        />
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
                key={movie.movie_name}
                movie_id={movie.movie_id}
                movie_name={movie?.movie_name}
                movie_description="hjkshfd"
                duration_in_minute={movie.duration_in_minute}
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
