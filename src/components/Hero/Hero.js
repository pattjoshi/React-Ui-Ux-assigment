import React from "react";
import { Button, Flex, Image, H1, Para } from "./HeroStyled";

import HeroImg from "../../img/HeroImg.png";

const Hero = () => {
  return (
    <>
      <Flex>
        <div>
          <H1>Let's create something great togher</H1>

          <Para>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            deserunt, ipsa eligendi tempore amet non sint, molestias similique
            commodi,
          </Para>
          <Button>Let's Talk</Button>
        </div>
        <Image src={HeroImg} alt="hero" />
      </Flex>
    </>
  );
};

export default Hero;
