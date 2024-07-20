"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../css/login.css";
import logo from "../images/Eventful Text Red.png";
import axios from "axios";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:5000/users/login", {
          email,
          password,
        })
        .then(function (response) {
          console.log(response);
          // Storing token in localStorage
          const token = response.data.token;
          localStorage.setItem("token", token);

          setEmail("");
          setPassword("");
        })
        .catch(function (error) {
          console.error("Error:", error.response.data);
        });
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <section className="header">
      <div className="container grid grid-3">
        <div></div>
        <div className="info">
          <Image src={logo} width={200} alt="Eventful logo"></Image>
          <h5>Welcome Back</h5>
          <span>Enter your account details below</span>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <small>
                <a href="#">Forgot your password?</a>{" "}
              </small>
            </div>
            <div className="form-group">
              <button type="submit">SIGN IN</button>
            </div>
            <hr />
            <div>
              <span>
                Don't have an account yet?
                <a className="text-danger" href="/users/register">
                  Create one
                </a>
              </span>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default LoginPage;
