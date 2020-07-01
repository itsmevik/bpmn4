import React, { useState, useEffect } from "react";

import fetch from "isomorphic-fetch";

let flows;
let flow;
let publicFlow;
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

// const fetchPublicFlow = async (flowId) => {
//   const res = await fetch("/laravel/flow/publish", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       f_id: flowId,
//     }),
//   });

//   publicFlow = res.ok ? await res.json() : null;
//   //console.log(flow);

//   return publicFlow;
// };

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

// export const useFetchPublicFlow = (flowId) => {
//   const [data, setFlow] = React.useState({
//     publicFlowFromAPI: publicFlow || null,
//     publicFlowLoading: publicFlow == undefined,
//   });
//   React.useEffect(() => {
//     if (publicFlow !== undefined) {
//       return;
//     }
//     let isMounted = true;
//     fetchPublicFlow(flowId).then((flowData) => {
//       if (isMounted) {
//         // console.log(flowData);
//         console.log(flowData.response);

//         if (flowData.response) {
//           setFlow({
//             publicFlowFromAPI: flowData.response,
//             publicFlowLoading: false,
//           });
//         } else {
//           setFlow({
//             publicFlowFromAPI: null,
//             publicFlowLoading: false,
//           });
//         }
//       }
//     });
//     return () => {
//       isMounted = false;
//     };
//   }, [flowId]);
//   return data;
// };
