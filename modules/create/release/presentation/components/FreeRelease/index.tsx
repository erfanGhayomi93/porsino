import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import InputTextComponent from "@/core/components/common/form/InputText";
import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import { Container, Typography } from "@mui/material";
import useFreeReleaseController, {
  FreeReleaseProps,
} from "./FreeRelease.controller";
import styles from "./FreeRelease.module.scss";

export default function FreeReleaseComponent(props: FreeReleaseProps) {
  const {} = useFreeReleaseController(props);

  return (
    <div className={styles.root}>
      <AppHeaderComponent title="انتشار رایگان" />
      <Container maxWidth="lg">
        <Typography className={styles.des} variant="body1">
          می‌تونی به تعداد دلخواه نظرسنجی ایجاد کنی و تا سقف ۱۵۰ نفر بین
          شرکت‌کنندگان انتشار بدهی
        </Typography>

        <div className={styles.content}>
          <div className={styles.item}>
            <InputTextComponent placeholder="تعداد شرکت کنندگان" fullWidth />
          </div>
          <div className={styles.item}>
            <InputTextComponent placeholder="تاریخ اتمام نظر سنجی" fullWidth />
          </div>
        </div>

        <div className={styles.button}>
          <ButtonCustomComponent
            label="ثبت"
            color="primary"
            variant="contained"
          />
        </div>
      </Container>
    </div>
  );
}
