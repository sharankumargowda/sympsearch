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
    "hnshdgsgvshjnasbdcgv v hdgbdnwjdyg hdbwbdhghe",
    "jnjdhssnj jedhuhuhu",
    "gswtgvqbfst qs6yqavhgsqyquq",
    "vgavgfast gthsgusauayjnn hqsyty  ssmkis jsyasyha",
  ];

  return (
    <div className="HomeScreen">
      <div className="HomeContainer">
        <div className="CorcelContainer">
          <div className="ch">
            <Carousel
              autoPlay={true}
              interval={1000}
              infiniteLoop={true}
              showThumbs={false}
            >
              <div>
                <img
                  style={{ objectFit: "contain", width: "80%",height:"300px"}}
                  src="https://tse3.mm.bing.net/th?id=OIP.2LCl_K5zGiDuztSzy-ldwgHaEL&pid=Api&P=0&h=180"
                />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img
                  style={{ objectFit: "contain" ,width: "80%",height:"300px"}}
                  src="https://www.apderm.com/wp-content/uploads/2020/03/Teledmed_FemaleDoctor_Tablet-scaled.jpg"
                />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img
                  style={{ objectFit: "contain", width: "80%",height:"300px"}}
                  src="https://eldohealth.plus/wp-content/uploads/2023/04/patient-img-2.jpg"
                />
               
                <p className="legend" >Legend 3 </p>
                
              </div>
            </Carousel>
          </div>
          <div className="Health" style={{backgroundColor:"yellow"}}>
            <center>
              <h1>Health Tips</h1>
              {health.map((he) => (
               <ol>{he}</ol>
              ))}
            </center>
          </div>
        </div>
        <div className="callContainer">
          <h1 style={{ textAlign: "center" }}> Talk With Doctor</h1>
          <img
            src="https://png.pngtree.com/png-clipart/20231202/original/pngtree-doctor-3d-rendered-emoji-icon-png-image_13755185.png"
            width={"40%"} height={"20%"}
          />
          <img 
            src="https://cdn4.iconfinder.com/data/icons/communication-447/32/call-2-512.png"
            height={"200px"} 
          />
        </div>
      </div>
    </div>
  );
}

HomeScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default HomeScreen;
