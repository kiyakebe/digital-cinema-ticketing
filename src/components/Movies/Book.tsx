import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Movie } from "./MoviesDisplay";
import "./style.css";
import { useNavigate } from "react-router-dom";

interface BookingProps {
  movie_id: number;
  show: boolean;
  onHide: () => void;
}

const Booking = ({ movie_id, show, onHide }: BookingProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/cinema/get_movies/")
      .then((res) => {
        setMovies(res.data);
        console.log(res)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleBooking = (movie_id: number) => {
    try {
      const email = localStorage.getItem("token");

      const formData = new FormData();
      formData.append('email', email)
      formData.append('movie_id', movie_id)

      axios
        .post("http://127.0.0.1:8000/cinema/book-ticket/", formData)
        .then((res) => {
          console.log(res.data);
          navigate("/tickets")
        })
        .catch((e) => console.log(e));
    } catch {
      navigate("/register");
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Book Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {movies
          .filter((movie) => movie.movie_id == movie_id)
          .map((movie) => (
            <div className="d-flex gap-3" key={movie.movie_name}>
              <div className="col-5">
                <img
                  width={"100%"}
                  src={movie.cover_image}
                  className="card-image-book"
                  alt={movie.movie_name}
                />
              </div>
              <div className="col-5 ps-3">
                <h4 className="card-title fw-medium mb-4 color">
                  <span>Name: </span> {movie.movie_name}
                </h4>
                <p className="card-text movie-info fw-medium mb-3 itallic-txt">
                  <span className="mb-2">Description: </span>
                  <br /> {movie.movie_description}
                </p>
                <p className="card-text movie-info fw-medium mb-2">
                  <span>Duration: </span>
                  {movie.duration_in_minute}min
                </p>
                <p className="card-text movie-info fw-medium mb-2">
                  <span>Date: </span>
                  {movie.date}
                </p>
                <p className="card-text movie-info fw-medium mb-2">
                  <span>Starting Time: </span>
                  {movie.start_time}
                </p>
                <a href={movie.video_url} target="_blank">
                  Watch Trailer Here
                </a>
                <br />
                <button
                  className="book-btn w-100 mt-3"
                  onClick={() => handleBooking(movie.movie_id)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
      </Modal.Body>
    </Modal>
  );
};

export default Booking;
