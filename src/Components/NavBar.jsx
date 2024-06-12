import { Link } from "react-router-dom";
import { BsFillHouseFill,BsGridFill ,BsFillPersonPlusFill ,BsFillPersonDashFill ,BsArrowThroughHeartFill} from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
// import {  } from "react-icons/ai";
import PropTypes from "prop-types";

export default function NavBar({ activeTab }) {
  const loggedIn = false;
  return (
    <nav>
      <ul>
        <li>
          <Tooltip title="Home" placement="top-end" arrow>
            <Link
              to="Home"
              className={activeTab === 1 ? "navLink-active" : "navLink"}
            >
              <BsFillHouseFill size={21} />
            </Link>
          </Tooltip>
        </li>

        <li>
          <Tooltip title="About" placement="top-end" arrow>
            <Link
              to="About"
              className={activeTab ===  2 ? "navLink-active" : "navLink"}
            >
             <BsArrowThroughHeartFill size={20}/>
            </Link>
          </Tooltip>
        </li>

        <li>
          <Tooltip title="More" placement="top-end" arrow>
            <Link
              to="More"
              className={activeTab === 3 ? "navLink-active" : "navLink"}
            >
              <BsGridFill  size={21} />
            </Link>
          </Tooltip>
        </li>

        <li>
          <Tooltip title={loggedIn ? "Logout" : "Login"} placement="top-end" arrow>
            <Link
              to="Login"
              className={activeTab === 4 ? "navLink-active" : "navLink"}
            >
              {loggedIn ? <BsFillPersonPlusFill size={21} /> : <BsFillPersonDashFill size={21} />}
             
            </Link>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
}
NavBar.propTypes = {
  activeTab: PropTypes.number.isRequired,
};