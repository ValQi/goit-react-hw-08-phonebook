import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  outline: 1px solid grey;  
  border-radius: 20px;
  background-color: #abdfeb;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 4px 12px;
  border-radius: 20px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
 width: 100px;
  padding: 6px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  box-shadow: 0 1px 10px grey;
  background-color: #53a3b1;
  margin-right: 7px;
  box-shadow: 0 2px 5px grey;

  &:hover,
  &:focus {
    background-color: #69afc5;
    color: #b6dce6;
    transform: scale(1.1);
  }
`;