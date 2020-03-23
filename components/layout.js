import Header from './header';
import { Container, Typography } from '@material-ui/core';
import auth0 from '../utils/auth0';
import { UserProvider } from '../hooks/user';

const Layout = ({ user, loading = false, children, fullWidth }) => {
  return (
    <UserProvider value={{ user, loading }}>
      <div>
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
        <Header></Header>
        <div>{fullWidth ? children : <Container>{children}</Container>}</div>
      </div>
    </UserProvider>
  );
};

export default Layout;
