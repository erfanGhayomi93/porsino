import { Box, Typography } from "@mui/material";
import DrawerNewQuestionComponent from "../DrawerNewQuestion";
import useCreateQuestionBoxController, {
  CreateQuestionBoxProps,
} from "./CreateQuestionBox.controller";
import styles from "./CreateQuestionBox.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function CreateQuestionBoxComponent(
  props: CreateQuestionBoxProps
) {
  const {
    isShowNewQuestion,
    setisShowNewQuestion,
    setstatusPage,
    setisShowCommon,
  } = useCreateQuestionBoxController(props);

  return (
    <>
      <Box className={styles.box} onClick={() => setisShowNewQuestion(true)}>
        <AddCircleOutlineIcon className={styles.icon} />

        <Typography variant="body1" component="span">
          ایجاد سوال
        </Typography>
      </Box>

      <DrawerNewQuestionComponent
        {...{
          isShowNewQuestion,
          setisShowNewQuestion,
          setstatusPage,
          setisShowCommon,
        }}
      />
    </>
  );
}
