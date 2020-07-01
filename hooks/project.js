import React, { useState, useEffect } from "react";

import fetch from "isomorphic-fetch";

let projects;
let project;

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

const fetchProject = async (user, projectId) => {
  const res = await fetch("/laravel/projects/get-project", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_sub: user.sub,
      project_id: projectId,
    }),
  });

  project = res.ok ? await res.json() : null;

  return project;
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

export const useFetchProject = (user, projectId) => {
  const [data, setProject] = React.useState({
    projectFromAPI: project || null,
    projectLoading: project == undefined || user == undefined,
  });
  React.useEffect(() => {
    if (!user) {
      return;
    }
    let isMounted = true;
    fetchProject(user, projectId).then((projectData) => {
      if (isMounted) {
        if (
          projectData &&
          projectData.message == "User Company does't have projects"
        ) {
          setProject({
            projectFromAPI: [],
            projectLoading: false,
          });
        } else {
          setProject({
            projectFromAPI: projectData,
            projectLoading: false,
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
