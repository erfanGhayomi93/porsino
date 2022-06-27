import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import { Box, Container } from "@mui/material";
import clsx from "clsx";
import DrawerReleaseLaterComponent from "../../components/DrawerReleaseLater";
import Step1Component from "../../components/Step1";
import Step2Component from "../../components/Step2";
import Step3Component from "../../components/Step3";
import StepperComponent from "../../components/Stepper";
import useNewSurvayController, { NewSurvayProps } from "./NewSurvay.controller";
import styles from "./NewSurvay.module.scss";

export default function NewSurvayPage(props: NewSurvayProps) {
  const {
    step,
    setStep,
    isNotice,
    setisNotice,
    isShowCommon,
    setisShowCommon,
    isreleaseLater,
    setisreleaseLater,
  } = useNewSurvayController(props);

  return (
    <div>
      <AppHeaderComponent title="ساخت نظرسنجی" />
      <Container maxWidth="lg">
        <div className={styles.root}>
          <div className={styles.content}>
            {isShowCommon && <StepperComponent {...{ step }} />}

            {step === 1 && <Step1Component />}
            {step === 2 && (
              <Step2Component {...{ isNotice, setisNotice, setisShowCommon }} />
            )}
            {step === 3 && <Step3Component {...{}} />}
          </div>

          {isShowCommon && (
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

              {step !== 3 ? (
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
              ) : (
                <>
                  <div className={clsx(styles.nextButton, styles.button)}>
                    <ButtonCustomComponent
                      label="بعدا انتشار می‌دهم"
                      color="inherit"
                      variant="outlined"
                      onClick={() => setisreleaseLater(true)}
                    />
                  </div>
                  <DrawerReleaseLaterComponent
                    {...{ isreleaseLater, setisreleaseLater }}
                  />
                </>
              )}
            </Box>
          )}
        </div>
      </Container>
    </div>
  );
}
