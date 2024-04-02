import { useEffect } from "react";
import "./InfinityScrollStory.css";

const InfinityScroll = () => {
  useEffect(() => {
    const sliderRight = document.querySelector(".infi-content-right");
    const sliderLeft = document.querySelector(".infi-content-left");
    const copyRight = sliderRight.cloneNode(true);
    const copyLeft = sliderLeft.cloneNode(true);

    document.querySelector(".infi-container-right").appendChild(copyRight);
    document.querySelector(".infi-container-right").appendChild(copyRight);

    document.querySelector(".infi-container-left").appendChild(copyLeft);
    document.querySelector(".infi-container-left").appendChild(copyLeft);

    return () => {
      document.querySelector(".infi-container-right").removeChild(copyRight);
      document.querySelector(".infi-container-left").removeChild(copyLeft);
    };
  }, []);


  return (
    <>
      <div className="infi-container-right">
        <div className="infi-content-right">
          <button className="ms-4 normal-button">
            Full Stact Developer
          </button>
          <button className="color-button">Back End Developer</button>
          <button className="normal-button">Graphic Designer</button>
          <button className="normal-button">UI Designer</button>
          <button className="normal-button">UX Designer</button>
          <button className="normal-button">Product Designer</button>
          <button className="normal-button">3D Designer</button>
          <button className="color-button">Social Media Specialist</button>
          <button className="normal-button">Marketing</button>
        </div>
      </div>

      <div className="infi-container-left">
        <div className="infi-content-left">
          <button className="ms-4  color-button">
            Software Developer
          </button>
          <button className="normal-button">Software Engineer</button>
          <button className="normal-button">Product Manager</button>
          <button className="normal-button">Data Science</button>
          <button className="normal-button">Data Analysis</button>
          <button className="color-button">Front End Developer</button>
          <button className="normal-button">Sales Management</button>
          <button className="normal-button">Branding Management</button>
          <button className="normal-button">Office Administration</button>
        </div>
      </div>
    </>
  );
};

export default InfinityScroll;
