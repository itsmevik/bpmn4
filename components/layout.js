import Header from './header';
import { Container, Typography } from '@material-ui/core';

export default function Layout(props) {
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <Header></Header>
      <div>
        {props.fullWidth ? (
          props.children
        ) : (
          <Container>{props.children}</Container>
        )}
      </div>
    </div>
  );
}
