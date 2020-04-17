import React, { useState } from 'react';

import fetch from 'isomorphic-fetch';

let companies;

const fetchCompanies = async user => {
  const res = await fetch('/api/get-companies', {
    method: 'POST',
    body: JSON.stringify({
      user_sub: user.sub
    })
  });
  companies = res.ok ? await res.json() : null;
  return companies;
};

export const useFetchCompanies = user => {
  const [data, setCompanies] = React.useState({
    companies: companies || null,
    companiesLoading: companies == undefined || user == undefined
  });
  React.useEffect(() => {
    if (!user || companies !== undefined) {
      return;
    }
    let isMounted = true;
    fetchCompanies(user).then(companyData => {
      if (isMounted) {
        setCompanies({
          companies: companyData,
          companiesLoading: false,
          setCompanies: setCompanies
        });
      }
    });
    return () => {
      isMounted = false;
    };
  }, [companies, user]);
  return data;
};
