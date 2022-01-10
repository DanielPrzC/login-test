import React from "react";
import { LinkButton, StyledButton } from "./styles";

const Button = ({ link, type, onClick, cta, children }) => {
  return link ? (
    <LinkButton cta={cta} to={link}>
      {children}
    </LinkButton>
  ) : (
    <StyledButton cta={cta} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
