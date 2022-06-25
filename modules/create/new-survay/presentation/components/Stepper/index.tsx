import useStepperController, { StepperProps } from "./Stepper.controller";
import styles from "./Stepper.module.scss";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";

export default function StepperComponent(props: StepperProps) {
  const { step, setStep } = useStepperController(props);

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        // backgroundImage:
        //   "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        // backgroundColor: `${theme.palette.primary.light}`,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: `${theme.palette.primary.light}`,

        // border: `1px solid ${theme.palette.primary.light}`,
        // backgroundImage:
        //   "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "white",
    zIndex: 1,
    color: "#fff",
    width: 48,
    height: 48,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    border: `2px solid #e6e6e6`,
    ...(ownerState.active &&
      {
        // border: `2px solid ${theme.palette.primary.light}`,
        // "&:svg": {
        //   fill: theme.palette.primary.light,
        // },
        //   backgroundImage:
        //     "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        //   boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      }),
    ...(ownerState.completed && {
      border: `2px solid ${theme.palette.primary.light}`,

      // backgroundImage:
      //   "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      // }),
    }),
  }));

  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: (
        <svg className={styles.icon}>
          <use xlinkHref="/sprit.svg#todo-line" />
        </svg>
      ),
      2: (
        <svg className={styles.icon}>
          <use
            xlinkHref={`/sprit.svg#${
              completed ? "questionnaire-line-active" : "questionnaire-line"
            }`}
          />
        </svg>
      ),
      3: (
        <svg className={styles.icon}>
          <use
            xlinkHref={`/sprit.svg#${
              completed ? "share-line-active" : "share-line"
            }`}
          />
        </svg>
      ),
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  return (
    <div className={styles.root}>
      <Stepper
        alternativeLabel
        activeStep={step}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
