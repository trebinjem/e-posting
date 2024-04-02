import NavBar from "../ResourceMarketPlace/NavBar";
import { MainPost } from "../landingPage/LandingPage.style";
import graterthan from "./assets/graterthan.svg";
import "./privacyPolicy.css";
import { useNavigate } from "react-router-dom";

const PrivacyPolicyContent = () => {

  const navigate = useNavigate();

  const heading1Style = {
    color: "#7367F0",
    fontWeight: "700",
    fontSize: "1.5rem",
    lineHeight: "84px",
    textAlign: "justify",
  };

  const heading4 = {
    color: "#6B6B6B",
    fontWeight: "600",
    fontSize: "0.875rem",
    lineHeight: "22px",
    textAlign: "justify",
  };

  const paraStyle = {
    color: "#6B6B6B",
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "22px",
    textAlign: "justify",
  };
  const ulPadding = {
    paddingLeft:'1.25rem'
  };


  return (
    <>
      <div className="mb-5 pr-rem-md-5 w-100 main-policy-coontainer " >
        <NavBar style={{ padding:"0 !important"  }}  />

        <div className="d-flex gap-2 align-items-center custom-padding">
          <MainPost className="d-flex gap-2 align-items-center">
            <h4
              className="m-0 p-0"
              style={{ color: "#A8AAAE", fontSize: "0.875rem", fontWeight: "400" , cursor:"pointer" }}
              onClick={() => navigate("/")}
            >
              Home
            </h4>
            <img src={graterthan} alt="graterthan" width={16} height={16} />
            <h4
              className="m-0 p-0"
              style={{ color: "#7367F0", fontSize: "0.875rem", fontWeight: "400" }}
            >
              Privacy Policy
            </h4>
          </MainPost>
        </div>

        <div className="w-100 mb-5 custom-padding">
          <MainPost className="w-100">
            <h1 style={heading1Style}>PRIVACY POLICY</h1>
            <p style={paraStyle}>Last updated: March 18, 2024</p>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Privacy Policy</h4>
              <p style={paraStyle}>
                This Privacy Policy ("Policy") describes how ePosting Corp.
                ("we," "us," or "our") collects, uses, and discloses information
                about you when you access or use our Online Jobs Marketplace
                Platform ("Platform"). By accessing or using the Platform, you
                agree to the terms of this Policy. If you do not agree with the
                terms of this Policy, please do not use the Platform.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}> Information We Collect: </h4>
              <p style={paraStyle}>
                <ul style={ulPadding} >
                <li>
                  Information You Provide: When you register for an account on
                  the Platform or otherwise interact with us, you may provide us
                  with certain information, such as your name, email address,
                  contact information, and any other information you choose to
                  provide.
                </li>
                <li>
                  Automatically Collected Information: When you access or use
                  the Platform, we may automatically collect certain information
                  about your device and usage of the Platform, including your IP
                  address, browser type, operating system, pages viewed, and
                  other similar information. User Content: The Platform may
                  allow you to post, submit, or otherwise make available
                  content, including but not limited to jobs, recommendations,
                  reviews, comments, and messages ("User Content").{" "}
                </li>
                <li>
                  User Content may be visible to other users of the Platform and
                  the public.
                </li>
                </ul>
                
              </p>
            </div>

            <div className="d-flex flex-column gap-4 w-100">
              <div className="d-flex gap-2 w-100 custom-flex-coulmn">
                <h4 className="p-0 m-0" style={heading4}>
                  Use of Information:
                </h4>
                <p className="p-0 m-0" style={paraStyle}>
                  We may use the information we collect for various purposes,
                  including to:
                </p>
              </div>
              <p style={paraStyle}>
              <ul style={ulPadding} >
                
                <li>Provide, maintain, and improve the Platform;</li>
                <li>
                  Customize and personalize your experience on the Platform;
                </li>
                <li>
                  Communicate with you, including responding to your inquiries
                  and providing customer support;
                </li>
                <li>
                  Send you promotional communications and other information
                  about our products and services;
                </li>
                <li>
                  Monitor and analyze trends, usage, and activities in
                  connection with the Platform; and
                </li>
                <li>Comply with legal obligations and enforce our rights.</li>
                </ul>
              </p>
            </div>

            <div className="d-flex flex-column gap-4 w-100">
              <div className="d-flex gap-2 w-100 custom-flex-coulmn">
                <h4 className="p-0 m-0" style={heading4}>
                  Disclosure of Information:
                </h4>
                <p className="p-0 m-0" style={paraStyle}>
                  We may disclose your information to third parties for various
                  purposes, including to:
                </p>
              </div>
              <p style={paraStyle}>
              <ul style={ulPadding} >
                <li>
                  Service Providers: We may share your information with
                  third-party service providers who perform services on our
                  behalf, such as hosting, data analysis, payment processing,
                  and customer support.
                </li>
                <li>
                  Business Partners: We may share your information with our
                  business partners in connection with the operation of the
                  Platform and the provision of products and services.
                </li>
                <li>
                  Legal Compliance: We may disclose your information to comply
                  with applicable laws, regulations, legal processes, or
                  governmental requests, or to protect our rights, property, or
                  safety or the rights, property, or safety of our users or
                  others.
                </li>
                <li>
                  Business Transfers: We may disclose your information to a
                  third party in connection with a merger, acquisition, sale of
                  assets, bankruptcy, or other change of control.
                </li>
                </ul>
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Payment Data Handling</h4>
              <p style={paraStyle}>
                <ul>
                <li>
                  Third-Party Payment Processing: We utilize the services of
                  third-party payment processors to facilitate transactions on
                  the Platform. When you make a payment through the Platform,
                  your payment information, such as credit card details, is
                  collected directly by the third-party payment processor. We do
                  not store or retain your payment information on our servers or
                  database.
                </li>
                <li>
                  Third-Party Payment Processor: The third-party payment
                  processor may collect and store your payment information in
                  accordance with their own privacy policies and terms of
                  service. We encourage you to review the privacy policies of
                  the third-party payment processor to understand how they
                  handle your payment data.
                </li>
                <li>
                  Limited Storage of Personal Financial Data: We do not store or
                  retain personal financial data, including credit card numbers,
                  bank account information, or other sensitive payment details,
                  on our servers or database. Any payment data collected by the
                  third-party payment processor is transmitted directly to them
                  for processing, and we do not have access to or control over
                  this information.
                </li>
                </ul>
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Use of Payment Data</h4>
              <p style={paraStyle}>
              <ul style={ulPadding} >
                <li>
                  Purpose of Collection: The payment data collected by the
                  third-party payment processor is used solely for the purpose
                  of processing transactions on the Platform. This includes
                  authorizing payments, processing refunds, and facilitating
                  other payment-related activities.
                </li>
                <li>
                  Security Measures: We take reasonable measures to ensure the
                  security of your payment data during transmission to the
                  third-party payment processor. However, please note that no
                  method of transmission over the internet or method of
                  electronic storage is 100% secure.
                </li>
                </ul>
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Data Retention:</h4>
              <p style={paraStyle}>
              <ul style={ulPadding} >
                <li>
                  Retention Period: As we do not store or retain payment data on
                  our servers or database, we do not have a specific retention
                  period for such information. Any payment data collected by the
                  third-party payment processor is subject to their own data
                  retention policies and practices.
                </li>
                </ul>
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Compliance with Laws:</h4>
              <p style={paraStyle}>
              <ul style={ulPadding} >
                <li>
                  Legal Compliance: We comply with all applicable laws,
                  regulations, and industry standards regarding the handling and
                  processing of payment data. This includes but is not limited
                  to compliance with the Payment Card Industry Data Security
                  Standard (PCI DSS) and other relevant regulations.
                </li>
                </ul>
              </p>
            </div>

            <div className="d-flex flex-column gap-2 my-4 w-100">
              <h4 className="p-0 m-0" style={heading4}>
                Data Security:
              </h4>
              <p className="p-0 m-0" style={paraStyle}>
                We take reasonable measures to protect the information we
                collect from unauthorized access, disclosure, alteration, or
                destruction. However, please note that no method of transmission
                over the internet or method of electronic storage is 100%
                secure.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 my-4 w-100">
              <h4 className="p-0 m-0" style={heading4}>
                Your Choices:
              </h4>
              <p className="p-0 m-0" style={paraStyle}>
                You may have certain choices regarding the information you
                provide to us. For example, you can choose not to provide
                certain information, or you can opt out of receiving promotional
                communications from us. Please note that if you choose to opt
                out of receiving promotional communications, we may still send
                you non-promotional communications, such as those relating to
                your account or transactions.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 my-4 w-100">
              <h4 className="p-0 m-0" style={heading4}>
                Children's Privacy:
              </h4>
              <p className="p-0 m-0" style={paraStyle}>
                The Platform is not intended for children under the age of 18.
                We do not knowingly collect personal information from children
                under the age of 18. If you are a parent or guardian and believe
                that your child has provided us with personal information,
                please contact us to request deletion of that information.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 my-4 w-100">
              <h4 className="p-0 m-0" style={heading4}>
                Changes to this Policy:
              </h4>
              <p className="p-0 m-0" style={paraStyle}>
                We may update this Policy from time to time. If we make material
                changes to this Policy, we will notify you by posting the
                updated Policy on the Platform or by other means. Your continued
                use of the Platform after the effective date of the updated
                Policy will constitute your consent to the changes.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 my-4 w-100">
              <h4 className="p-0 m-0" style={heading4}>
                Contact Us:
              </h4>
              <p className="p-0 m-0" style={paraStyle}>
                If you have any questions or concerns about this Policy, please
                contact us at support@eposting.com
              </p>
            </div>

            <div className="d-flex gap-2 my-4 w-100">
              <p className="p-0 m-0" style={paraStyle}>
                This Privacy Policy outlines the information we collect, how we
                use it, how we disclose it, and your choices regarding your
                information. It also addresses data security, children's
                privacy, changes to the policy, and how to contact us with
                questions or concerns.
              </p>
            </div>
          </MainPost>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyContent;
