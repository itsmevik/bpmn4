import React, { useState } from "react";

import fetch from "isomorphic-fetch";

let companies;
let company;

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
