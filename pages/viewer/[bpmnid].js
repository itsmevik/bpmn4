import { Fragment } from "react";
import Layout from "../../components/layout";
import { Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useFetchGetPublicFlow } from "../../hooks/flow";
import Router from "next/router";
import { useFetchUser } from "../../hooks/user";

const Viewer = dynamic(() => import("../../components/bpmn/bpmn-viewer"), {
  ssr: false,
});
export default function (props) {
  const router = useRouter();
  //const { flowid, bpmnid } = router.query;
  const { bpmnid } = router.query;
  console.log(router);

  const { getPublicFlowFromAPI, getPublicFlowLoading } = useFetchGetPublicFlow(
    bpmnid
  );
  console.log(getPublicFlowFromAPI, bpmnid);

  return (
    <Layout fullWidth={true}>
      <div>
        <h2>{getPublicFlowFromAPI ? getPublicFlowFromAPI.name : ""}</h2>
      </div>
      <Viewer
        flowFile={getPublicFlowFromAPI && getPublicFlowFromAPI.flow_file}
        private={getPublicFlowFromAPI && getPublicFlowFromAPI.private}
      ></Viewer>
    </Layout>
  );
}
