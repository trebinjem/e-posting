import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
// import Button from "@mui/material/Button";
import { MainPost } from "../landingPage/LandingPage.style";

import addIcon from "./assets/addIcon.svg";
import closeIcon from "./assets/closeIcon.svg";
import { useState } from "react";
import "./faq.css";
import { color } from "framer-motion";

const FaqContent = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleAccordionChange = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  


  // Content for each accordion
  const accordionContent = [
    {
      title: "How do I sign up?",
      details:
        "Signing up is free! To join our platform, simply visit our website and click on the 'Join us' or 'Create an account' button. In addition to using your email ID, you can also sign up using your LinkedIn or Google login details.",
      buttonText: "Getting started",
    },
    {
      title: "How to navigate ePosting platform?",
      details: "explain about bavigation.",
      buttonText: "Getting started",
    },
    {
      title: "How to create a job post?",
      details: "create post",
      buttonText: "Jobs creation",
    },
    {
      title: "How to end a job post?",
      details: "How to end a job post",
      buttonText: "Jobs creation",
    },
    {
      title: "How to create a request post?",
      details: "create a request post",
      buttonText: "Request creation",
    },
    {
      title: "How do I find a list of all my applications?",
      details: "fin list of application",
      buttonText: "Workflow",
    },
    {
      title: "How to add someone to my network?",
      details: "how to read",
      buttonText: "Networking",
    },
    {
      title: "How do I chat with a job poster?",
      details: "can I chat",
      buttonText: "Chat",
    },
    {
      title:
        "How do I find my conversations with all applicants for my job post?",
      details: "I find my conversations with all applicants",
      buttonText: "Chat",
    },
    {
      title: "How does the escrow account work?",
      details: "account work",
      buttonText: "Payment",
    },
    {
      title: "How do I manage my notifications?",
      details: "manage notification",
      buttonText: "User settings",
    },
  ];


  const heading3 = {
    color: "#171725",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "30px",
  };

  const button = {
    border: "none",
    background: "#4B4B4B29",
    color: "#4B4B4B",
    padding: "1rem",
    fontSize: "18px",
    borderRadius: "5rem",
    lineHeight: "28px",
    fontWeight: "400",
  };

  return (
    <>
      <MainPost className=" custom-main-post">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        <h1 className="header-title" >
          Below you can find answers to questions we get asked the most
        </h1>

        <div className=" mt-4 mb-0 dropdown w-full">
          <h3 style={{color:"#4B465C" , fontSize:"15px" , lineHeight:"17.63px"}}>Filter by Tags</h3>
          <div className="d-flex align-item-center justify-content-between">
          <button className="dropdown-toggle">
          Getting started
          </button>
       
            <div className="dropdown-menu">
              <button className="dropdown-item">Option 1</button>
              <button className="dropdown-item">Option 2</button>
              <button className="dropdown-item">Option 3</button>
            </div>
          </div>
        
        </div>
        </div>


        <div className="mb-5 mt-4 d-flex flex-column gap-2">
          {accordionContent.map((accordion, index) => (
            <Accordion
              key={index}
              className="p-2"
              style={{ backgroundColor: "#7367F014" , border:"none" , boxShadow:"none" }}
              expanded={openAccordionIndex === index}
              onChange={() => handleAccordionChange(index)}
            >
              <AccordionSummary
                expandIcon={
                  <img
                    src={openAccordionIndex === index ? closeIcon : addIcon}
                    alt="icon"
                  />
                }
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <div
                  className="custom-button-text"
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <h3 className="custom-heading-3" style={heading3}>
                    {accordion.title}
                  </h3>
                  <button className="custom-button-style" style={button}>
                    {accordion.buttonText}
                  </button>
                </div>
              </AccordionSummary>

              <AccordionDetails> <p className="faq-des">{accordion.details}</p> </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </MainPost>
    </>
  );
};

export default FaqContent;
