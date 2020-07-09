import React, { useState, useEffect } from "react";

import fetch from "isomorphic-fetch";

let flows;
let flow;
let publicFlow;
let getPublishFlow;
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

// const fetchPublicFlow = async (flowId, user, publish) => {
//   const res = await fetch("/laravel/flows/publish-flow", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       f_id: flowId,
//       user_sub: user.sub,
//       publish: publish ? publish : 0,
//     }),
//   });

//   publicFlow = res.ok ? await res.json() : null;
//   //console.log(publicFlow);

//   return publicFlow;
// };

const fetchGetPublishFlow = async (flowId) => {
  const res = await fetch("/laravel/flows/get-publish-flow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      f_id: flowId,
    }),
  });
  getPublishFlow = res.ok ? await res.json() : null;
  console.log(getPublishFlow.response);

  return getPublishFlow;
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

// export const useFetchPublicFlow = (flowId, user, publish) => {
//   fetchPublicFlow(flowId, user, publish).then((flowData) => {
//     if (flowData.response) {
//       return flowData.response;
//     } else {
//       return null;
//     }
//   });
// };

export const useFetchGetPublicFlow = (flowId) => {
  const [data, setFlow] = React.useState({
    getPublicFlowFromAPI: getPublishFlow || null,
    getPublicFlowLoading: getPublishFlow == undefined,
  });
  React.useEffect(() => {
    if (getPublishFlow !== undefined) {
      return;
    }
    let isMounted = true;
    console.log(flowId);

    fetchGetPublishFlow(flowId).then((flowData) => {
      if (isMounted) {
        console.log(flowData);
        //console.log(flowData.response);

        if (flowData.response) {
          setFlow({
            getPublicFlowFromAPI: flowData.response,
            getPublicFlowLoading: false,
          });
        } else {
          setFlow({
            getPublicFlowFromAPI: null,
            getPublicFlowLoading: false,
          });
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [flowId]);
  return data;
};
