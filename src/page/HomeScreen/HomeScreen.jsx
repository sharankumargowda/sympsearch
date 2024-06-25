import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



function HomeScreen({ setActiveTab }) {
 useEffect (() => {
    setActiveTab(1);
  }, [setActiveTab]);

  return (
   
    <>dd</>
  );
}

HomeScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default HomeScreen;
