import { UserDiv, Text, UserBtn } from './UserMenu.styled';

import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";

import { useAuth } from "hooks";



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserDiv>
      <Text>Welcome, {user.name}</Text>
      <UserBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserBtn>
    </UserDiv>
  );
};