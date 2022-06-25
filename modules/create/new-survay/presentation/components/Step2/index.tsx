import { Box, Typography } from "@mui/material";
import useStep2Controller, { Step2Props } from "./Step2.controller";
import styles from "./Step2.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function Step2Component(props: Step2Props) {
  const {} = useStep2Controller(props);

  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant="h6">
        طراحی سوال
      </Typography>

      <div className={styles.content}>
        <Box className={styles.box}>
          <AddCircleOutlineIcon className={styles.icon} />

          <Typography variant="body1" component="span">
            ایجاد سوال
          </Typography>
        </Box>
      </div>
    </div>
  );
}
