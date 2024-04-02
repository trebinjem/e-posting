import mailIcon from "./assets/mailIcon.svg";
import messageIcon from "./assets/messageIcon.svg";
import calenderIcon from "./assets/calenderIcon.svg";
import starIcon from "./assets/starIcon.svg";
import groupIcon from "./assets/groupIcon.svg";
import addIcon from "./assets/addIcon.svg";
import timeIcon from "./assets/timeIcon.svg";
import peopleIcon from "./assets/peopleIcon.svg";
import "./InfinityScroll.css";
import { useEffect } from "react";

const InfinityScroll = () => {
  useEffect(() => {
    const slider = document.querySelector(".infi-content");
    const copy = slider.cloneNode(true);
    document.querySelector(".infi-container").appendChild(copy);
    document.querySelector(".infi-container").appendChild(copy);

    return () => {
      document.querySelector(".infi-container").removeChild(copy);
    };
  }, []);

  return (
    <div className="infi-container">
      <div className="infi-content">
        <img src={mailIcon} alt="mailIcon" />
        <img src={messageIcon} alt="messageIcon" />
        <img src={calenderIcon} alt="calenderIcon" />
        <img src={starIcon} alt="starIcon" />
        <img src={groupIcon} alt="groupIcon" />
        <img src={addIcon} alt="addIcon" />
        <img src={timeIcon} alt="timeIcon" />
        <img src={peopleIcon} alt="peopleIcon" />
        <img src={mailIcon} alt="mailIcon" />
        <img src={messageIcon} alt="messageIcon" />
        <img src={calenderIcon} alt="calenderIcon" />
        <img src={starIcon} alt="starIcon" />
        <img src={groupIcon} alt="groupIcon" />
        <img src={addIcon} alt="addIcon" />
        <img src={timeIcon} alt="timeIcon" />
        <img src={peopleIcon} alt="peopleIcon" />
      </div>
    </div>
  );
};

export default InfinityScroll;
