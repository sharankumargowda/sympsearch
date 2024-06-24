import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CgLayoutGrid } from "react-icons/cg";

function HomeScreen({ setActiveTab }) {
  useEffect(() => {
    setActiveTab(1);
  }, [setActiveTab]);

  const HealthTips = [
    ".health is most important for life and that is the logical life",
    ".that is the thinking life of l-i story",
    ".so many health tips for life jorney",
    ".thinking is good for life",
  ];

  return (
    <div className="homeScreen">
      <div className="mainSection">
        <div className="imgContainer">
          <Carousel
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            interval={1000}
          >
            <div>
              <img
                src="https://lepfitness.co.uk/wp-content/uploads/2020/10/Body-pain-2-copy-818x1024.png"
                height={"320px"}
                style={{ objectFit: "contain", marginBottom: "100px" }}
              />
              <p className="legend">{" All Dieses"}</p>
            </div>
            <div>
              <img
                src="https://apollohealthlib.blob.core.windows.net/health-library/2021/05/Heart-Disease-scaled.jpg"
                height={"340px"}
                style={{ objectFit: "contain", marginBottom: "100px" }}
              />
              <p className="legend">{"solution"}</p>
            </div>
            <div>
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.WXqUg3vEoqKzL7EWp5D_SAHaGy&pid=Api&P=0&h=180"
                height={"300px"}
                style={{ objectFit: "contain", marginBottom: "100px" }}
              />
              <p className="legend">{"Contact Doctor "}</p>
            </div>
          </Carousel>
          <div className="health">
            <h1>HealthTips</h1>
            {HealthTips.map((tip, index) => (
              <li>{tip}</li>
            ))}
          </div>
        </div>

        <div className="cardContainer">
          <center>
            <h1 style={{ color: "blue", fontStyle: "italic" }}>
              Talk with Doctor
            </h1>
            <img
              src="https://i.ytimg.com/vi/ca3G-v8l_CY/maxresdefault.jpg"
              style={{ width: "450px", height: "400px" }}
            />
          </center>
        </div>
      </div>
    </div>
  );
}

HomeScreen.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default HomeScreen;
