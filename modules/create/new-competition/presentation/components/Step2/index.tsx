import { Box, Typography } from "@mui/material";
import useStep2Controller, {
  statusPageType,
  Step2Props,
} from "./Step2.controller";
import styles from "./Step2.module.scss";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import PreviewQuestionsComponent from "@/modules/create/root/presentation/components/PreviewQuestions";
import SingleAnswerComponent from "@/modules/create/root/presentation/components/SingleAnswer";
import CreateQuestionBoxComponent from "../../../../root/presentation/components/CreateQuestionBox";

export default function Step2Component(props: Step2Props) {
  const {
    isNotice,
    setisNotice,
    isShowNewQuestion,
    setisShowNewQuestion,
    statusPage,
    setstatusPage,
    setisShowCommon,
  } = useStep2Controller(props);

  return (
    <div className={styles.root}>
      {statusPage === statusPageType.main && (
        <>
          <Typography className={styles.title} variant="h6">
            طراحی سوال
          </Typography>
          <div className={styles.content}>
            <CreateQuestionBoxComponent
              {...{
                isShowNewQuestion,
                setisShowNewQuestion,
                setstatusPage,
                setisShowCommon,
              }}
            />
          </div>
        </>
      )}

      {statusPage === statusPageType.singleAnswer && (
        <SingleAnswerComponent {...{ setstatusPage, setisShowCommon }} />
      )}

      {statusPage === statusPageType.previewQuestions && (
        <PreviewQuestionsComponent
          {...{
            isShowNewQuestion,
            setisShowNewQuestion,
            setstatusPage,
            setisShowCommon,
          }}
        />
      )}

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
