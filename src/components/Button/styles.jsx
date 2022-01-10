import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const LinkButton = styled(Link)`
  padding: 0.5rem 1rem;
  border: 2px solid #068b78;
  border-radius: 6px;
  background: none;
  color: #068b78;
  font-size: 1rem;
  font-weight: semibold;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #068b78;
    color: #ffffff;
  }
  ${({ cta }) =>
    cta &&
    css`
      font-size: 1.5rem;
      padding: 1rem 3rem;
    `}
`;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid #068b78;
  border-radius: 6px;
  background: none;
  color: #068b78;
  font-size: 1rem;
  font-weight: semibold;
  cursor: pointer;
  &:hover {
    background: #068b78;
    color: #ffffff;
  }
  ${({ cta }) =>
    cta &&
    css`
      font-size: 1.5rem;
      padding: 1rem 3rem;
    `}
`;
