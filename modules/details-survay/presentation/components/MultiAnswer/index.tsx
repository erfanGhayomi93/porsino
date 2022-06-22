import useMultiAnswerController, {
  MultiAnswerProps,
} from "./MultiAnswer.controller";
import styles from "./MultiAnswer.module.scss";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  RadioGroup,
  Typography,
} from "@mui/material";
import clsx from "clsx";

export default function MultiAnswerComponent(props: MultiAnswerProps) {
  const { text, description, options } = useMultiAnswerController(props);

  // {
  //   id: 7199,
  //   question_id: 2633,
  //   option: "ماشین اصلاح صورت",
  //   type: 1,
  //   created_at: null,
  //   updated_at: "2022-06-09T07:05:47.000000Z",
  //   option_index: null,
  //   answer: 0,
  // },

  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <div className={styles.box}>
          <Box className={styles.title}>
            <Typography variant="body1" className="strong">
              {text}
            </Typography>
            <Typography variant="body2" component="span">
              {description}
            </Typography>
          </Box>

          <Box className={styles.content}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
              // onChange={handleChange}
            >
              {options.map((item: any, ind: number) => (
                <div
                  className={clsx({
                    [styles.item]: true,
                    [styles.selected]: ind === 2,
                  })}
                  key={ind}
                >
                  <FormControlLabel
                    value={item.option}
                    control={<Checkbox />}
                    label={item.option}
                  />
                </div>
              ))}
            </RadioGroup>
          </Box>
        </div>
      </div>
    </Container>
  );
}
