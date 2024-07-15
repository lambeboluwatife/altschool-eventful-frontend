import { Roboto } from "next/font/google";
import Link from "next/link";
import logo from "../images/Eventful Text White.png";
import Image from "next/image";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

const Header = () => {
  return (
    <div className="nav">
      <div className="container">
        <header>
          <Link href="/">
            <Image src={logo} width={100} alt="Eventful logo"></Image>
          </Link>

          <nav>
            <ul className="nav-links">
              <li className="nav-item">
                <Link href="/events">Find Events</Link>
              </li>
              <li className="nav-item">
                <Link href="/create-event">Create Event</Link>
              </li>
              <li className="nav-item">
                <Link href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/sign-in">Log In</Link>
              </li>
              <li className="nav-item">
                <Link href="/sign-up">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
