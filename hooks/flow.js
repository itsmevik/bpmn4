import React, { useState, useEffect } from "react";

import fetch from "isomorphic-fetch";

let flows;
let flow;

const fetchFlows = async (projectId, user) => {
  const res = await fetch("/laravel/flows/get-flows", {
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

const fetchFlow = async (user, flowId) => {
  const res = await fetch("/laravel/flows/get-flow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_sub: user.sub,
      f_id: flowId,
    }),
  });

  flow = res.ok ? await res.json() : null;

  return flow;
};

export const useFetchFlows = (projectId, user) => {
  const [data, setFlows] = useState({
    flowsFromAPI: flows || null,
    flowsLoading: true,
  });
  useEffect(() => {
    if (!projectId || !user) {
      return;
    }
    let isMounted = true;
    fetchFlows(projectId, user).then((flowData) => {
      if (isMounted) {
        if (flowData && flowData.message == "User Company does't have flows") {
          setFlows({ flowsFromAPI: [], flowsLoading: false });
        } else {
          setFlows({ flowsFromAPI: flowData.response, flowsLoading: false });
        }
      }
    });
  }, [user]);
  return data;
};

export const useFetchFlow = (user, flowId) => {
  const [data, setFlow] = React.useState({
    flowFromAPI: flow || null,
    flowLoading: flow == undefined || user == undefined,
  });
  React.useEffect(() => {
    if (!user || flow !== undefined) {
      return;
    }
    let isMounted = true;
    fetchFlow(user, flowId).then((flowData) => {
      if (isMounted) {
        if (flowData.response) {
          setFlow({
            flowFromAPI: flowData.response,
            flowLoading: false,
          });
        } else {
          setFlow({
            flowFromAPI: null,
            flowLoading: false,
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
