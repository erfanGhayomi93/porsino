import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import useCardLotteryController, {
  CardLotteryProps,
} from "./CardLottery.controller";
import styles from "./CardLottery.module.scss";

export default function CardLotteryComponent(props: CardLotteryProps) {
  const { isFinish } = useCardLotteryController(props);
  const router = useRouter();

  const handleClick = (): void => {
    if (isFinish) router.push("/home/lottery/result");
  };

  return (
    <div className={styles.card}>
      <Box>
        <Typography variant="body1" className="strong">
          موضوع مسابقه
        </Typography>
      </Box>

      <Box className={styles.content}>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            تاریخ قرعه‌کشی:
          </Typography>
          <Typography variant="body1">۱۷ بهمن ۱۴۰۱</Typography>
        </div>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            میزان جایزه:
          </Typography>
          <Typography variant="body1">۱۵,۰۰۰ شیبا</Typography>
        </div>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            تعداد جوایز:
          </Typography>
          <Typography variant="body1">۱۵ نفر</Typography>
        </div>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            اسپانسر:
          </Typography>
          <Typography variant="body1">سرویس بیت‌برگ</Typography>
        </div>
      </Box>

      <Box>
        <ButtonCustomComponent
          label={isFinish ? "نتیجه قرعه‌کشی" : "در انتظار قرعه‌کشی"}
          variant={isFinish ? "contained" : "outlined"}
          color={isFinish ? "primary" : "inherit"}
          onClick={handleClick}
        />
      </Box>
    </div>
  );
}
