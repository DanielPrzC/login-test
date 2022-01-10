import styled from "styled-components";

export const Section = styled.section`
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  background: #c8c8c8;
  border-radius: 16px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 370px;
  padding: 1rem;
  border-radius: 10px;
  background-color: #e4e4e4;
  margin: 6px 0;
  font-size: 1rem;
`;

export const ErrorMsg = styled.div`
  width: 370px;
  padding: 1rem;
  margin: 6px 0;
  font-size: 1rem;
  background-color: #f34646;
  color: #ffffff;
  border-radius: 6px;
  text-align: center;
`;
