import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-12 flex flex-col gap-6 rounded-lg shadow-lg bg-white"
    >
      <h3 className="text-center text-xl font-semibold">Вход</h3>
      <TextField
        id="email"
        type="email"
        label="johndoe@mail.com"
        variant="outlined"
        {...register("Email", {})}
      />
      <TextField
        id="password"
        type="password"
        label="password"
        variant="outlined"
        {...register("Password", {})}
      />
      <Button variant="contained" type="submit">
        <Link to="/profile">Войти</Link>
      </Button>
      <Link className="text-center text-blue-100" to="/sign_up">
        Зарегистрироваться
      </Link>
    </form>
  );
};

export default LoginForm;
