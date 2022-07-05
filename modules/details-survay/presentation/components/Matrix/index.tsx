import useMatrixController, { MatrixProps } from "./Matrix.controller";
import styles from "./Matrix.module.scss";
import {
  Box,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import clsx from "clsx";

export default function MatrixComponent(props: MatrixProps) {
  const { description, options } = useMatrixController(props);

  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <Box className={styles.title}>
          <Typography variant="body2" component="span" color="divider">
            {description}
          </Typography>
        </Box>

        <Box className={styles.content}>
          {options
            .filter((item: any) => item.type === 2)
            .map((item: any) => (
              <div className={styles.box} key={item.id}>
                <Box className={styles.question}>
                  <Typography variant="body1" className="strong">
                    {item.option}
                  </Typography>
                </Box>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  // value={value}
                  // onChange={handleChange}
                >
                  <Box className={styles.options}>
                    {options
                      .filter((item: any) => item.type === 1)
                      .map((item: any) => (
                        <div
                          className={clsx({
                            [styles.item]: true,
                          })}
                          key={item.id}
                        >
                          <FormControlLabel
                            value={item.option}
                            control={<Radio />}
                            label={item.option}
                          />
                        </div>
                      ))}
                  </Box>
                </RadioGroup>
              </div>
            ))}
        </Box>
      </div>
    </Container>
  );
}
