import { useEffect, useState } from "react";
import PropTypes from "prop-types"; 
import axios from "axios";

function HomeScreen({ setActiveTab }) {
  const[airport,SetAirport]=useState([])
  useEffect(() => {
    try {
      axios
        .get("https://freetestapi.com/api/v1/airports")
        .then((res) =>SetAirport(res.data))
        .catch((err) => console.log(err));
    } catch (error) {}
    setActiveTab(1);
  }, [setActiveTab]);
  function Air({ir}){
    console.log(ir);
   return(
    <div className="main"><span>id {ir.id}</span>
    <span>name {ir.name}</span>
    <span>name {ir.Location}</span>
    <span>name {ir.city}</span>
    
    </div>
   )
  }

  return <div className="homeScreen">

  {airport.map((air) =>(<Air ir={air}/>))}
  </div>;
}

HomeScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default HomeScreen;
