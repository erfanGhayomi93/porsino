import useEvaluateController, { EvaluateProps } from "./Evaluate.controller";
import styles from "./Evaluate.module.scss";
import { Box, Container, Rating, Typography } from "@mui/material";

export default function EvaluateComponent(props: EvaluateProps) {
  const { text, description, questions, countStar, DataEvaluate } =
    useEvaluateController(props);

  const handleChange = (newValue: number | null, question_id: number) => {
    DataEvaluate.setvalue((prev: any) => ({
      ...prev,
      [question_id]: newValue,
    }));
  };

  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <Box className={styles.title}>
          <Typography variant="body2" component="span" color="divider">
            {description}
          </Typography>
        </Box>
        <Box className={styles.content}>
          {questions
            // .filter((item: any) => {
            //   if (item.type === 2) return true;
            // })
            .map((item: any) => (
              <div className={styles.box} key={item.id}>
                <Box className={styles.question}>
                  <Typography variant="body1" className="strong">
                    {item.option}
                  </Typography>
                </Box>

                <Box className={styles.options}>
                  <Rating
                    name="simple-controlled"
                    value={DataEvaluate.value[item.id] || null}
                    max={countStar}
                    onChange={(event, newValue: number | null) =>
                      handleChange(newValue, item.id)
                    }
                    size="large"
                  />
                </Box>
              </div>
            ))}
        </Box>
      </div>
    </Container>
  );
}
