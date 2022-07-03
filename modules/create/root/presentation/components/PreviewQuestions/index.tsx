import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import CreateQuestionBoxComponent from "../CreateQuestionBox";
import usePreviewQuestionsController, {
  PreviewQuestionsProps,
} from "./PreviewQuestions.controller";
import styles from "./PreviewQuestions.module.scss";

export default function PreviewQuestionsComponent(
  props: PreviewQuestionsProps
) {
  const {
    questions,
    isShowNewQuestion,
    setisShowNewQuestion,
    setstatusPage,
    setisShowCommon,
  } = usePreviewQuestionsController(props);

  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant="h6">
        طراحی سوال
      </Typography>

      <Box className={styles.box}>
        {questions?.map((item: any, ind: number) => (
          <div key={ind} className={styles.item}>
            <Typography variant="body1" className={styles.qustion}>
              {item.question}
            </Typography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
              // onChange={handleChange}
            >
              {item.options.map((itm: any, ind: number) => (
                <div
                  className={clsx({
                    [styles.option]: true,
                  })}
                  key={ind}
                >
                  <FormControlLabel
                    value={itm.value}
                    control={<Radio />}
                    label={itm.value}
                  />
                </div>
              ))}
            </RadioGroup>

            <div className={styles.des}>
              <svg className={styles.icon}>
                <use xlinkHref="/sprit.svg#information" />
              </svg>
              <Typography variant="body2" component="span">
                لورم ایپسوم متن ساختگی
              </Typography>
            </div>

            <div className={styles.buttons}>
              <Box display="flex">
                <div className={clsx(styles.itemBtn, styles["ml-12"])}>
                  <svg>
                    <use xlinkHref="/sprit.svg#edit"></use>
                  </svg>
                </div>
                <div className={styles.itemBtn}>
                  <svg>
                    <use xlinkHref="/sprit.svg#delete"></use>
                  </svg>
                </div>
              </Box>
              <Box display="flex">
                <div className={clsx(styles.itemBtn, styles["ml-12"])}>
                  <svg>
                    <use xlinkHref="/sprit.svg#arrow-down"></use>
                  </svg>
                </div>
                <div className={styles.itemBtn}>
                  <svg>
                    <use xlinkHref="/sprit.svg#arrow-up"></use>
                  </svg>
                </div>
              </Box>
            </div>
          </div>
        ))}

        <div>
          <CreateQuestionBoxComponent
            {...{
              isShowNewQuestion,
              setisShowNewQuestion,
              setstatusPage,
              setisShowCommon,
            }}
          />
        </div>
      </Box>
    </div>
  );
}
