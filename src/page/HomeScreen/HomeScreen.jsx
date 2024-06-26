import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function HomeScreen({ setActiveTab }) {
  useEffect(() => {
    setActiveTab(1);
  }, [setActiveTab]);
  const health = [
    "hnshdgsgvshjnasbdcgv v hdgbdnwjdyg hdbwbdhghe",

    "jnjdhssnj jedhuhuhu",
    "gswtgvqbfst qs6yqavhgsqyquq",
    "vgavgfast gthsgusauayjnn hqsyty  ssmkis jsyasyha",


  ]


  return (
    <div className="HomeScreen">
      <div className="HomeContainer">
        <div className="CorcelContainer">
          <div className="cc">
            <Carousel autoPlay={true} interval={1000} infiniteLoop={true} showThumbs={false}>
              <div>
                <img style={{objectFit:"contain"}} src="https://tse1.mm.bing.net/th?id=OIP.rZSMaGZgkwKYn3J2qpx-MAHaE8&pid=Api&P=0&h=180" />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img style={{objectFit:"contain"}} src="https://tse1.mm.bing.net/th?id=OIP.rZSMaGZgkwKYn3J2qpx-MAHaE8&pid=Api&P=0&h=180" />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img style={{objectFit:"contain"}} src="https://tse1.mm.bing.net/th?id=OIP.rZSMaGZgkwKYn3J2qpx-MAHaE8&pid=Api&P=0&h=180" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
          <div className="Health">
          <center>
            <h1>Health Tips</h1>
    

         
            {health.map((he)=>(<li>{he}</li>))}
  
            
            </center>

          </div>
        </div>

        <div className="callContainer">
        
    
           <h1> Talk With Doctor</h1>

        <img src="https://png.pngtree.com/png-clipart/20231202/original/pngtree-doctor-3d-rendered-emoji-icon-png-image_13755185.png" height={"100%"} width={"50%"} />
   

        </div>
      </div>
    </div>
  );
}

HomeScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default HomeScreen;
