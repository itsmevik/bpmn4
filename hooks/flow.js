import React, { useState, useEffect } from "react";

import fetch from "isomorphic-fetch";

let flows;

const fetchFlows = async (projectId, user) => {
  const res = await fetch("/laravel/get-flows", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      project_id: projectId,
      user_sub: user.sub,
    }),
  });
  flows = res.ok ? await res.json() : null;
  return flows;
};

export const useFetchFlows = (projectId, user) => {
  const [data, setFlows] = useState({
    flowsFromAPI: flows || null,
    flowsLoading: true,
  });
  useEffect(() => {
    console.log(user, projectId);
    if (!projectId || !user) {
      return;
    }
    let isMounted = true;
    fetchFlows(projectId, user).then((flowData) => {
      if (isMounted) {
        console.log("flowData");
        if (flowData && flowData.message == "User Company does't have flows") {
          setFlows({ flowsFromAPI: [], flowsLoading: false });
        } else {
          setFlows({ flowsFromAPI: flowData.response, flowsLoading: false });
          console.log("flows", flowData);
        }
      }
    });
  }, [user]);
  return data;
};
