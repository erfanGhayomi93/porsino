import useNumberController, { NumberProps } from "./Number.controller";
import styles from "./Number.module.scss";
import { Box, Container, Rating, Typography } from "@mui/material";
import InputTextComponent from "@/core/components/common/form/InputText";

export default function NumberComponent(props: NumberProps) {
  const { text, description } = useNumberController(props);

  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <Box className={styles.title}>
          <Typography variant="body1" className="strong">
            {text}
          </Typography>
          <Typography variant="body2" component="span" color="divider">
            {description}
          </Typography>
        </Box>
        <Box className={styles.content}>
          <InputTextComponent fullWidth />
        </Box>
      </div>
    </Container>
  );
}
