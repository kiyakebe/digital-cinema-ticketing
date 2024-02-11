import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./style.css";

const schema = z.object({
  email: z.string({required_error: "Email field is required"}).email().min(6),
  password: z.string().min(4),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();
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
      .post("http://127.0.0.1:8000/cinema/login/", formData)
      .then((res) => {
        // console.log(res.data);
        navigate("/movies");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container-md d-flex justify-content-center align-items-center login ">
      <form
        className="col-12 col-md-6 col-lg-4 login-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="fw-bold color my-4">Login</h2>

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

        <button type="submit" className="btn btn-primary w-100 login-btn">
          Login
        </button>

        <p className="mt-2">
          <span>Don't have account? </span>{" "}
          <a href="/register" className="color">
            Signup
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
