import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hello World!',
                  // <br/>,
                  'I\'m Yelena',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A Software Engineer,',
                    1000,
                    'A Data Scientist,',
                    1000,
                    'And a Computer Science Student at Northeastern University.',
                    // 'I design and code beautifully simple things, and I love what I do.',
                    1000,
                    'I\'m a problem solver,',
                    1000,
                    'And an innovative thinker.',
                    1000,
                    'I\'m a dog lover,',
                    1000,
                    'And a cat lover.',
                    1000,
                    '(Ok... I\'m actually both....)',
                    1000,
                    'I\'m a ballet lover,',
                    1000,
                    'A snowboarding lover,',
                    1000,
                    'And an archery lover.',
                    1000,
                    'You can scroll down or click \"About\" to learn more about me.',
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    'You can also scroll down or click \"Project\" to see my projects.',
                    1000,
                    'Looks like you\'re still here...',
                    1000,
                    'I\'m uh...',
                    1000,
                    'You\'re uh... still here?',
                    1000,
                    'Well, I\'m gonna restart the loop now...',
                    1000,
                    'See ya soon! :)',
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="cartoonyy.jpg"
                alt="YY-Picture"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
