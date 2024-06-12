import { useEffect } from "react";
import PropTypes from "prop-types";

function HomeScreen({ setActiveTab }) {
  useEffect(() => {
    setActiveTab(1);
  }, [setActiveTab]);

  return <div className="homeScreen">sharan screen</div>;
}

HomeScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default HomeScreen;