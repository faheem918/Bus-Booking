import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Reservation</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
