"use client";
import { useState } from "react";
import Showcase from "./pages/Home/Showcase";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div>
      <ScrollAwareNavbar />
      <Showcase />
    </div>
  );
};

export default Home;
