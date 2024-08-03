"use client";
import { useState } from "react";
import Header from "./components/Header";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return <Header />;
};

export default Home;
