import { Auth  } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Auth  to="/register">Register</Auth>
      <Auth  to="/login">Log In</Auth>
    </div>
  );
};