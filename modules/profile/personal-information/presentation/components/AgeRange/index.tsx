import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import useAgeRangeController, { AgeRangeProps } from "./AgeRange.controller";
import styles from "./AgeRange.module.scss";
import {
  Box,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";

export default function AgeRangeComponent(props: AgeRangeProps) {
  const { value, setValue, valueRadio, setValueRadio } =
    useAgeRangeController(props);

  return (
    <DrawerCustomComponent value={value} setValue={setValue}>
      <Container maxWidth="lg">
        <Box className={styles.root}>
          <div className={styles.title}>
            <Typography variant="h6" className="strong">
              بازه سنی
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
              محدوده سن خود را انتخاب کنید
            </Typography>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={valueRadio}
              onChange={(event: any) => setValueRadio(event.target.value)}
            >
              <div className={styles.item}>
                <FormControlLabel
                  value={"۲۴ - ۱۸"}
                  control={<Radio />}
                  label="۲۴ - ۱۸"
                />
              </div>
              <div className={styles.item}>
                <FormControlLabel
                  value={"۳۴ - ۲۵"}
                  control={<Radio />}
                  label="۳۴ - ۲۵"
                />
              </div>
              <div className={styles.item}>
                <FormControlLabel
                  value={"۴۴ - ۳۵"}
                  control={<Radio />}
                  label="۴۴ - ۳۵"
                />
              </div>
              <div className={styles.item}>
                <FormControlLabel
                  value={"۵۴ - ۴۵"}
                  control={<Radio />}
                  label="۵۴ - ۴۵"
                />
              </div>
              <div className={styles.item}>
                <FormControlLabel
                  value={"۶۴ - ۴۵"}
                  control={<Radio />}
                  label="۶۴ - ۴۵"
                />
              </div>
              <div className={styles.item}>
                <FormControlLabel
                  value={"+۶۵"}
                  control={<Radio />}
                  label="+۶۵"
                />
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
