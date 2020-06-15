import { Fragment, useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Grid } from "@material-ui/core";
import Router from "next/router";
import { useFetchUser } from "../../hooks/user";
import { useRouter } from "next/router";
import { useFetchFlow } from "../../hooks/flow";
import fetch from "isomorphic-fetch";
import dynamic from "next/dynamic";

const BPMNContainer = dynamic(
  () => import("../../components/bpmn/bpmn-container"),
  {
    ssr: false,
  }
);

// import ProjectItem from "../../components/project-item";

export default function (props) {
  const { user, userLoading } = useFetchUser();
  const router = useRouter();
  const { flowid } = router.query;
  const { flowFromAPI, flowLoading } = useFetchFlow(user, flowid);
  // console.log(flowFromAPI);

  const [flow, setFlow] = useState(flowFromAPI);

  useEffect(() => {
    setFlow(flowFromAPI);
  }, [flowFromAPI]);

  return (
    <Fragment>
      <Layout gated={true} user={user} userLoading={userLoading}>
        <div>
          <h2>{flowFromAPI ? flowFromAPI.name : ""}</h2>
        </div>

        {!flowLoading && <BPMNContainer flow={flowFromAPI}></BPMNContainer>}
        {flowLoading && <div>Loading</div>}
      </Layout>
    </Fragment>
  );
}
