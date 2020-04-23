import React, { useState, useEffect } from 'react';

import fetch from 'isomorphic-fetch';

let projects;

const fetchProjects = async (user, companyID) => {
  const res = await fetch('/api/get-projects', {
    method: 'POST',
    body: JSON.stringify({
      user_sub: user.sub
    })
  });
  projects = res.ok ? await res.json() : null;
  return projects;
};

export const useFetchProjects = (user, companyId) => {
  const [data, setProjects] = useState({
    projectsFromAPI: projects || null,
    projects
  });
  useEffect(() => {
    if (!user) {
      return;
    }
    let isMounted = true;
    fetchProjects(user, companyId).then(projectData => {});
  });
};
