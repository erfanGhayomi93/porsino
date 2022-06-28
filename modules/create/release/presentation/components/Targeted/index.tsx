import useTargetedController, { TargetedProps } from "./Targeted.controller";
import styles from "./Targeted.module.scss";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import InputTextComponent from "@/core/components/common/form/InputText";
import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import { Container, FormHelperText } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Typography } from "@mui/material";
import DrawerTypeQuestionComponent from "../DrawerTypeQuestion";

export default function TargetedComponent(props: TargetedProps) {
  const { isShowTypeQues, setisShowTypeQues } = useTargetedController(props);

  return (
    <div className={styles.root}>
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

        <Box className={styles.box} onClick={() => setisShowTypeQues(true)}>
          <AddCircleOutlineIcon className={styles.icon} />

          <Typography variant="body1" component="span">
            فیلتر براساس
          </Typography>
        </Box>
        <DrawerTypeQuestionComponent
          {...{ isShowTypeQues, setisShowTypeQues }}
        />

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
