import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

interface AppProps {}

type Profile = {
  firstname: string;
  lastname: string;
  age: number;
};

const App: React.FC<AppProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input
          {...register("firstname", { required: true })}
          id="firstname"
          type="text"
          name="firstname"
        />
        {errors.firstname && <div className="error">Enter your name</div>}
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          {...register("lastname", { required: true })}
          id="lastname"
          type="text"
          name="lastname"
        />
        {errors.lastname && <div className="error">Enter your lastname</div>}
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          {...register("age", { required: true })}
          id="age"
          type="text"
          name="age"
        />
        {errors.age && <div className="error">Enter your age</div>}
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default App;
