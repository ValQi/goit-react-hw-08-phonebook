import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Auth = styled(NavLink)`

  display: inline-block;
  text-decoration: none;
  padding: 25px;
  font-weight: 1000;
  color: #409bb2;
  font-size: 25px;

  &:hover {
    color: #154354;
  }
  &.active {
    color: #154354;
  }
`;
