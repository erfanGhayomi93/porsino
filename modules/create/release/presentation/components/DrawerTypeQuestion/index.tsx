import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import { Container, IconButton, Typography } from "@mui/material";
import useDrawerTypeQuestionController, {
  DrawerTypeQuestionProps,
} from "./DrawerTypeQuestion.controller";
import styles from "./DrawerTypeQuestion.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import CheckIcon from "@mui/icons-material/Check";

export default function DrawerTypeQuestionComponent(
  props: DrawerTypeQuestionProps
) {
  const { isShowTypeQues, setisShowTypeQues } =
    useDrawerTypeQuestionController(props);

  return (
    <DrawerCustomComponent value={isShowTypeQues} setValue={setisShowTypeQues}>
      <Container maxWidth="lg" className={styles.container}>
        <div className={styles.root}>
          <div className={styles.title}>
            <Typography variant="h6" className="strong">
              انتخاب سوال
            </Typography>
            <IconButton
              color="inherit"
              className={styles.iconButton}
              onClick={() => setisShowTypeQues(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className={styles.content}>
            {data.map((item, ind) => (
              <div key={ind} className={styles.item}>
                <Typography className="strong" variant="h6">
                  {item}
                </Typography>
                {ind === 1 && <CheckIcon className={styles.icon} />}
              </div>
            ))}
          </div>

          <div className={styles.button}>
            <ButtonCustomComponent
              label="ثبت"
              color="primary"
              variant="contained"
            />
          </div>
        </div>
      </Container>
    </DrawerCustomComponent>
  );
}

const data = [
  "شهر",
  "جنسیت",
  "وضعیت تاهل",
  "شغل",
  "وضعیت درآمدی",
  "تحصیلات",
  "بازه سنی",
];
