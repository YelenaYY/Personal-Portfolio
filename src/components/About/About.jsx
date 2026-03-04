import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <div id="about">
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#39baec"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ContactWrapper>
        <div className="Container">
          <div className="SectionTitle">About Me</div>
          <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/ballet-girl.svg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
            <div className="AboutBio">
              <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Yelena Yu</strong>. 
              I'm pursuing a Master's degree in Computer Science at Northeastern University, 
              where I am in my last semester and fully dedicated to research.

              I am proficient in various programming languages, including Python, Java, C++, C, JavaScript, and R. 
              Previously, I studied Applied Financial Mathematics at Pepperdine University, where I developed mathematical foundations and analytical skills that complement my technical expertise.

              My focus is on machine learning and data mining, with a keen interest in its applications within healthcare. 
              </ScrollAnimation>

              <br /><br />
              
              <ScrollAnimation animateIn="fadeInLeft">
              Since May 2024, I have been interning at Arcadia.io as a Data Scientist. 
              In this role, I automated data processing workflows in AWS RedShift, 
              which reduced manual data handling time by 30% using reusable SQL queries. 
              I leveraged PySpark for statistical analysis and employed visualization frameworks. 
              My work also involves developing machine learning algorithms with scikit-learn in AWS SageMaker, 
              where I have enhanced the accuracy of re-admission predictions by 20% through advanced feature engineering and model evaluation.
              </ScrollAnimation>

              <br /><br />

              <ScrollAnimation animateIn="fadeInLeft">
              In addition to my internship, I am an open-source contributor to the SKTIME Python ML and AI 
              framework for time series forecasting. 
              As part of the Summer Mentorship Program, I developed an outlier detection algorithm using innovative 
              techniques like a sliding window approach and KNN algorithms, based on latest research publications. 
              I also maintain estimator wrappers for the SKTIME interface and collaborate with 
              mentors to enhance the library's performance and usability.
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInLeft">
                <div className="tagline2">
                  I have become confident using the following technologies:
                </div>
              </ScrollAnimation>
              

              <Technologies>
                {stackList.map((stack, index) => (
                  <ScrollAnimation animateIn="fadeInLeft" key={index}>
                    <Tech key={index} className="tech">
                      <TechImg src={stack.img} alt={stack.name} />
                      <TechName>{stack.name}</TechName>
                    </Tech>
                  </ScrollAnimation>
                ))}
              </Technologies>
            </div>

          </div>
        </div>
      </ContactWrapper>
    </div>
  );
}

export default About;
