"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userName === "") return toast.error("UserName is required");
    if (email === "") return toast.error("Email is required");
    if (password === "") return toast.error("Password is required");

    console.log({ userName, email, password });
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="text"
        placeholder="Enter Your userName"
        value={ userName }
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="email"
        placeholder="Enter Your Email"
        value={ email }
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="password"
        placeholder="Enter Your Password"
        value={ password }
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
