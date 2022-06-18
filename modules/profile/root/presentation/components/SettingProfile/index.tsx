import { Box, Checkbox, Drawer, IconButton, Typography } from "@mui/material";
import useSettingProfileController, {
  SettingProfileProps,
} from "./SettingProfile.controller";
import styles from "./SettingProfile.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import DrawerCustomComponent from "@/core/components/common/DrawerCustom";

export default function SettingProfileComponent(props: SettingProfileProps) {
  const { value, setValue } = useSettingProfileController(props);

  return (
    <DrawerCustomComponent value={value} setValue={setValue}>
      <Box sx={{ width: "100%" }} role="presentation">
        <div className={styles.title}>
          <Typography variant="h6" className="strong">
            تنظیمات اعلانات
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
          <Typography variant="h6" className={styles.des}>
            مسابقه و نظرسنجی جدید گذاشته شد خبر بده
          </Typography>
          <div className={styles.item}>
            <Typography variant="body1" className="strong">
              ارسال پیامک
            </Typography>

            <Checkbox />
          </div>
          <div className={styles.item}>
            <Typography variant="body1" className="strong">
              نوتیفیکیشن
            </Typography>

            <Checkbox />
          </div>

          <div className={styles.button}>
            <ButtonCustomComponent
              label="ثبت"
              variant="contained"
              color="primary"
            />
          </div>
        </div>
      </Box>
    </DrawerCustomComponent>
  );
}
