import { Link } from "react-router-dom";
import ChuckNorris from "./chuckNorris";
import DadJoke from "./dadJoke";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to='/chuckNorris'>Home page</Link>
          </li>
          <li>
            <Link to='/dadJoke'>Home page</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;