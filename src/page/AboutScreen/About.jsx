import React, { useEffect } from 'react'
import PropTypes from "prop-types";


function About({setActiveTab}) {
    useEffect(() => {
        setActiveTab(2);
      }, [setActiveTab]);
  return (
    <div>About</div>
  )
}
About.propTypes = {
    setActiveTab: PropTypes.func.isRequired,
  };
export default About