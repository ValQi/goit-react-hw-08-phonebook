import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const AuthLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 800;
  color: #409bb2;
  font-size: 20px;

  &:hover {
    color: #154354;
  }
  &.active {
    color: #154354;
  }
`;
