import { UserDiv, Text, UserBtn } from './UserMenu.styled';

import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserDiv>
      <Text>Привіт, {user.name}</Text>
      <UserBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserBtn>
    </UserDiv>
  );
};