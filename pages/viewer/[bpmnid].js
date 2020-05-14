import { Fragment } from "react";
import Layout from "../../components/layout";
import { Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Viewer = dynamic(() => import("../../components/bpmn/bpmn-viewer"), {
  ssr: false,
});
export default function (props) {
  const router = useRouter();
  const { bpmnid } = router.query;

  return <Viewer></Viewer>;
}
