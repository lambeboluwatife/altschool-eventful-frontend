"use client";
import { useState } from "react";
import Showcase from "./pages/Home/Showcase";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";
import Features from "./pages/Home/Features";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div>
      <ScrollAwareNavbar />
      <Showcase />
      <Features />
    </div>
  );
};

export default Home;
