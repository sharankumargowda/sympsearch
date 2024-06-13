import React, { useEffect } from 'react'
import PropTypes from "prop-types";


function About({setActiveTab}) {
    useEffect(() => {
        setActiveTab(2);
      }, [setActiveTab]);
  return (<>
    <div>About</div>
       <img src="https://images7.alphacoders.com/108/1080456.jpg" height={400} width={400}/>
       </>
  )
}
About.propTypes = {
    setActiveTab: PropTypes.func.isRequired,
  };
export default About