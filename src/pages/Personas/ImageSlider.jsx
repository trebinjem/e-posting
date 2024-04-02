import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";
import slider4 from "../../assets/images/slider4.png";
import women from "../../assets/images/women.png";
import { Button } from "./Personas.style";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    id: "fImg",
    image: slider1,
    firstText: "Tim, Job seeker",
    shortText:
      "The challenge of a proactive job seeker considering a change is undoubtedly difficult. Tim’s prospects of finding his desired position in this competitive climate are improved by ePosting’s innovative approaches to enhancing employability factors like skills and networking.",
    fullText:
      "<p>Tim is actively looking for a new job. Even though he currently works, due to fierce competition and few openings, securing more desirable employment has become increasingly challenging for him despite his great qualifications. The high cost of living resulting from inflation further exacerbates this situation. He sees his savings diminish with each passing day as prices of necessities such as rent, healthcare, and groceries rise.</p><p>Tim is fully qualified and equipped for various job positions, but after aggressively looking for new changes and going through numerous interviews, he faces rejection after rejection. The intense competition in the job market forces employers to be highly selective in their hiring process. Consequently, Tim struggles to stand out among other candidates despite meeting the job requirements.</p><p> To effectively navigate these challenges and land a new position, Tim must adapt his approach. Thanks to the ePosting jobs marketplace, Tim can now be found by recruiters and candidates. Instead of sending his resume into oblivion, he connects with users on the platform and receives updates on the job requests he sent. The networking opportunities provided by the platform have consistently improved Tim’s chances of finding his ideal job. Tim can connect with professionals in his area and gain valuable insights into job openings or recommendations.</p><p>For someone like Tim, the challenge of being a proactive job seeker considering a change is undoubtedly difficult. Tim’s prospects of finding his desired position in this competitive climate are improved by ePosting’s innovative approaches to enhancing employability factors like skills and networking. </p>",
  },
  {
    id: "secondImg",
    image: slider2,
    firstText: "Amber, Recruiter",
    shortText:
      "Time sensitivity poses a significant challenge in the recruitment world. ePosting enables Amber to prioritize efficiency while building strong relationships with clients and candidates alike through a targeted approach. She can ensure that she remains competitive while meeting tight deadlines.",
    fullText:
      "<p>Amber is a dedicated recruiter. In the world of recruitment, time is of the essence. Her key challenges lie in competing with other recruiting firms to provide qualified candidates before another firm does. She invests a great deal of time in sourcing talents, making cold calls, and corresponding with candidates. Despite her best efforts, she has found that her active use of multiple job boards, professional networks, and social media platforms has not been efficient in finding the right talents.</p> <p>Amber’s job revolves around understanding and fulfilling the needs of her clients promptly. She knows that once a hiring company or manager feels they have received enough candidates, they close the openings. This means that if she fails to deliver suitable candidates within a specific timeframe, she risks losing out on potential opportunities.</p> <p>Now, Amber has discovered that the ePosting marketplace enables her to identify and engage with prospective candidates swiftly. The platform also helps to streamline her search by screening candidates for their alignments with her client’s requirements.</p> <p>For recruiters like Amber, time sensitivity poses a significant challenge in today’s fast-paced environment. ePosting enables her to prioritize efficiency while building strong relationships with clients and candidates alike through a targeted approach. She can ensure that she remains competitive while meeting tight deadlines.</p>",
  },
  {
    id: "thirdImg",
    image: slider3,
    firstText: "Bill, Job poster",
    shortText:
      "Earning extra income is the icing on the cake of the hiring process for Bill. His passion for connecting people and helping them reach their goals aligns perfectly with ePosting’s mission. Through ePosting, he may use the jobs economy to his advantage while making a positive impact on the lives of job seekers and recruiting practices of businesses.",
    fullText:
      "<p>Bill is a natural networker. He effortlessly connects with people and builds relationships. His innate ability to understand others’ desires and potentials makes him a valuable asset in the recruitment field, even if recruiting is not his primary occupation.</p> <p>Bill has years of expertise sending candidates to positions that are sometimes not advertised because he knows people who are looking for jobs as well as businesses seeking qualified candidates. Without giving his unique position much thought, he has been bridging the gap between job searchers and employers, acting as a matchmaker in the professional realm. Now, Bill has discovered a way to leverage his industry knowledge, experience, and vast network on the ePosting platform to earn extra income.</p> <p>Through ePosting, Bill may quickly contact qualified candidates and recommend them to job openings he is aware of and get paid the agreed-upon jobs fee after the candidate accepts the job offer. This benefits both those seeking work and businesses to identify suitable employees efficiently. Bill’s recommendations carry weight due to his reputation as a reliable source of information in his network.</p> <p>For skilled networkers like Bill, earning extra income is the icing on the cake of this process. His passion for connecting people and helping them reach their goals aligns perfectly with ePosting’s mission. Through ePosting, he may use the jobs economy to his advantage while making a positive impact on the lives of job seekers and recruiting practices of businesses.</p>",
  },
  {
    id: "fourImg",
    image: slider4,
    firstText: "Jenny, Job seeker",
    shortText:
      "The concept of upward mobility could be elusive. By leveling the playing field in job search and empowering everyone to access jobs, ePosting helps Jenny overcome limited career and networking opportunities. Now, they can break free from the constraints imposed by their circumstances and pave the way toward greater professional success.",
    fullText:
      "<p>Jenny is a hardworking individual who toils tirelessly at multiple jobs to make ends meet. However, despite their determination and dedication, they find themselves trapped in a cycle of constrained opportunities, exacerbated by limited time availability to improve their chances of finding better employment. They also lack a network to help them navigate the competitive job market or provide specific advice. Even though they are a member of a job search club that offers them some peer support and resources, Jenny faces multiple challenges that are yet to be overcome.</p> <p>ePosting can be an invaluable tool for Jenny’s career advancement by opening doors for jobs in their desired field and broadening his network beyond the confines of their immediate surroundings. Utilizing both ePosting’s Jobs and Resources Marketplaces, they can connect with professionals who are in a position to offer him opportunities toward better job prospects and provide specific insights into career development. Signing up to the platform is free to everyone, which enables them to explore available job opportunities and showcase their skills and qualifications to potential candidates and recruiters on a wider scale. They can present themselves in a targeted manner while interacting with other users who can help.</p> <p>For individuals like Jenny, the concept of upward mobility could be elusive. By leveling the playing field in job search and empowering everyone to access jobs, ePosting helps them overcome limited career and networking opportunities. Now, Jenny can break free from the constraints imposed by their circumstances and pave the way toward greater professional success.</p>",
  },
];

const CardSlider = styled.div`
  width: 100%;
  height: 100%;

  .full-view {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 9999;
    max-width: 988px;
    max-height: 670px;
    width: calc(100% - 100px);
    margin: auto;
    height: calc(100% - 100px);
    padding: 48px;
    border-radius: 9.756px;
    background: rgba(52, 52, 52, 0.7);
    backdrop-filter: blur(24.390243530273438px);
    display: none;
    transition: 0.5s all;
    @media (max-width: 768px) {
      width: calc(100% - 40px);
      padding: 28px;
    }
    &.active {
      display: block;
      transition: 0.5s all;
    }
    .close-btn {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
    }
    .h-content {
      height: calc(100% - 40px);
    }
    p {
      color: var(--White, #fbfbfb);
      /* Basic Typography/H2 Heading */
      font-family: "Public Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 44px; /* 137.5% */
    }
    .sub-content {
      height: calc(100% - 80px);
      width: calc(100% - 0px);
      overflow: auto;
      p {
        color: var(--Extra-White, #fff);
        font-feature-settings: "clig" off, "liga" off;
        font-family: "Public Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 175% */
      }
    }
  }
  .cardSlider {
    border-radius: 19.512px;
    background: var(--Primary-Primary---100, #e3e1fc);
    padding: 75px 29px 0 29px;
    height: 600px;
    position: relative;
    overflow: hidden;
    transition: 0.5s all;
    &:hover {
      img {
        scale: 1.1;
        transition: 0.5s all;
      }
    }
    img {
      max-width: 193.292px;
      max-height: 519.998px;
      width: auto;
      height: auto;
      margin: auto;
      transition: 0.5s all;
    }
    &.secondImg {
      background: var(
        --Info-Info---100,
        linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.8) 0%,
          rgba(255, 255, 255, 0.8) 100%
        ),
        #00cfe8
      );
    }
    &.thirdImg {
      background: var(
        --Warning-Warning---100,
        linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.8) 0%,
          rgba(255, 255, 255, 0.8) 100%
        ),
        #ff9f43
      );
    }
    &.fourImg {
      background: linear-gradient(0deg, #d4f4e2 0%, #d4f4e2 100%), #ff9f43;
    }
    .content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: calc(100% - 48px);
      border-radius: 9.756px 9.756px 0px 0px;
      background: var(--Glass-Black, rgba(52, 52, 52, 0.5));
      backdrop-filter: blur(24.390243530273438px);
      padding: 24px 24px 40px 24px;
      cursor: pointer;
      > p {
        color: var(--White, #fbfbfb);
        font-feature-settings: "clig" off, "liga" off;

        /* Basic Typography/H2 Heading */
        font-family: "Public Sans";
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 44px; /* 137.5% */
        text-align: center;
      }
      > .sub-content {
        color: var(--Extra-White, #fff);
        font-family: "Public Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 175% */
        text-align: left;
        /* opacity: 0;
        height: 0;
        visibility: hidden;
        transition: opacity 0.6s all, visibility 0s all; */
      }

      /* &:hover {
        .sub-content {
          opacity: 1;
          visibility: visible;
          height: auto;
          transition: opacity 0.6s all, visibility 0s all;
        }
      } */
    }
    @media (max-width: 1440px) {
      .content {
        width: calc(100% - 28px);
      }
    }
    @media (max-width: 1366px) {
      .content {
        p {
          font-size: 22px;
          font-style: normal;
          font-weight: 600;
          line-height: 30.735px; /* 139.704% */
        }
        .sub-content {
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 166.667% */
        }
      }
    }
  }
`;

export default function ImageSlider() {
  const [active, setActive] = useState(false);
  const [itemDetail, setItemDetail] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const NextArrow = ({ onClick, className }) => (
    <div className="arrows right" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="30"
        viewBox="0 0 17 30"
        fill="none"
      >
        <path
          d="M12.3263 15.0341L0.996886 3.70467C0.611531 3.31932 0.425276 2.86332 0.438122 2.33667C0.450967 1.81001 0.650067 1.35401 1.03542 0.968657C1.42078 0.583302 1.87678 0.390625 2.40343 0.390625C2.93008 0.390625 3.38608 0.583302 3.77144 0.968657L15.6018 12.8376C15.9101 13.1459 16.1413 13.4927 16.2955 13.878C16.4496 14.2634 16.5267 14.6487 16.5267 15.0341C16.5267 15.4194 16.4496 15.8048 16.2955 16.1902C16.1413 16.5755 15.9101 16.9223 15.6018 17.2306L3.7329 29.0995C3.34755 29.4849 2.89797 29.6711 2.38416 29.6583C1.87036 29.6455 1.42078 29.4464 1.03542 29.061C0.650067 28.6756 0.457389 28.2196 0.457389 27.693C0.457389 27.1663 0.650067 26.7103 1.03542 26.325L12.3263 15.0341Z"
          fill="white"
        />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick, className }) => (
    <div className="arrows left" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="31"
        viewBox="0 0 17 31"
        fill="none"
      >
        <path
          d="M4.62176 15.4094L16.0602 3.97095C16.4493 3.58188 16.6373 3.12149 16.6244 2.58977C16.6114 2.05805 16.4104 1.59766 16.0213 1.2086C15.6323 0.819532 15.1719 0.625 14.6401 0.625C14.1084 0.625 13.648 0.819532 13.259 1.2086L1.31472 13.1917C1.00347 13.503 0.770035 13.8532 0.61441 14.2422C0.458784 14.6313 0.380972 15.0203 0.380972 15.4094C0.380972 15.7985 0.458784 16.1875 0.61441 16.5766C0.770035 16.9657 1.00347 17.3158 1.31472 17.6271L13.2979 29.6102C13.6869 29.9993 14.1409 30.1873 14.6596 30.1744C15.1784 30.1614 15.6323 29.9604 16.0213 29.5713C16.4104 29.1823 16.6049 28.7219 16.6049 28.1901C16.6049 27.6584 16.4104 27.198 16.0213 26.809L4.62176 15.4094Z"
          fill="white"
        />
      </svg>
    </div>
  );

  const FullView = () => (
    <div className={`full-view ${active ? "active" : ""}`}>
      <svg
        className="close-btn"
        onClick={() => setActive(false)}
        width="35"
        height="36"
        viewBox="0 0 35 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.2871 35.3319C26.8345 35.3319 34.5742 27.5922 34.5742 18.0449C34.5742 8.49749 26.8345 0.757812 17.2871 0.757812C7.73973 0.757812 0 8.49749 0 18.0449C0 27.5922 7.73973 35.3319 17.2871 35.3319Z"
          fill="white"
        />
        <path
          d="M22.4766 13.6758L12.4766 23.6758"
          stroke="#A8AAAE"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.4766 13.6758L12.4766 23.6758"
          stroke="black"
          stroke-opacity="0.25"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.4766 13.6758L22.4766 23.6758"
          stroke="#A8AAAE"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.4766 13.6758L22.4766 23.6758"
          stroke="black"
          stroke-opacity="0.25"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div className="d-flex justify-content-center align-items-center gap-3 h-content">
        <div className="h-100 w-100">
          <p>{itemDetail?.firstText}</p>
          <div
            className="sub-content"
            dangerouslySetInnerHTML={{ __html: itemDetail?.fullText }}
          ></div>
        </div>
        <div className="h-100 d-none d-lg-flex">
          <img src={itemDetail?.image} alt="" className="w-90 m-auto" />
        </div>
      </div>
      <Button className="white slider w-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="mb-1 me-2"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.83325 3.33301V16.6663L16.6666 9.99967L5.83325 3.33301Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>{" "}
        How it works
      </Button>
    </div>
  );

  const handleClickImg = (item) => {
    setActive(true);
    setItemDetail(item);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <CardSlider>
      <FullView />
      <Slider {...settings}>
        {data.map((item) => (
          <div
            className={`cardSlider ${item.id}`}
            key={item.id}
            onMouseEnter={() =>
              window.innerWidth <= 768 && setExpanded(item.id)
            }
            onMouseLeave={() => window.innerWidth <= 768 && setExpanded(null)}
          >
            <img src={item.image} alt="slider1" />
            <div
              className="content"
              onMouseEnter={() => setExpanded(item.id)}
              onMouseLeave={() => setExpanded(null)}
            >
              <p>{item.firstText}</p>
              <AnimatePresence initial={false}>
                {expanded === item.id ? (
                  <motion.p
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    className="sub-content"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.1, delay: 0 }}
                    style={{ overflow: "hidden" }}
                  >
                    {item.shortText}
                  </motion.p>
                ) : (
                  "a"
                )}
              </AnimatePresence>
              {/* <div className="sub-content">{item.shortText}</div> */}
              <div className="d-flex gap-1 gap-md-3 mt-3">
                <Button className="white slider w-100 ms-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="mb-1 me-2"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.83325 3.33301V16.6663L16.6666 9.99967L5.83325 3.33301Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  How it works
                </Button>
                <Button
                  className="white slider w-100 me-auto"
                  onClick={() => handleClickImg(item)}
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M7.25 5.29297L11.75 9.79297L7.25 14.293"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </CardSlider>
  );
}
