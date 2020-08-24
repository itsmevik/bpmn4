import { Fragment, useState, useEffect } from "react";
import Layout from "../../components/layout";
import { Grid } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import LinkIcon from "@material-ui/icons/Link";
import Router from "next/router";
import { useFetchUser } from "../../hooks/user";
import { useRouter } from "next/router";
import {
  useFetchFlow,
  useFetchPublicFlow,
  useFetchGetPublicFlow,
} from "../../hooks/flow";
import fetch from "isomorphic-fetch";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AlertDialogSlide from "../../components/dialogs/publish-flow";
import ShareConfirmation from "../../components/dialogs/share-conformation";
import SaveConfirmation from "../../components/dialogs/save-confirmation";
import cogoToast from "cogo-toast";
import SaveIcon from "@material-ui/icons/Save";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import StopScreenShareIcon from "@material-ui/icons/StopScreenShare";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import IconButton from "@material-ui/core/IconButton";
import FileSaver, { saveAs } from "file-saver";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

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
    // marginLeft: 1,
    float: "right",
    top: 64,
    right: 54,
    position: "absolute",
    zIndex: 1,
  },
  btnSave: {},
}));

// import ProjectItem from "../../components/project-item";

export default function (props) {
  const fetchPublicFlow = async (flowId, user, publish) => {
    //console.log(publish);

    const res = await fetch("/laravel/flows/publish-flow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        f_id: flowId,
        user_sub: user.sub,
        publish: !publish ? publish : 1,
      }),
    });

    const publishFlow = res.ok ? await res.json() : null;
    // console.log(publishFlow);
    setFlow(publishFlow.response);
    return publishFlow;
  };

  const updateFlow = async (updatedFlow) => {
    var formData = new FormData();
    var file = new File([updatedFlow], ".xml", {
      type: "text/plain",
    });
    formData.append("f_id", flowid);
    formData.append("name", flow ? flow.name : "");
    formData.append("flow_file", file);
    formData.append("user_sub", user.sub);
    const flowInfo = await fetch("/laravel/flows/update-flow", {
      method: "POST",
      body: formData,
    });

    if (flowInfo.ok) {
      var newFlowInfo = await flowInfo.json();
      setFlow(newFlowInfo.response);
      //console.log(newFlowInfo);
    }
  };

  const openSaveConfirmation = (updatedFlow) => {
    //console.log(updatedFlow);
    updateFlow(updatedFlow);
    let newUpdatedFlow = flow;
    newUpdatedFlow.flow_file = updatedFlow;
    // console.log(newUpdatedFlow);
    //setFlow(newFlow);
    setupdateFlow(newUpdatedFlow);
    //console.log(newFlow.flow_file);

    cogoToast.success("You saved Successfully!", { position: "bottom-right" });

    //setSaveConfirmationDialogOpened(true);
  };

  const downloadBpmn = () => {
    var blob = new Blob([newFlow ? newFlow.flow_file : flow.flow_file], {
      type: "text/xml",
    });
    FileSaver.saveAs(blob, flow.name + ".bpmn");
    // console.log(newFlow.flow_file);
  };

  const classes = useStyles();

  const { user, userLoading } = useFetchUser();
  const router = useRouter();
  const { flowid } = router.query;

  const { flowFromAPI, flowLoading } = useFetchFlow(user, flowid);

  const [shareDialogOpened, setShareDialogOpened] = useState(false);
  const [saveDialogOpened, setSaveDialogOpened] = useState(false);
  const [showLinkIcon, setShowLinkIcon] = useState(false);

  const [flow, setFlow] = useState(flowFromAPI);
  const [newFlow, setupdateFlow] = useState(null);

  let publicFlowData = {};

  const [publish, setpublish] = useState(false);
  //const [flows, setFlows] = useState(publicFlowFromAPI);
  // console.log(publish);
  const [
    shareConfirmationDialogOpened,
    setShareConfirmationDialogOpened,
  ] = useState(false);

  const [
    saveConfirmationDialogOpened,
    setSaveConfirmationDialogOpened,
  ] = useState(false);

  useEffect(() => {
    setFlow(flowFromAPI);

    if (showLinkIcon) {
      setpublish(true);
      // setpublish(publicFlowData);
    }
  }, [flowFromAPI, showLinkIcon]);

  // useEffect(() => {
  //   setFlows(publicFlowFromAPI);
  // }, [publicFlowFromAPI]);
  const [title, setTitle] = useState("SHARE");
  //console.log(publish);

  const handleShareFlowButtonClick = () => {
    //setShareConfirmationDialogOpened(true);
    //console.log("dialogopen");

    if (!flow.publish) {
      setShareDialogOpened(true);

      fetchPublicFlow(flowid, user, 1);

      setShowLinkIcon(true);
    } else {
      // fetchPublicFlow(flowid, user, 0);
      // setShareDialogOpened(false);

      // setShowLinkIcon(false);
      setShareConfirmationDialogOpened(true);
    }
    //setShareConfirmationDialogOpened(false);

    // if (title == "SHARE") {
    //   // setShareDialogOpened(true);
    //   fetchPublicFlow(flowid, user, 1);
    //   //useFetchPublicFlow(flowid, user, 1);

    //   setTitle("UNSHARED");
    //   //setShowLinkIcon(true);
    // } else {
    //   fetchPublicFlow(flowid, user, 0);

    //   //useFetchPublicFlow(flowid, user, 0);

    //   setTitle("SHARE");
    //   setShowLinkIcon(false);
    // }
  };

  // const handleSaveFlowButtonClick = () => {
  //   setSaveConfirmationDialogOpened(true);
  // };
  //console.log(publish);
  const handleLinkButtonClick = () => {
    setShareDialogOpened(true);
  };
  const closeDialogOpened = () => {
    setShareDialogOpened(false);
  };

  // const saveConfirmationDialogConfirm = () => {
  //   console.log("saved");
  //   updateFlow();
  //   setSaveConfirmationDialogOpened(false);
  // };

  // const saveConfirmationDialogCancel = () => {
  //   console.log("cancel");
  //   setSaveConfirmationDialogOpened(false);
  // };

  const shareConfirmationDialogCancel = () => {
    setShareConfirmationDialogOpened(false);
  };

  const shareConfirmationDialogConfirm = () => {
    // if (!flow.publish) {
    //   setShareDialogOpened(true);

    //   fetchPublicFlow(flowid, user, 1);

    //   setShowLinkIcon(true);
    // } else {
    //   fetchPublicFlow(flowid, user, 0);
    //   setShareDialogOpened(true);

    //   setShowLinkIcon(false);
    // }
    fetchPublicFlow(flowid, user, 0);
    setShareDialogOpened(false);

    setShowLinkIcon(false);
    setShareConfirmationDialogOpened(false);

    // console.log("confirm");
  };

  const companyClick = () => {
    Router.push(`/company/${flow.company_id}`);
  };
  const projectClick = () => {
    Router.push(`/project/${flow.project_id}`);
  };

  const flowClick = () => {
    Router.push(`/flow/${flowid}`);
  };
  // console.log(props);
  let viewerLink = null;
  if (props.location) {
    let host = props.location.split("/flow/")[0];
    viewerLink = host + "/viewer/" + flowid;
    //console.log(viewerLink);
  }
  const [isclicked, setIsclicked] = useState(false);

  const [isActive, setActive] = useState(false);
  const zoomCanvas = () => {
    setActive(!isActive);
    if (!isActive) {
      openZoomCanvas();
    } else if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      (document.mozFullScreenElement && isActive)
    ) {
      // can use exitFullscreen
      exitZoomCanvas();
    }
    {
      //exitZoomCanvas();
    }
  };

  const openZoomCanvas = () => {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  const exitZoomCanvas = (event) => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (!document.exitFullscreen) {
      return null;
    }
  };

  return (
    <Fragment>
      {!isActive && (
        <>
          <Layout
            gated={true}
            user={user}
            userLoading={userLoading}
            fullWidth={true}
          ></Layout>
        </>
      )}
      {!flowLoading && flow && (
        <div>
          {!isActive && (
            <div>
              <Breadcrumbs
                aria-label="breadcrumb"
                style={{
                  background: "#E1DBDA",
                  padding: "15px",
                }}
              >
                <Link color="inherit" href="/dashboard">
                  Home
                </Link>
                <Link color="inherit" href="" onClick={companyClick}>
                  {flow ? flow.company_name : ""}
                </Link>
                <Link color="inherit" href="" onClick={projectClick}>
                  {flowFromAPI ? flowFromAPI.project_name : ""}
                </Link>
                <Link color="textPrimary" href="" onClick={flowClick}>
                  {flow ? flow.name : ""}
                </Link>
              </Breadcrumbs>

              <div
                style={{
                  textAlign: "center",
                  background: "#E1DBDA",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    paddingBottom: 15,
                  }}
                >
                  {flow ? flow.name : ""}
                </h2>
              </div>
            </div>
          )}

          <div className={classes.root}>
            <IconButton
              onClick={zoomCanvas}
              style={{
                zIndex: 9999,
                height: 50,
                width: 50,
              }}
            >
              {!isActive ? (
                <FullscreenIcon
                  fontSize="large"
                  color="primary"
                ></FullscreenIcon>
              ) : (
                <FullscreenExitIcon
                  fontSize="large"
                  color="primary"
                ></FullscreenExitIcon>
              )}
            </IconButton>
            <IconButton
              style={{
                zIndex: 9999,
                height: 50,
                width: 50,

                //float: "right",
                // marginLeft: 20,
              }}
              // variant="contained"
              // color="primary"
              onClick={() => handleShareFlowButtonClick()}
            >
              {!flow.publish ? (
                <ScreenShareIcon
                  fontSize="large"
                  color="primary"
                ></ScreenShareIcon>
              ) : (
                <StopScreenShareIcon
                  fontSize="large"
                  color="primary"
                ></StopScreenShareIcon>
              )}
            </IconButton>

            {!flow.publish || (
              <IconButton>
                <LinkIcon
                  style={{ zIndex: 9999 }}
                  fontSize="medium"
                  onClick={() => handleLinkButtonClick()}
                ></LinkIcon>
              </IconButton>
            )}

            <IconButton>
              <CloudDownloadIcon
                style={{ zIndex: 9999 }}
                fontSize="medium"
                color="primary"
                onClick={downloadBpmn}
              ></CloudDownloadIcon>
            </IconButton>
          </div>

          <AlertDialogSlide
            open={shareDialogOpened}
            onCancel={closeDialogOpened}
            setClose={(value) => {
              setTimeout(() => {
                setShareDialogOpened(value);
              }, 500);
            }}
            link={viewerLink}
            // onSubmit ={flowShare}
          ></AlertDialogSlide>
          <ShareConfirmation
            message={flow.publish && "Are you sure to Unshare?"}
            open={shareConfirmationDialogOpened}
            onCancel={shareConfirmationDialogCancel}
            onConfirm={shareConfirmationDialogConfirm}
          ></ShareConfirmation>

          {/* <SaveConfirmation
              message={`Are you sure to Save?`}
              open={saveConfirmationDialogOpened}
              //   onCancel={saveConfirmationDialogCancel}
              onConfirm={saveConfirmationDialogConfirm}
            ></SaveConfirmation> */}

          <BPMNContainer
            flow={flowFromAPI}
            onSave={openSaveConfirmation}
            onZoomClick={isActive}
          ></BPMNContainer>
          {/* <button onClick={exitZoomCanvas}>Zoom</button> */}
        </div>
      )}

      {flowLoading && !flow && <div>Loading</div>}
    </Fragment>
  );
}
