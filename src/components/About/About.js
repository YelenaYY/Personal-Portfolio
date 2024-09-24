import { Analytics } from '@vercel/analytics/react';
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
    <ContactWrapper id="about">
      <Analytics />
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
            Hello! My name is <strong>Yelena(Yue) Yu</strong>. 
            I'm originally from China and have been living in the United States for the past eight years. 
            I'm currently pursuing a Master’s degree in Computer Science at Northeastern University. 
            This is my third semester in Northeastern University and I am studying Could computing. 
            I’ve learnt programming languages including Python, Java, C++, C, JavaScript and R. I studied in Applied Financial Mathematics at Pepperdine University, 
            and also got a Bachelor’s degree in Accounting at Southwest University of Science and Technology in China. 
            I also hold an MBA degree with a focus on Information Technology from William Jessup University.
            From my prior working experiences, I gained valuable experience through various positions in differenct industies, which greatly enhanced my work ethic, communication skills, and adaptability.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My studies at Pepperdine University in Financial Mathematics, my MBA studies with a focus on Information Technology 
            and my robust passion in problem-solving and logical thinking
            cultivated my interest in studying Software Engineering & Computer Science and pursuing a career in the technology industry.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Two areas that particularly interests me are cloud computing and natural language processing.
              Currently studying in AWS Cloud Architecting and Natural Language Processing with Transformers further convinced me in 
              continuing exploring exciting projects in the future.
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
  );
}

export default About;
