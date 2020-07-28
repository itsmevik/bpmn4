import React, { useState } from "react";

import fetch from "isomorphic-fetch";

let companies;
let company;
let users;

const fetchCompanies = async (user) => {
  const res = await fetch("/api/get-companies", {
    method: "POST",
    body: JSON.stringify({
      user_sub: user.sub,
    }),
  });
  companies = res.ok ? await res.json() : null;
  return companies;
};

const fetchCompany = async (user, companyId) => {
  const res = await fetch("/api/get-company", {
    method: "POST",
    body: JSON.stringify({
      user_sub: user.sub,
      company_id: companyId,
    }),
  });

  company = res.ok ? await res.json() : null;
  return company;
};

const fetchUserAddedToCompany = async (user, companyId) => {
  var formData = new FormData();
  formData.append("user_sub", user.sub);
  formData.append("company_id", companyId);

  const res = await fetch("/laravel/companies/get-company-users", {
    method: "POST",
    body: formData,
  });
  users = res.ok ? await res.json() : null;
  return users;
  console.log("users");
};

export const UseFetchUserAddedToCompany = (user, companyId) => {
  const [data, setUsers] = useState({
    usersFromAPI: users || null,
    usersLoading: true,
  });
  React.useEffect(() => {
    if (!user) {
      return;
    }

    let isMounted = true;
    fetchUserAddedToCompany(user, companyId).then((userData) => {
      if (isMounted) {
        if (userData && userData.message == "no users are added") {
          setUsers({
            usersFromAPI: [],
            usersLoading: false,
          });
        } else {
          setUsers({
            usersFromAPI: userData,
            usersLoading: false,
          });
        }
      }
    });
  }, [user]);
  return data;
};

export const useFetchCompanies = (user) => {
  const [data, setCompanies] = React.useState({
    companiesFromAPI: companies || null,
    companiesLoading: companies == undefined || user == undefined,
  });
  React.useEffect(() => {
    if (!user || companies !== undefined) {
      return;
    }
    let isMounted = true;
    fetchCompanies(user).then((companyData) => {
      if (isMounted) {
        if (companyData.error) {
          setCompanies({
            companiesFromAPI: [],
            companiesLoading: false,
          });
        } else {
          setCompanies({
            companiesFromAPI: companyData,
            companiesLoading: false,
          });
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [companies, user]);
  return data;
};

export const useFetchCompany = (user, companyId) => {
  const [data, setCompany] = React.useState({
    companyFromAPI: company || null,
    companyLoading: company == undefined || user == undefined,
  });
  React.useEffect(() => {
    if (!user || company !== undefined) {
      return;
    }
    let isMounted = true;
    fetchCompany(user, companyId).then((companyData) => {
      if (isMounted) {
        if (companyData.length > 0) {
          setCompany({
            companyFromAPI: companyData[0],
            companyLoading: false,
          });
        } else {
          setCompany({
            companyFromAPI: null,
            companyLoading: false,
          });
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [user]);
  return data;
};
