import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  line-height: 3rem;
  span {
    color: #068b78;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  line-height: 2.5rem;
`;
