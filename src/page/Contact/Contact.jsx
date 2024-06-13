import React, { useEffect } from 'react'
import PropTypes from "prop-types";

function Contact({setActiveTab}) {
    useEffect(() =>{
        setActiveTab(3)
    },[setActiveTab])
  return (
    <div>Contact</div>
  )
}
Contact.propTypes = {
    setActiveTab: PropTypes.func.isRequired,
  };

export default Contact