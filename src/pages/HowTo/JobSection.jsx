import { MainPost } from "../landingPage/LandingPage.style";
import jobWorkflow from "./assets/jobWorkflow.svg";
import "./howTo.css";

const JobSection = () => {
  const heading1Style = {
    color: "#242745",
    fontWeight: "700",
    fontSize: "64px",
    lineHeight: "84px",
    textAlign: "justify",
  };

  const heading2Style = {
    color: "#242745",
    fontWeight: "700",
    fontSize: "1.2rem",
    lineHeight: "84px",
    textAlign: "justify",
    marginLeft:""
  };

  const paraStyle = {
    color: "#4B465C",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "28px",
    textAlign: "justify",
  };
  const ulPadding = {
    paddingLeft:'1.25rem'
  };
  return (
    <>
    <div className="px-0 m-0 gap-5   px-md-5">
      <div className="row mx-0 px-4 px-lg-5   my-lg-5 align-items-center job-container w-100     custom-row-reverse">
        <div className="col-sm-12 d-flex flex-column my-5 custom-padding-left">
         
            <h1 style={heading2Style}>Job workflow</h1>
            <img src={jobWorkflow} alt="jobWorkflow" className="w-100" />
        
        </div>
      </div>

      <div className="row m-0 gap-0 px-3 px-lg-5 px-lg-5 my-lg-5   align-items-center w-100 justify-content-between custom-row-reverse job-container  ">
        <div className="col-sm-12 pr-lg-5 col-md-6 col-lg-6 d-flex flex-column custom-padding-left">
          
            <h1 className="custom-heading" style={heading1Style}>
              Candidate
            </h1>
            <div className="w-100">
             
              <p className="p-0 paraSize  my-4" style={paraStyle}>
                As someone seeking a job to a job opportunity, ePosting is
                designed to provide you with powerful tools and support at every
                step of the way, ensuring your success throughout the entire
                process. Here's how we can assist you:
              </p>
              <ol style={ulPadding}>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                Discovering a wide range of available job opportunities
              </li>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                Requesting a job if the opportunity is not yet available
              </li>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                Connecting you with a vast network of individual and corporate
                employers
              </li>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                 Providing you with a secure and efficient way to handle
                contracts
              </li>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
               Offering just-in-time tips to help you through the interview
                and offer stages
              </li>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                 Getting feedback and building relationships with the
                employers
              </li>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                 Ensuring a fulfilling job experience
              </li>
              <p className="p-0 paraSize  my-4" style={paraStyle}>
                At ePosting, we not only help open doors to job opportunities
                that might otherwise be inaccessible, but also provide you with
                the tools necessary to reach your full potential.
              </p>
              </ol>
            </div>
        
        </div>

        <div className="col-sm-12 pl-lg-5 col-md-6 col-lg-6 ml-5 d-flex flex-column custom-padding-left">
      
            <h1 className="custom-heading" style={heading1Style}>
              Employer
            </h1>
            <div className="w-100">
           
              <p className="p-0  paraSize my-4" style={paraStyle}>
                For someone who can provide jobs, leveraging ePosting offers
                numerous benefits, including access to a wide pool of qualified
                candidates and streamlined process from start to finish. Here’s
                how we can assist you:
              </p>
              <ol style={ulPadding}> 
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                Posting job opportunities and getting to your desired fee for
                successful jobs.
              </li>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                Expanding reach with access to a pool of targeted job
                requests
              </li>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                Shortlisting qualified candidates
              </li>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                Initiating and managing job contracts with candidates
              </li>
              <li className="p-0  paraSize m-0" style={paraStyle}>
                Offering just-in-time tips to support you at each stage of
                the job process
              </li>
              <li className="p-0 paraSize  m-0" style={paraStyle}>
                Getting feedback and building relationships with the
                candidates
              </li>
              <li className="p-0  paraSize m-0" style={paraStyle}>
                Ensuring a fulfilling job experience
              </li>
              <p className="p-0 paraSize  my-4" style={paraStyle}>
                We are committed to enhancing your job experience and helping
                you connect with the right candidates for the job opportunities
                you're offering.
              </p>
              </ol>
            </div>
       
        </div>
      </div>

      <div className="mt-5">
        &nbsp;
      </div>
    </div>
    </>
  );
};

export default JobSection;
