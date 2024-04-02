import NavBar from "../ResourceMarketPlace/NavBar";
import { MainPost } from "../landingPage/LandingPage.style";
import graterthan from "./assets/graterthan.svg";
import "./TermsServices.css"
import { useNavigate } from "react-router-dom";

const TermsServices = () => {
  const navigate = useNavigate();
  const heading1Style = {
    color: "#7367F0",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "84px",
    textAlign: "justify",
  };

  const heading4 = {
    color: "#6B6B6B",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "22px",
    textAlign: "justify",
  };

  const paraStyle = {
    color: "#6B6B6B",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "22px",
    textAlign: "justify",
  };
  const ulPadding = {
    paddingLeft:'1.25rem'
  };

  return (
    <>
      <div className="mb-5 w-100 main-policy-coontainer" style={{}}>
        <NavBar />

        <div
          className="d-flex gap-2 align-items-center custom-padding"
          // style={{ marginTop: "-4rem", paddingLeft: "8rem" }}
        >
          <MainPost className="d-flex gap-2 align-items-center">
            <h4
              className="m-0 p-0"
              style={{ color: "#A8AAAE", fontSize: "14px", fontWeight: "400" , cursor:"pointer" }}
              onClick={() => navigate("/")}
            >
              Home
            </h4>
            <img src={graterthan} alt="graterthan" width={25} height={25} />
            <h4
              className="m-0 p-0"
              style={{ color: "#7367F0", fontSize: "14px", fontWeight: "400" }}
            >
              Terms of Use
            </h4>
          </MainPost>
        </div>

        <div className="w-100 mb-5 custom-padding">
          <MainPost className="w-100">
            <h1 style={heading1Style}>Terms of Use</h1>
            <p style={paraStyle}>Last updated: March 18, 2024 </p>

            <p style={paraStyle}>
              Welcome to ePosting Corp.'s Online Jobs Marketplace ("Platform").
              These Terms of Use ("Terms") govern your access to and use of the
              Platform, which is operated by ePosting Corp. ("we," "us," or
              "our"). By accessing or using the Platform, you agree to be bound
              by these Terms, our Privacy Policy, and all applicable laws and
              regulations. Please read these Terms carefully before using the
              Platform.
            </p>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Acceptance of Terms:</h4>
              <p style={paraStyle}>
                By accessing or using the Platform, you acknowledge that you
                have read, understood, and agree to be bound by these Terms and
                our Privacy Policy. If you do not agree to these Terms or our
                Privacy Policy, please do not use the Platform.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}> Eligibility: </h4>
              <p style={paraStyle}>
                You must be at least 18 years old or the age of majority in your
                jurisdiction to use the Platform. By using the Platform, you
                represent and warrant that you are of legal age to form a
                binding contract with us and meet all eligibility requirements.
                If you are using the Platform on behalf of an organization, you
                represent and warrant that you have the authority to bind that
                organization to these Terms.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Account Registration:</h4>
              <p style={paraStyle}>
                In order to access certain features of the Platform, you may be
                required to register for an account. When you register for an
                account, you agree to provide accurate, current, and complete
                information about yourself or your organization as prompted by
                the registration form, and to promptly update such information
                to keep it accurate, current, and complete. You are responsible
                for maintaining the confidentiality of your account credentials
                and for all activities that occur under your account. You agree
                to notify us immediately of any unauthorized use of your account
                or any other breach of security.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Use of the Platform:</h4>
              <p style={paraStyle}>
                You may use the Platform for lawful purposes only and in
                accordance with these Terms and all applicable laws and
                regulations. You agree not to use the Platform in any manner
                that could disable, overburden, damage, or impair the Platform
                or interfere with any other party's use of the Platform. You
                further agree not to attempt to gain unauthorized access to any
                part of the Platform, other accounts, computer systems, or
                networks connected to the Platform through hacking, password
                mining, or any other means.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}> User Content:</h4>
              <p style={paraStyle}>
                The Platform may allow you to post, submit, or otherwise make
                available content, including but not limited to jobs,
                recommendations, reviews, comments, and messages ("User
                Content"). You retain ownership of any User Content you submit,
                but by posting, submitting, or otherwise making User Content
                available on the Platform, you grant us a non-exclusive,
                worldwide, royalty-free, perpetual, irrevocable, sublicensable,
                and transferable license to use, reproduce, distribute, prepare
                derivative works of, display, and perform such User Content in
                connection with the operation of the Platform and our business,
                including without limitation for promoting and redistributing
                part or all of the Platform.
              </p>
            </div>

            <div className="d-flex flex-column gap-4 w-100">
              <div className="d-flex gap-2 custom-flex-coulmn w-100">
                <h4 className="p-0 m-0" style={heading4}>
                  Prohibited Conduct:
                </h4>
                <p className="p-0 m-0" style={paraStyle}>
                  In connection with your use of the Platform, you agree not to:
                </p>
              </div>
              <p style={paraStyle}>
              <ul style={ulPadding} >
                <li>
                  Violate any applicable laws, regulations, or these Terms;
                </li>
                <li>
                  Use the Platform for any purpose that is unlawful or
                  prohibited by these Terms;
                </li>
                <li>
                  Impersonate any person or entity or falsely state or otherwise
                  misrepresent your affiliation with any person or entity;
                </li>
                <li>
                  Interfere with or disrupt the operation of the Platform or
                  servers or networks connected to the Platform;
                </li>
                <li>
                  Upload or transmit any material that is defamatory, libelous,
                  obscene, pornographic, indecent, offensive, or otherwise
                  objectionable;
                </li>
                <li>
                  Engage in any activity that could damage, disable, overburden,
                  or impair the Platform or our servers or networks;
                </li>
                <li>
                  Harvest or collect email addresses or other contact
                  information of other users from the Platform by electronic or
                  other means for the purpose of sending unsolicited emails or
                  other unsolicited communications;
                </li>
                <li>
                  Use any robot, spider, scraper, or other automated means to
                  access the Platform for any purpose without our express
                  written permission;
                </li>
                <li>
                  Reverse engineer, decompile, disassemble, or otherwise attempt
                  to derive the source code or underlying structure, ideas, or
                  algorithms of the Platform;
                </li>
                <li>
                  Attempt to circumvent any technological measure implemented by
                  us or any of our providers or any other third party to protect
                  the Platform;
                </li>
                <li>
                  Assist or encourage any third party in engaging in any
                  activity prohibited by these Terms.
                </li>
                <li>
                  Intellectual Property: The Platform and its entire contents,
                  features, and functionality (including but not limited to all
                  information, software, text, displays, images, video, and
                  audio, and the design, selection, and arrangement thereof) are
                  owned by ePosting Corp., its licensors, or other providers of
                  such material and are protected by copyright, trademark,
                  patent, trade secret, and other intellectual property or
                  proprietary rights laws. You may not modify, copy, distribute,
                  transmit, display, perform, reproduce, publish, license,
                  create derivative works from, transfer, or sell any
                  information, software, products, or services obtained from or
                  through the Platform without our prior written permission.
                </li>
                </ul>
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Third-Party Links and Services:</h4>
              <p style={paraStyle}>
                The Platform may contain links to third-party websites or
                services that are not owned or controlled by us. We have no
                control over, and assume no responsibility for, the content,
                privacy policies, or practices of any third-party websites or
                services. By accessing or using any third-party websites or
                services, you acknowledge and agree that we are not responsible
                or liable, directly or indirectly, for any damage or loss caused
                or alleged to be caused by or in connection with your use of or
                reliance on any such content, goods, or services available on or
                through any such third-party websites or services.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 className="p-0 m-0" style={heading4}>
                Modification and Termination:
              </h4>
              <p className="p-0 m-0" style={paraStyle}>
                We reserve the right to modify or terminate the Platform or
                these Terms at any time, without notice, for any reason, in our
                sole discretion. We may also impose limits on certain features
                and services or restrict your access to parts or all of the
                Platform without notice or liability. You agree that we shall
                not be liable to you or to any third party for any modification,
                suspension, or discontinuance of the Platform or these Terms.
              </p>
            </div>

            <div className="d-flex flex-column gap-4 w-100">
              <div className="d-flex flex-column gap-2 w-100">
                <h4 className="p-0 m-0" style={heading4}>
                  Payment Processing and Terms:
                </h4>
                <p className="p-0 m-0" style={paraStyle}>
                  The jobs marketplace offers payment processing services to
                  facilitate transactions between users. By using the payment
                  features on the jobs marketplace, you agree to abide by the
                  following terms:
                </p>
              </div>
              <p style={paraStyle}>
              <ul style={ulPadding} >
                <li>
                  Payment Authorization: When you initiate a transaction through
                  the jobs marketplace, you authorize us to facilitate the
                  processing of your payment and any related fees. You agree to
                  provide accurate and current payment information and to
                  promptly update such information if it changes. You further
                  authorize us to charge your chosen payment method for all
                  transactions initiated through your account.
                </li>
                <li>
                  Transaction Disputes: In the event of a dispute regarding a
                  transaction conducted through the jobs marketplace, including
                  but not limited to disputes concerning the quality of goods or
                  services provided, you agree to resolve such disputes directly
                  with the other party involved in the transaction. We may, in
                  our sole discretion, assist with the resolution of disputes,
                  but we are not obligated to do so.
                </li>
                <li>
                  Fees and Charges: We may charge fees for the use of certain
                  payment features on the jobs marketplace, including but not
                  limited to transaction fees, processing fees, and service
                  fees. By using the payment features on the jobs marketplace,
                  you agree to pay all applicable fees and charges. We reserve
                  the right to modify our fee structure at any time, with or
                  without notice.
                </li>
                <li>
                  Refunds and Cancellations: Refunds and cancellations for
                  transactions conducted through the jobs marketplace are
                  subject to the terms and conditions of the parties involved in
                  the transaction. We are not responsible for issuing refunds or
                  facilitating cancellations, except as required by applicable
                  law.
                </li>
                <li>
                  Compliance with Laws: You agree to comply with all applicable
                  laws, regulations, and industry standards when using the
                  payment features on the jobs marketplace. You further agree
                  not to engage in any fraudulent, illegal, or prohibited
                  activity in connection with your use of the payment features.
                </li>
                <li>
                  Third-Party Payment Processors: We may use third-party payment
                  processors to facilitate transactions on the jobs marketplace.
                  By using the payment features on the jobs marketplace, you
                  agree to abide by the terms and conditions of any third-party
                  payment processor that we may use.
                </li>
                <li>
                  Modification and Termination: We reserve the right to modify
                  or terminate the payment features on the jobs marketplace at
                  any time, with or without notice, for any reason, in our sole
                  discretion. We may also impose limits on certain payment
                  features or restrict your access to the payment features
                  without notice or liability.
                </li>
                <li>
                  Governing Law and Dispute Resolution: Any disputes arising out
                  of or in connection with your use of the payment features on
                  the jobs marketplace shall be governed by and construed in
                  accordance with the laws of [insert state/country], without
                  giving effect to any principles of conflicts of law. Any
                  dispute, controversy, or claim arising out of or relating to
                  these Terms or the breach, termination, enforcement,
                  interpretation, or validity thereof, including the
                  determination of the scope or applicability of this agreement
                  to arbitrate, shall be determined by arbitration in [insert
                  city, state/country] before one arbitrator.
                </li>
                </ul>
              </p>
            </div>

            <div className="d-flex flex-column gap-4 w-100">
              <div className="d-flex gap-2 flex-column w-100">
                <h4 className="p-0 m-0" style={heading4}>
                  Payment Processing and Terms:
                </h4>
                <p className="p-0 m-0" style={paraStyle}>
                  The jobs marketplace offers payment processing services to
                  facilitate transactions between users. By using the payment
                  features on the jobs marketplace, you agree to abide by the
                  following terms:
                </p>
              </div>
              <p style={paraStyle}>
              <ul style={ulPadding} >
                <li>
                  Payment Authorization: When you initiate a transaction through
                  the jobs marketplace, you authorize us to facilitate the
                  processing of your payment and any related fees. You agree to
                  provide accurate and current payment information and to
                  promptly update such information if it changes. You further
                  authorize us to charge your chosen payment method for all
                  transactions initiated through your account.
                </li>
                <li>
                  Transaction Disputes: In the event of a dispute regarding a
                  transaction conducted through the jobs marketplace, including
                  but not limited to disputes concerning the quality of goods or
                  services provided, you agree to resolve such disputes directly
                  with the other party involved in the transaction. We may, in
                  our sole discretion, assist with the resolution of disputes,
                  but we are not obligated to do so.
                </li>
                <li>
                  Fees and Charges: We may charge fees for the use of certain
                  payment features on the jobs marketplace, including but not
                  limited to transaction fees, processing fees, and service
                  fees. By using the payment features on the jobs marketplace,
                  you agree to pay all applicable fees and charges. We reserve
                  the right to modify our fee structure at any time, with or
                  without notice.
                </li>
                <li>
                  Refunds and Cancellations: Refunds and cancellations for
                  transactions conducted through the jobs marketplace are
                  subject to the terms and conditions of the parties involved in
                  the transaction. We are not responsible for issuing refunds or
                  facilitating cancellations, except as required by applicable
                  law.
                </li>
                <li>
                  Compliance with Laws: You agree to comply with all applicable
                  laws, regulations, and industry standards when using the
                  payment features on the jobs marketplace. You further agree
                  not to engage in any fraudulent, illegal, or prohibited
                  activity in connection with your use of the payment features.
                </li>
                <li>
                  Third-Party Payment Processors: We may use third-party payment
                  processors to facilitate transactions on the jobs marketplace.
                  By using the payment features on the jobs marketplace, you
                  agree to abide by the terms and conditions of any third-party
                  payment processor that we may use.
                </li>
                <li>
                  Modification and Termination: We reserve the right to modify
                  or terminate the payment features on the jobs marketplace at
                  any time, with or without notice, for any reason, in our sole
                  discretion. We may also impose limits on certain payment
                  features or restrict your access to the payment features
                  without notice or liability.
                </li>
                <li>
                  Governing Law and Dispute Resolution: Any disputes arising out
                  of or in connection with your use of the payment features on
                  the jobs marketplace shall be governed by and construed in
                  accordance with the laws of [insert state/country], without
                  giving effect to any principles of conflicts of law. Any
                  dispute, controversy, or claim arising out of or relating to
                  these Terms or the breach, termination, enforcement,
                  interpretation, or validity thereof, including the
                  determination of the scope or applicability of this agreement
                  to arbitrate, shall be determined by arbitration in [insert
                  city, state/country] before one arbitrator.
                </li>
                </ul>
              </p>
            </div>

            <div className="d-flex flex-column gap-4 w-100">
              <div className="d-flex flex-column gap-2 w-100">
                <h4 className="p-0 m-0" style={heading4}>
                  Escrow Account:
                </h4>
                <p className="p-0 m-0" style={paraStyle}>
                  In certain transactions facilitated through the jobs
                  marketplace, funds may be placed in an escrow account ("Escrow
                  Account") until the completion of the agreed-upon services
                  between the parties involved. By using the jobs marketplace
                  for such transactions, you agree to the following terms:
                </p>
              </div>
              <p style={paraStyle}>
              <ul style={ulPadding} >
                <li>
                  Escrow Authorization: You authorize us to hold the funds in an
                  ePosting Account as a marked Escrow account until the
                  completion of the services as agreed upon by the parties.
                  Funds held in the Escrow Account will not be released until
                  both parties have confirmed completion of the services or
                  until otherwise instructed by the parties or as required by
                  applicable law.
                </li>
                <li>
                  Dispute Resolution: In the event of a dispute between the
                  parties regarding the completion of the services or the
                  release of funds from the Escrow Account, you agree to first
                  attempt to resolve the dispute directly with the other party.
                  If the dispute cannot be resolved between the parties, you may
                  contact us to request assistance in resolving the dispute.
                </li>
                <li>
                  Release of Funds: Upon confirmation of the completion of the
                  services by both parties or as otherwise instructed by the
                  parties or required by applicable law, we will release the
                  funds from the Escrow Account in accordance with the
                  agreed-upon terms. Additional transactions fees for release
                  funds, which will be deducted from the funds held in the
                  Escrow Account.
                </li>
                <li>
                  Withdrawal of Funds: All unallocated funds from unsuccessful
                  jobs will be kept in the escrow account for future debt use.
                  Requests for withdrawal can be made through ePosting. Release
                  of funds and transaction fees, which will be deducted from the
                  funds held in the Escrow Account. Duration on withdraw of
                  funds are subjected to the method, amount and clearing house
                  terms which ePosting has no control.
                </li>
                <li>
                  Escrow Fees: We may charge escrow fees for the use of the
                  Escrow Account, which will be deducted from the funds held in
                  the Escrow Account. Escrow fees will be clearly disclosed to
                  you prior to initiating the transaction.
                </li>
                <li>
                  Escrow Security: We take reasonable measures to ensure the
                  security of funds held in the Escrow Account. However, you
                  acknowledge and agree that we are not responsible for any
                  unauthorized access to or use of funds held in the Escrow
                  Account.
                </li>
                <li>
                  Modification and Termination: We reserve the right to modify
                  or terminate the use of the Escrow Account or these additional
                  terms and conditions at any time, without notice, for any
                  reason, in our sole discretion.
                </li>
                </ul>
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Modification and Termination:</h4>
              <p style={paraStyle}>
                We reserve the right to modify or terminate the Platform or
                these Terms at any time, without notice, for any reason, in our
                sole discretion. We may also impose limits on certain features
                and services or restrict your access to parts or all of the
                Platform without notice or liability. You agree that we shall
                not be liable to you or to any third party for any modification,
                suspension, or discontinuance of the Platform or these Terms.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>
                Disclaimer of Warranties and Limitation of Liability:
              </h4>
              <p style={paraStyle}>
                This platform may contain inaccuracies and typographical errors.
                We do not warrant the accuracy or completeness of the materials
                or the reliability of any advice, opinion, statement, or other
                information displayed on the site. You expressly understand and
                agree that: (i) your use of the platform, including any reliance
                on any such opinion, advice, statement, memorandum, or
                information contained herein, shall be at your sole risk; (ii)
                the platform is provided on an "as is" and "as available" basis;
                (iii) except as expressly provided herein we disclaim all
                warranties of any kind, whether express or implied, including,
                but not limited to implied warranties of merchantability,
                fitness for a particular purpose, workmanlike effort, title, and
                non-infringement; (iv) we make no warranty with respect to the
                results that may be obtained from this site, the products or
                services advertised or offered or merchants involved; (v) any
                material downloaded or otherwise obtained through the use of the
                site is done at your own discretion and risk; and (vi) you will
                be solely responsible for any damage to your computer system or
                for any loss of data that results from the download of any such
                material.
              </p>
              <p style={paraStyle}>
                You understand and agree that under no circumstances, including,
                but not limited to, negligence, shall we be liable for any
                direct, indirect, incidental, special, punitive, or
                consequential damages that result from the use of, or the
                inability to use, any of our sites or materials or functions on
                any such site, even if we have been advised of the possibility
                of such damages. The foregoing limitations shall apply
                notwithstanding any failure of essential purpose of any limited
                remedy.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Indemnification:</h4>
              <p style={paraStyle}>
                You agree to indemnify, defend, and hold harmless ePosting Corp.
                and its officers, directors, employees, agents, affiliates,
                successors, and assigns from and against any and all losses,
                liabilities, damages, costs, and expenses (including reasonable
                attorneys' fees) arising out of or in connection with your use
                of the Platform, your violation of these Terms, or your
                violation of any rights of any third party.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Governing Law and Dispute Resolution:</h4>
              <p style={paraStyle}>
                These Terms shall be governed by and construed in accordance
                with the laws of the state of [insert state/country], without
                giving effect to any principles of conflicts of law. Any
                dispute, controversy, or claim arising out of or relating to
                these Terms or the breach, termination, enforcement,
                interpretation, or validity thereof, including the determination
                of the scope or applicability of this agreement to arbitrate,
                shall be determined by arbitration in [insert city,
                state/country] before one arbitrator. The arbitration shall be
                administered by [insert administering authority] in accordance
                with its Commercial Arbitration Rules and judgment on the award
                rendered by the arbitrator(s) may be entered in any court having
                jurisdiction thereof.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Entire Agreement:</h4>
              <p style={paraStyle}>
                These Terms constitute the entire agreement between you and
                ePosting Corp. regarding your use of the Platform, superseding
                any prior agreements between you and us regarding the Platform.
              </p>
            </div>

            <div className="d-flex flex-column gap-2 w-100">
              <h4 style={heading4}>Waiver and Severability:</h4>
              <p style={paraStyle}>
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of those rights. If any
                provision of these Terms is held to be invalid or unenforceable
                by a court, the remaining provisions of these Terms will remain
                in effect.
              </p>
            </div>

            <div className="d-flex gap-2 my-4 w-100 custom-flex-coulmn">
              <h4 className="p-0 m-0" style={heading4}>
                Contact Us:
              </h4>
              <p className="p-0 m-0 d-flex" style={paraStyle}>
                If you have any questions about these Terms, please contact us
                at support@eposting.com
              </p>
            </div>

            <div className="d-flex gap-2 my-4 w-100">
              <p className="p-0 m-0" style={paraStyle}>
                By accessing or using the Platform, you agree to be bound by
                these Terms of Use, our Privacy Policy, and all applicable laws
                and regulations. If you do not agree to these terms, please do
                not use the Platform.
              </p>
            </div>
          </MainPost>
        </div>
      </div>
    </>
  );
};

export default TermsServices;
