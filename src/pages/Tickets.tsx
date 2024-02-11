import Navigation from "../components/Navigation/Navigation";
import img from "../assets/bg/cinema.jpg";

import { Movie } from "../components/Movies/MoviesDisplay";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookingCard = ({
  movie_id,
  movie_description,
  movie_name,
  video_url,
  duration_in_minute,
  cover_image,
  date,
  start_time,
}: Movie) => {
  return (
    <div className="d-flex mb-2 ticket_card">
      <div className="col-3">
        <img src={cover_image} alt="" className="w-75 ticket-card-image" />
      </div>
      <div className="col-9">
        <h4 className="color">{movie_name}</h4>
        <div className="d-flex justify-content-around">
          <section>
            <p>Duration</p>
            <h6 className="color">{duration_in_minute}</h6>
          </section>
          <section>
            <p>Date</p>
            <h6 className="color">{date}</h6>
          </section>
          <section>
            <p>Starting Time</p>
            <h6 className="color">{start_time}</h6>
          </section>
          <section>
            <p>Trailer</p>
            <h6 className="color">
              <a href={video_url}>Watch traieler here</a>
            </h6>
          </section>
        </div>
      </div>
    </div>
  );
};

const Booking = () => {
  const [tickets, setTickets] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const email = localStorage.getItem("token");

      axios
        .get("http://127.0.0.1:8000/cinema/user-tickets/", {
          params: { email: email },
        })
        .then((res) => {
          console.log(res.data);
          setTickets(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(email);
    } catch {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navigation />
      <div className="container-md mt-5 d-flex tickets">
        <div className="col-12 col-md-6">
          {tickets &&
            tickets.map((ticket) => {
              return (
                <BookingCard
                  key={ticket.movie_name}
                  movie_name={ticket.movie_name}
                  video_url={ticket.video_url}
                  duration_in_minute={ticket.duration_in_minute}
                  date={ticket.date}
                  start_time={ticket.start_time}
                  movie_id={1}
                  cover_image={ticket.cover_image}
                  movie_description={""}
                />
              );
            })}
        </div>
        <div className="cinema h-100 col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src={img} className="ticket-img" alt="" width={"80%"} />
        </div>
      </div>
    </>
  );
};

export default Booking;
