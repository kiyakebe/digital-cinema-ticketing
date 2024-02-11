import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./style.css";

const schema = z
  .object({
    email: z.string().email().min(6),
    password: z.string().min(4),
    confirm_password: z.string(),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Password does not match",
      });
    }
  });

type FormData = z.infer<typeof schema>;

const Register = () => {

  const navigate   = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {

    const formData = new FormData();
    formData.append("email", data.email)
    formData.append("password", data.password)

    axios
      .post("http://127.0.0.1:8000/cinema/register/", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.email)
        navigate("/movies")
      })
      .catch((e) => {
        console.log(e);
        console.log("eeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrrrrooooooooooooooooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrrrrrrsssssssssssssssss")
      });
  };

  return (
    <div className="container-md d-flex justify-content-center align-items-center login ">
      <form className="col-12 col-md-6 col-lg-4 login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="fw-bold color my-4">Register</h2>

        <div className="mb-4">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            {...register("email")}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            {...register("password")}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            {...register("confirm_password")}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 login-btn">
          Register
        </button>
        <p className="mt-2">
          <span>Already have account? </span>{" "}
          <a href="/login" className="color">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
