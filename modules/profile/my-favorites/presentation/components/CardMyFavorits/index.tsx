import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { Box, Typography } from "@mui/material";
import useCardMyFavoritsController, {
  CardMyFavoritsProps,
} from "./CardMyFavorits.controller";
import styles from "./CardMyFavorits.module.scss";

export default function CardMyFavoritsComponent(props: CardMyFavoritsProps) {
  const {} = useCardMyFavoritsController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.title}>
        <div className={styles.image}></div>
        <div className={styles.box}>
          <Box display="flex">
            <Typography variant="body1" color="divider">
              نظرسنجی:
            </Typography>
            <Typography variant="body1" component="span">
              رانندگان اسنپ
            </Typography>
          </Box>

          <Box display="flex">
            <Typography variant="body1" color="divider">
              تاریخ:
            </Typography>
            <Typography variant="body1" component="span">
              ۲۳ اردیبهشت
            </Typography>
          </Box>
        </div>
      </Box>

      <Box className={styles.button}>
        <ButtonCustomComponent
          label="مشاهده"
          variant="outlined"
          color="inherit"
        />
      </Box>
    </div>
  );
}
