import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// import { CgLayoutGrid } from "react-icons/cg";

function HomeScreen({ setActiveTab }) {
  const [airport, setAirport] = useState([]);
  const [search, setSearch] = useState('');

  // const [position, setPosition] = useState(0);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setAirport(res.data))
      .catch((err) => console.log(err));

    setActiveTab(1);
  }, [setActiveTab]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  function Air({ ir }) {
    return (
      <div className="ma">
        <span>id: {ir.id}</span>
        <div>
          <img src={ir.image} height={"100px"} alt={ir.title} />
        </div>
        <span>name: {ir.title}</span>
        <span>description: {ir.description}</span>
      </div>
    );
  }

  const filteredAirport = airport.filter((air) => 
    air.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="homeScreen">
      <center>
        <input onChange={handleChange} type="search" placeholder="search" required />
      </center>
      <div className="mainSection">
        
          <div className="imgContainer">
            <h1>Development of Software</h1>
            <img className="img" src="https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg" alt="Development of Software" />
          </div>
       
        <div className="cardContainer">
          {filteredAirport.map((air) => (
            <Air ir={air} />
          ))}
        </div>
      </div>
    </div>
  );
}

HomeScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default HomeScreen;
