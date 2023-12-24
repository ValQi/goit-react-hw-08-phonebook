import { useAuth } from 'hooks';
import { Head } from './AppBar.styled';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Head>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Head>
  );
};