import { Link } from "react-router-dom";
import {
  BsFillHouseFill,
  BsGridFill,

  
  BsInfoCircle,
} from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { RiLoginBoxLine,RiLoginCircleLine } from "react-icons/ri";

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
              className={activeTab === 2 ? "navLink-active" : "navLink"}
            >
              <BiSupport size={20} />
            </Link>
          </Tooltip>
        </li>

        <li>
          <Tooltip title="contact us" placement="top-end" arrow>
            <Link
              to="Contact"
              className={activeTab === 3 ? "navLink-active" : "navLink"}
            >
              <BsInfoCircle size={21} />
            </Link>
          </Tooltip>
        </li>


        <li>
          <Tooltip title="More" placement="top-end" arrow>
            <Link
              to="More"
              className={activeTab === 4 ? "navLink-active" : "navLink"}
            >
              <BsGridFill size={21} />
            </Link>
          </Tooltip>
        </li>

        <li>
          <Tooltip
            title={loggedIn ? "Logout" : "Login"}
            placement="top-end"
            arrow
          >
            <Link
              to="Login"
              className={activeTab === 5 ? "navLink-active" : "navLink"}
            >
              {loggedIn ? (
                <RiLoginCircleLine size={21} />
              ) : (
                <RiLoginBoxLine size={21} />
              )}
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
