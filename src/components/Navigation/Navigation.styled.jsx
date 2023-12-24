import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #10909b;
  font-size: 20px;

  &:hover {
    color: #89b1cf;
  }
  &.active {
    color: #90c0da;
  }
`;