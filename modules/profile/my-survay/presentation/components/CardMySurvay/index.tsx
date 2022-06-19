import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import useCardMySurvayController, {
  CardMySurvayProps,
} from "./CardMySurvay.controller";
import styles from "./CardMySurvay.module.scss";

export default function CardMySurvayComponent(props: CardMySurvayProps) {
  const {} = useCardMySurvayController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.title}>
        <div className={styles.image}></div>
        <Typography variant="h6">موضوع نظرسنجی</Typography>
      </Box>
      <Box className={styles.content}>
        <div className={styles.item}>
          <Typography variant="body1" color="divider">
            وضعیت نظرسنجی:
          </Typography>
          <Typography
            variant="body1"
            className={clsx({
              [styles.secondaryLight]: false,
              [styles.errorLight]: false,
              [styles.infoLight]: true,
            })}
          >
            در انتظار بررسی
          </Typography>
        </div>

        <div className={styles.item}>
          <Typography variant="body1" color="divider">
            تعداد بازدید:
          </Typography>
          <Box display="flex">
            <Typography variant="body1">۱۲۰</Typography>
            <Typography variant="body1" color="divider" component={"span"}>
              نفر
            </Typography>
          </Box>
        </div>

        <div className={styles.item}>
          <Typography variant="body1" color="divider">
            پاسخ‌ها:
          </Typography>
          <Box display="flex">
            <Typography variant="body1">۱۰۵</Typography>
            <Typography variant="body1" color="divider" component={"span"}>
              نفر
            </Typography>
          </Box>
        </div>
      </Box>
      <Box className={styles.buttons}>
        <div>
          <ButtonCustomComponent
            label="نمودارها"
            variant="outlined"
            color="inherit"
          />
        </div>
        <div>
          <ButtonCustomComponent
            label="نمایش"
            variant="contained"
            color="primary"
          />
        </div>
      </Box>
    </div>
  );
}
