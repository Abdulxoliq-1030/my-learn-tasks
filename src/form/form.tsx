import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormProps {}

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

const Form: React.FC<FormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data: any) => {
    console.log(data);
  };

  return (
    <div className="form" style={{ textAlign: "center" }}>
      <div className="title" style={{ paddingBottom: 20 }}>
        Sign Up
      </div>
      <div className="inputs">
        <form
          onSubmit={handleSubmit(submitForm)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: 200,
          }}>
          <input
            {...register("firstname")}
            type="text"
            name="firstname"
            placeholder="First name..."
          />
          {/* @ts-ignore */}
          <span>{errors.firstname?.message}</span>
          <input
            {...register("lastname")}
            type="text"
            name="lastname"
            placeholder="Last name..."
          />
          {/* @ts-ignore */}
          <span>{errors.lastname?.message}</span>
          <input
            {...register("email")}
            type="email"
            name="email"
            placeholder="Email..."
          />
          {/* @ts-ignore */}
          <span>{errors.email?.message}</span>
          <input
            {...register("age")}
            type="text"
            name="age"
            placeholder="age..."
          />
          {/* @ts-ignore */}
          <span>{errors.age?.message}</span>
          <input
            {...register("password")}
            type="password"
            name="password"
            placeholder="Password..."
          />
          {/* @ts-ignore */}
          <span>{errors.password?.message}</span>
          <input
            {...register("confirmPassword")}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password..."
          />
          {/* @ts-ignore */}
          <span>{errors.confirmPassword && "Passwords should match!"}</span>
          <button type="submit">Click</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
