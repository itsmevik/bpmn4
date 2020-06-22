import React, { useState } from "react";

import fetch from "isomorphic-fetch";

let userState, userInfo;

const User = React.createContext({ user: null, userLoading: false });

export const fetchUser = async () => {
  if (userState != undefined) {
    return userState;
  }
  const res = await fetch("/api/me");
  userState = res.ok ? await res.json() : null;
  if (userState != null && userInfo == null) {
    userInfo = await fetch("/api/adduser", {
      method: "POST",
      body: JSON.stringify({
        user_sub: userState.sub,
        name: userState.name,
        user_photo: userState.picture,
        email: userState.email,
      }),
    });
  }
  return userState;
};

export const UserProvider = ({ value, children }) => {
  const { user } = value;
  React.useEffect(() => {
    if (!userState && user) {
      userState = user;
    }
  }, []);
  return <User.Provider value={value}>{children}</User.Provider>;
};

export const useUser = () => React.useContext(User);

export const useFetchUser = () => {
  const [data, setUser] = React.useState({
    user: userState || null,
    userLoading: userState === undefined,
  });

  React.useEffect(() => {
    if (userState !== undefined) {
      return;
    }
    let isMounted = true;

    fetchUser().then((user) => {
      if (isMounted) {
        setUser({ user, userLoading: false });
      }
    });

    return () => {
      isMounted = false;
    };
  }, [userState]);
  return data;
};
