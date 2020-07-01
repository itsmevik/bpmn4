import { Fragment, useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Grid } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Router from "next/router";
import { useFetchUser } from "../../hooks/user";
import { useRouter } from "next/router";
import { useFetchFlow } from "../../hooks/flow";
import { useFetchPublicFlow } from "../../hooks/flow";

import fetch from "isomorphic-fetch";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BPMNContainer = dynamic(
  () => import("../../components/bpmn/bpmn-container"),
  {
    ssr: false,
  }
);
const Viewer = dynamic(() => import("../../components/bpmn/bpmn-viewer"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  root: {
    // "& > *": {
    //   // margin: theme.spacing(),
    // },
    paddingLeft: 10,
  },
}));

// import ProjectItem from "../../components/project-item";

export default function (props) {
  const classes = useStyles();

  const { user, userLoading } = useFetchUser();
  const router = useRouter();
  const { flowid } = router.query;

  const { flowFromAPI, flowLoading } = useFetchFlow(user, flowid);
  // const { publicFlowFromAPI, publicFlowLoading } = useFetchPublicFlow(flowid);

  //console.log(publicFlowFromAPI);

  console.log(flowFromAPI);

  const [flow, setFlow] = useState(flowFromAPI);
  //const [flows, setFlows] = useState(publicFlowFromAPI);

  useEffect(() => {
    setFlow(flowFromAPI);
  }, [flowFromAPI]);

  // useEffect(() => {
  //   setFlows(publicFlowFromAPI);
  // }, [publicFlowFromAPI]);

  // const saveBpmn = () => {
  //   console.log("saved");
  // };

  const companyClick = () => {
    Router.push(`/company/${flowFromAPI.company_id}`);
  };

  const projectClick = () => {
    Router.push(`/project/${flowFromAPI.project_id}`);
  };

  return (
    <Fragment>
      <Layout gated={true} user={user} userLoading={userLoading}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/dashboard">
            Home
          </Link>
          <Link color="inherit" href="" onClick={companyClick}>
            {flowFromAPI ? flowFromAPI.company_name : ""}
          </Link>
          <Link color="textPrimary" href="" onClick={projectClick}>
            {flowFromAPI ? flowFromAPI.name : ""}
          </Link>
        </Breadcrumbs>
        <div>
          <h2>{flowFromAPI ? flowFromAPI.name : ""}</h2>
        </div>
        <div className={classes.root}>
          {/* <Button
            variant="contained"
            color="primary"
            onClick={() => saveBpmn()}
          >
            Save
          </Button> */}
        </div>

        {!flowLoading && <BPMNContainer flow={flowFromAPI}></BPMNContainer>}
        {flowLoading && <div>Loading</div>}
      </Layout>
    </Fragment>
  );
}
