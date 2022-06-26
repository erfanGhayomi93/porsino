import { Box, Typography } from "@mui/material";
import useStep2Controller, { Step2Props } from "./Step2.controller";
import styles from "./Step2.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import DrawerNewQuestionComponent from "../DrawerNewQuestion";

export default function Step2Component(props: Step2Props) {
  const { isNotice, setisNotice, isShowNewQuestion, setisShowNewQuestion } =
    useStep2Controller(props);

  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant="h6">
        طراحی سوال
      </Typography>

      <div className={styles.content}>
        <Box className={styles.box}>
          <AddCircleOutlineIcon className={styles.icon} />

          <Typography variant="body1" component="span">
            ایجاد سوال
          </Typography>
        </Box>

        <DrawerNewQuestionComponent
          {...{ isShowNewQuestion, setisShowNewQuestion }}
        />
      </div>

      {isNotice && (
        <div className={styles.notice}>
          <Typography variant="body1">
            برای استفاده از امکانات پیشرفته طراحی نظرسنجی به نسخه دسکتاپ پرسینو
            مراجعه کنید.
          </Typography>

          <Box display="flex" justifyContent="flex-end">
            <ButtonCustomComponent
              label="متوجه شدم"
              color="primary"
              variant="text"
              className={styles.buttonNot}
              onClick={() => setisNotice(false)}
            />
          </Box>
        </div>
      )}
    </div>
  );
}
