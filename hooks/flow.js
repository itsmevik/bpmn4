import React, { useState, useEffect } from "react";

import fetch from "isomorphic-fetch";

let flows;
let flow;

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
  console.log("flows", res);

  flows = res.ok ? await res.json() : null;
  return flows;
};

const fetchFlow = async (user, flowId) => {
  const res = await fetch("/laravel/get-flow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_sub: user.sub,
      f_id: flowId,
    }),
  });
  //console.log("fetchflow", res);

  flow = res.ok ? await res.json() : null;
  console.log("response", flow.response.flow_file);

  return flow;
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
        console.log(flowData);

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
