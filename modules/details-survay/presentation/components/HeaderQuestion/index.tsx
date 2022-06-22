import useHeaderQuestionController, {
  HeaderQuestionProps,
} from "./HeaderQuestion.controller";
import styles from "./HeaderQuestion.module.scss";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#F7F7F7",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.primary : "blue",
  },
}));

export default function HeaderQuestionComponent(props: HeaderQuestionProps) {
  const { allQuestion, numberQuestion } = useHeaderQuestionController(props);

  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <BorderLinearProgress
          variant="determinate"
          value={(100 / allQuestion) * numberQuestion}
        />

        <Box className={styles.box}>
          <Typography
            className={styles.numberQuestion}
            variant="body1"
            color="primary"
          >
            سوال {numberQuestion}
          </Typography>

          <Typography className={styles.allQuestion} variant="body2">
            {allQuestion} سوال
          </Typography>
        </Box>
      </div>
    </Container>
  );
}
