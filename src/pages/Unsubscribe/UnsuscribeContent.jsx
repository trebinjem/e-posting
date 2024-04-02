import PrimaryButton from "../../components/Button/PrimaryButton";
import unsuscribe from "./assets/unsuscribe.svg";
import './unsuscribeContent.css';
const UnsuscribeContent = () => {
  const heading5 = {
    color: "#7367F0",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "36px",
  };
  return (
    <>
      <div className="my-lg-5 my-0 unsubscrib-container w-100" style={{ padding: "0em 1em"  }}>
        <div
          className="w-100 d-flex flex-column mt-5 mt-md-0   gap-4 justify-content-center align-items-center"
          style={{}}
        >
          <img src={unsuscribe} alt="unsuscribe" />

          <div
            style={{
              display: "flex",
              gap: "5px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5 style={heading5}>You will be missed</h5>

            <p className="text-center">
              [email address] has been unsubscribed from the ePosting email
              list.
            </p>

            <p className="text-center">
              If that was a mistake or if you change your mind:
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="action-btn" >I want to re-subscribe</button>
            <p className="text-center"  style={{marginBottom: "150px"}}>
              Question or feedback? Please contact us at support@eposting.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnsuscribeContent;
