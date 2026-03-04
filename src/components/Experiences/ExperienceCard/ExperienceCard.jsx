import React from "react";
import { ExperienceList } from "../../../data/ExperienceData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  AchievementsList,
} from "./ExperienceCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function ExperienceCard() {
  return (
    <>
      {ExperienceList.map((experience, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={experience.img} alt={experience.company} />
            </CardLeft>
            <CardRight>
              <h4>{experience.title}</h4>
              {experience.company_url && experience.company_url.length > 0 ? (
                <h5>
                  <a 
                    href={experience.company_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#39baec', textDecoration: 'none' }}
                  >
                    {experience.company}
                  </a>
                </h5>
              ) : (
                <h5>{experience.company}</h5>
              )}
              <div className="experience-meta">
                {experience.duration} • {experience.location}
              </div>
              <p>{experience.description}</p>
              
              {experience.achievements && experience.achievements.length > 0 && (
                <AchievementsList>
                  {experience.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </AchievementsList>
              )}
              
              <TechCardContainer>
                {experience.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ExperienceCard; 