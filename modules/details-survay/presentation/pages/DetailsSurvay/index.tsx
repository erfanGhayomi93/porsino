import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import { Box } from "@mui/material";
import clsx from "clsx";
import FinishComponent from "../../components/Finish";
import HeaderQuestionComponent from "../../components/HeaderQuestion";
import StartComponent from "../../components/Start";
import useDetailsSurvayController, {
  DetailsSurvayProps,
  statusPageType,
} from "./DetailsSurvay.controller";
import styles from "./DetailsSurvay.module.scss";

export default function DetailsSurvayPage(props: DetailsSurvayProps) {
  const {
    formData,
    priority,
    typeComponents,
    setPriority,
    statusPage,
    setstatusPage,
  } = useDetailsSurvayController(props);

  return (
    <div className={styles.root}>
      {statusPage === statusPageType.start && (
        <StartComponent {...{ setstatusPage }} />
      )}

      {statusPage === statusPageType.during && (
        <>
          <AppHeaderComponent title="دسته بندی کاربران ۱" />
          <HeaderQuestionComponent
            allQuestion={formData.length}
            numberQuestion={priority}
          />

          {formData
            .filter((item: any) => item.priority === priority)
            .map(
              (item: any, ind) =>
                typeComponents({ key: ind, data: item.data })[item.type]
            )}

          <Box className={styles.buttons}>
            {priority !== 1 && (
              <div className={clsx(styles.prevButton, styles.button)}>
                <ButtonCustomComponent
                  label="قبلی"
                  color="inherit"
                  variant="outlined"
                  onClick={() => {
                    setPriority((prev) => prev - 1);
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
                  if (priority + 1 > formData.length) {
                    setstatusPage(statusPageType.finish);
                  } else {
                    setPriority((prev) => prev + 1);
                  }
                }}
              />
            </div>
          </Box>
        </>
      )}

      {statusPage === statusPageType.finish && <FinishComponent />}
    </div>
  );
}
