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
  const { text, description, options, DataMultiChoice } =
    useMultiAnswerController(props);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    DataMultiChoice.setvalue((prev: any) => ({
      ...prev,
      [id]: event.target.checked,
    }));
  };

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
            {options.map((item: any, ind: number) => (
              <div
                className={clsx({
                  [styles.item]: true,
                  [styles.selected]: DataMultiChoice?.value[item.id]
                    ? true
                    : false,
                })}
                key={ind}
              >
                <FormControlLabel
                  value={item.id}
                  control={<Checkbox />}
                  label={item.option}
                  checked={DataMultiChoice?.value[item.id] ? true : false}
                  onChange={(e: any) => handleChange(e, item.id)}
                />
              </div>
            ))}
          </Box>
        </div>
      </div>
    </Container>
  );
}
