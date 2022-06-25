import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import { Box, Container } from "@mui/material";
import clsx from "clsx";
import Step1Component from "../../components/Step1";
import Step2Component from "../../components/Step2";
import StepperComponent from "../../components/Stepper";
import useNewSurvayController, { NewSurvayProps } from "./NewSurvay.controller";
import styles from "./NewSurvay.module.scss";

export default function NewSurvayPage(props: NewSurvayProps) {
  const { step, setStep } = useNewSurvayController(props);

  return (
    <div>
      <AppHeaderComponent title="ساخت نظرسنجی" />
      <Container maxWidth="lg">
        <div className={styles.root}>
          <div className={styles.content}>
            <StepperComponent {...{ step, setStep }} />

            {step === 1 && <Step1Component setStep={setStep} />}
            {step === 2 && <Step2Component />}
          </div>

          <Box className={styles.buttons}>
            {step !== 1 && (
              <div className={clsx(styles.prevButton, styles.button)}>
                <ButtonCustomComponent
                  label="قبلی"
                  color="inherit"
                  variant="outlined"
                  onClick={() => {
                    setStep((prev) => prev - 1);
                  }}
                />
              </div>
            )}

            <div className={clsx(styles.nextButton, styles.button)}>
              <ButtonCustomComponent
                label="بعدی"
                color="primary"
                variant="contained"
                onClick={() => {
                  // if (step + 1 > formData.length) {
                  //   setstatusPage(statusPageType.finish);
                  // } else {
                  setStep((prev) => prev + 1);
                  // }
                }}
              />
            </div>
          </Box>
        </div>
      </Container>
    </div>
  );
}
