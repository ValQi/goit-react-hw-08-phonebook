import styled from "styled-components";

export const ContactLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  p {
    margin-right: 5px;
  }

  button {
    width: 150px;
    cursor: pointer;
    background-color: #8ac2dc;
    border-radius: 5px;
    border: none;
    box-shadow: 0 1px 7px grey;
    &:hover {
        background-color: #12628d;
        color: #aee7e7;
        transform: scale(1.1);
    }
  }
`;

export const ContactsUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 400px;
  outline: 1px solid grey;
  border-radius: 20px;
  background-color: #ccf4f2;
  padding: 10px;
`;
