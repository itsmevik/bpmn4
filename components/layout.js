import Header from './header';
import { Container, Typography } from '@material-ui/core';
import auth0 from '../utils/auth0';
import { UserProvider, useFetchUser } from '../hooks/user';

const Layout = ({ gated = false, children = null, fullWidth }) => {
  const { user, loading } = useFetchUser();
  if (gated) {
    if (!loading && !user) {
      return this.props.url.push('/');
    }
  }
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
