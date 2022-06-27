import useTargetedController, { TargetedProps } from "./Targeted.controller";
import styles from "./Targeted.module.scss";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import InputTextComponent from "@/core/components/common/form/InputText";
import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import { Container, FormHelperText } from "@mui/material";


export default function TargetedComponent(props: TargetedProps) {
  const {} = useTargetedController(props);

  return  <div className={styles.root}>
  <AppHeaderComponent title="انتشار آزاد" />
  <Container maxWidth="lg">
    <div className={styles.content}>
      <div className={styles.item}>
        <InputTextComponent placeholder="تعداد شرکت کنندگان" fullWidth />
        <FormHelperText className={styles.formHelperText}>
          طبق انتخاب تعداد نفرات مبلغ را به کاربر نشان می‌دهیم.
        </FormHelperText>
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
</div>;
}
