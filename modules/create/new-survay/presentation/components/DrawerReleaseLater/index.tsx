import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import { Box, Typography } from "@mui/material";
import useDrawerReleaseLaterController, {
  DrawerReleaseLaterProps,
} from "./DrawerReleaseLater.controller";
import styles from "./DrawerReleaseLater.module.scss";

export default function DrawerReleaseLaterComponent(
  props: DrawerReleaseLaterProps
) {
  const { isreleaseLater, setisreleaseLater, router } =
    useDrawerReleaseLaterController(props);

  return (
    <DrawerCustomComponent value={isreleaseLater} setValue={setisreleaseLater}>
      <Box className={styles.root}>
        <Typography variant="h6" className={styles.title}>
          قصد انتشار ندارید؟
        </Typography>
        <Typography variant="body1">
          کاربر گرامی، شما می‌توانید با رفتن به قسمت نظرسنجی های من این پرسشنامه
          را بعدا انتشار دهید.
        </Typography>

        <div className={styles.button}>
          <ButtonCustomComponent
            label="متوجه شدم"
            color="primary"
            variant="contained"
            onClick={() => {
              setisreleaseLater(false);
              router.push("/home");
            }}
          />
        </div>
      </Box>
    </DrawerCustomComponent>
  );
}
