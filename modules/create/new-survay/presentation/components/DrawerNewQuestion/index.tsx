import useDrawerNewQuestionController, {
  DrawerNewQuestionProps,
} from "./DrawerNewQuestion.controller";
import styles from "./DrawerNewQuestion.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { Box, Chip, Container, IconButton, Typography } from "@mui/material";
import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

export default function DrawerNewQuestionComponent(
  props: DrawerNewQuestionProps
) {
  const { isShowNewQuestion, setisShowNewQuestion } =
    useDrawerNewQuestionController(props);

  return (
    <DrawerCustomComponent
      value={isShowNewQuestion}
      setValue={setisShowNewQuestion}
    >
      <Container maxWidth="lg">
        <div className={styles.root}>
          <div className={styles.title}>
            <Typography variant="h6" className="strong">
              ایجاد پرسشنامه
            </Typography>
            <IconButton
              color="inherit"
              className={styles.iconButton}
              onClick={() => setisShowNewQuestion(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className={styles.content}>
            {data.map((item: any, ind: number) => (
              <React.Fragment key={ind}>
                <Typography variant="h6" className="weight-600">
                  {item.title}
                </Typography>
                <Box className={styles.chips}>
                  {item.chips.map((chipItem: any, index: number) => (
                    <Chip
                      label={chipItem}
                      key={index}
                      className={styles.chip}
                      variant={"outlined"}
                      clickable={false}
                      color="primary"
                      icon={<AddIcon />}
                      // onClick={() => setActiveCategory(item.enTitle)}
                    />
                  ))}
                </Box>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </DrawerCustomComponent>
  );
}

const data: any = [
  { title: "انتخابی", chips: ["تک انتخابی", "چند انتخابی", "ارزیابی"] },
  { title: "تشریحی", chips: ["تشریحی کوتاه", "تشریحی بلند", "تاریخ"] },
  { title: "الگو", chips: ["ایموجی"] },
];
