import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { Box, Typography } from "@mui/material";
import useCardCreditController, {
  CardCreditProps,
} from "./CardCredit.controller";
import styles from "./CardCredit.module.scss";

export default function CardCreditComponent(props: CardCreditProps) {
  const { isButton } = useCardCreditController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.item}>
        <Typography variant="body1">موضوع:</Typography>
        <Typography variant="body1">رانندگان اسنپ</Typography>
      </Box>

      <Box className={styles.item}>
        <Typography variant="body1">تاریخ:</Typography>
        <Typography variant="body1">۲۳ اردیبهشت ۱۴۰۱</Typography>
      </Box>

      <Box className={styles.item}>
        <Typography variant="body1">اعتبار دریافت شده:</Typography>
        <Box display="flex">
          <Typography variant="body1" className="strong" component="span">
            ۱۵,۰۰۰
          </Typography>
          <Typography variant="body1">شیبا</Typography>
        </Box>
      </Box>

      {isButton && (
        <div className={styles.button}>
          <ButtonCustomComponent
            label="مشاهده نتیجه نظرسنجی"
            color="inherit"
            variant="outlined"
          />
        </div>
      )}

      <div className={styles.more}>
        <ButtonCustomComponent
          label="مشاهده بیشتر"
          color="primary"
          variant="text"
        />
      </div>
    </div>
  );
}
