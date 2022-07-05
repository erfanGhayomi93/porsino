import useDateController, { DateProps } from "./Date.controller";
import styles from "./Date.module.scss";
import { Box, Container, Rating, Typography } from "@mui/material";
import InputTextComponent from "@/core/components/common/form/InputText";
import { RiArrowDownSLine } from "react-icons/ri";

export default function DateComponent(props: DateProps) {
  const { text, description } = useDateController(props);

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
          <InputTextComponent
            fullWidth
            endAdornment={<RiArrowDownSLine className={styles.icon} />}
          />
        </Box>
      </div>
    </Container>
  );
}
