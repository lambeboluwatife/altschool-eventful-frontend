"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../css/login.css";
import logo from "../images/Eventful Text Red.png";

interface FormData {
  name: string;
  email: string;
  password: string;
  verifyPassword: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("JSON String:", JSON.stringify(formData));
    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Account created successfully")

        setFormData({
          name: "",
          email: "",
          password: "",
          verifyPassword: "",
        });
      } else {
        const responseData = await response.json();
        console.error(
          "Signing up failed with status:",
          response.status,
          responseData
        );
      }
    } catch (error: any) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <section className="header">
      <div className="container grid grid-3">
        <div></div>
        <div className="info">
          <Image src={logo} width={200} alt="Eventful logo"></Image>
          <h5>Create Eventful Account</h5>
          <span>Enter your details below</span>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="verifyPassword"
                name="verifyPassword"
                placeholder="Verify Password"
                value={formData.verifyPassword}
                onChange={handleChange}
                required
              />
            </div>
            <small>
              <a href="#">Forgot your password?</a>{" "}
            </small>
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

export default RegisterPage;
