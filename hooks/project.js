import React, { useState, useEffect } from "react";

import fetch from "isomorphic-fetch";

let projects;

const fetchProjects = async (user, companyID) => {
  const res = await fetch("/api/get-projects", {
    method: "POST",
    body: JSON.stringify({
      user_sub: user.sub,
      company_id: companyID,
    }),
  });
  projects = res.ok ? await res.json() : null;
  return projects;
};

export const useFetchProjects = (user, companyId) => {
  const [data, setProjects] = useState({
    projectsFromAPI: projects || null,
    projectsLoading: true,
  });
  useEffect(() => {
    if (!user) {
      return;
    }
    let isMounted = true;
    fetchProjects(user, companyId).then((projectData) => {
      if (isMounted) {
        console.log(projectData);
        if (
          projectData &&
          projectData.message == "User Company does't have projects"
        ) {
          setProjects({ projectsFromAPI: [], projectsLoading: false });
        } else {
          setProjects({ projectsFromAPI: projectData, projectsLoading: false });
        }
      }
    });
  }, [user]);
  return data;
};
