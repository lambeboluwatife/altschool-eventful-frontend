import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

const Header = () => {
  return (
    <div className="nav">
      <div className="container">
        <header>
          <Link href="/">
            <h1 className={roboto.className}>Eventful</h1>
          </Link>

          <nav>
            <ul className="nav-links">
              <li className="nav-item">
                <Link href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/events">Find Events</Link>
              </li>
              <li className="nav-item">
                <Link href="/create-event">Create Event</Link>
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
