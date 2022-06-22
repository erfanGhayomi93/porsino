import {
  Box,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import useSingleAnswerController, {
  SingleAnswerProps,
} from "./SingleAnswer.controller";
import styles from "./SingleAnswer.module.scss";

export default function SingleAnswerComponent(props: SingleAnswerProps) {
  const { text, description, options } = useSingleAnswerController(props);

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
                    control={<Radio />}
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
