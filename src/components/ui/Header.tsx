import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex items-center p-4 bg-gradient-ocean">
      <nav className="flex justify-around w-full list-none text-base">
        <li>
          <NavLink to="/" className="flex flex-col gap-1">
            <FontAwesomeIcon icon={faHouse} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="About" className="flex flex-col gap-1">
            <FontAwesomeIcon icon={faCircleInfo} />
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="Contact" className="flex flex-col gap-1">
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;
