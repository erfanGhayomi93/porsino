import NoDataComponent from "@/core/components/common/NoData";
import { Avatar, Box, Typography } from "@mui/material";
import useCardResultLotteryController, {
  CardResultLotteryProps,
} from "./CardResultLottery.controller";
import styles from "./CardResultLottery.module.scss";

export default function CardResultLotteryComponent(
  props: CardResultLotteryProps
) {
  const {} = useCardResultLotteryController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.title}>
        <Avatar alt="avatar" src="/images/avatar.svg" />
        <Typography variant="body1" component="h5">
          فرینوش موگویی
        </Typography>
      </Box>
      <Box className={styles.content}>
        <Typography variant="body2" className={styles.quntity}>
          میزان جایزه:
        </Typography>
        <div className={styles.body}>
          <Typography variant="body1" className={styles.count}>
            ۱۵,۰۰۰
          </Typography>
          <Typography variant="body2">شیبا</Typography>
        </div>
      </Box>
    </div>
  );
}
