import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { Box, Typography } from "@mui/material";
import { statusPageType } from "../../pages/DetailsSurvay/DetailsSurvay.controller";
import useStartController, { StartProps } from "./Start.controller";
import styles from "./Start.module.scss";

export default function StartComponent(props: StartProps) {
  const { setstatusPage } = useStartController(props);

  return (
    <div className={styles.root}>
      <Typography variant="h3" component="h3" className="strong">
        سلام دوست عزیز
      </Typography>
      <Box className={styles.button}>
        <ButtonCustomComponent
          label="شروع"
          color="primary"
          variant="contained"
          onClick={() => setstatusPage(statusPageType.during)}
        />
      </Box>
    </div>
  );
}
