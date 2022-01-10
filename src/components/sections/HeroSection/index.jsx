import React from "react";
import { Section, TextWrapper, Title, Subtitle } from "./styles";
import Button from "../../Button";

const HeroSection = () => {
  return (
    <Section>
      <TextWrapper>
        <Subtitle>Welcome to</Subtitle>
        <Title>
          the <span>Test</span>!
        </Title>
      </TextWrapper>
      <Button cta link="/login">
        Log In
      </Button>
    </Section>
  );
};

export default HeroSection;
