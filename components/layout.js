import Header from "./header";
import { Container, Typography } from "@material-ui/core";
import auth0 from "../utils/auth0";
import { UserProvider, useFetchUser } from "../hooks/user";
import Router from "next/router";

const Layout = ({
  gated = false,
  children = null,
  fullWidth,
  user,
  userLoading,
  ...props
}) => {
  if (gated) {
    if (!userLoading && !user) {
      if (typeof window === "undefined") {
      } else {
        Router.push("/");
      }
    }
  }
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <Header user={user}></Header>
      <div>{fullWidth ? children : <Container>{children}</Container>}</div>
    </div>
  );
};

export default Layout;
