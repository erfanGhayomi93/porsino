import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import {
  Box,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import useGenderTypeController, {
  GenderTypeProps,
} from "./GenderType.controller";
import styles from "./GenderType.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";

export default function GenderTypeComponent(props: GenderTypeProps) {
  const { value, setValue, valueRadio, setValueRadio } =
    useGenderTypeController(props);

  return (
    <DrawerCustomComponent value={value} setValue={setValue}>
      <Container maxWidth="lg">
        <Box className={styles.root}>
          <div className={styles.title}>
            <Typography variant="h6" className="strong">
              نوع جنسیت
            </Typography>
            <IconButton
              color="inherit"
              className={styles.iconButton}
              onClick={() => setValue(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className={styles.content}>
            <Typography variant="body1" className={styles.des}>
              جنسیت خود را تعیین کنید
            </Typography>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={valueRadio}
              onChange={(event: any) => setValueRadio(event.target.value)}
            >
              <div className={styles.item}>
                <FormControlLabel value={1} control={<Radio />} label="آقا" />
              </div>
              <div className={styles.item}>
                <FormControlLabel value={2} control={<Radio />} label="خانوم" />
              </div>
            </RadioGroup>

            <div className={styles.button}>
              <ButtonCustomComponent
                label="ثبت"
                variant="contained"
                color="primary"
              />
            </div>
          </div>
        </Box>
      </Container>
    </DrawerCustomComponent>
  );
}
