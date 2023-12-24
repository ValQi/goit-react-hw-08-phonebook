import styled from 'styled-components';
import { Form } from 'formik';

export const Formikk = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 25px;
  outline: 1px solid grey;
  border-radius: 20px;
  background-color: #97cedd;
  margin: 0 auto;
  label {
    display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 15px;
  }
  input {
    padding: 6px 13px;
  border-radius: 40px;
  font: inherit;
  }
  button {
    width: 79px;
  padding: 3px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  box-shadow: 0 1px 7px grey;
  background-color: #a2cae2;
  margin-right: 4px;
  box-shadow: 0 1px 7px grey;

  &:hover,
  &:focus {
    background-color: #6787a1;
    color: #bde6e6;
    transform: scale(1.1);
    }
  }
`;