import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import clsx from "clsx";
import Image from "next/image";
import useCardSurvayController, {
  CardSurvayProps,
} from "./CardSurvay.controller";
import styles from "./CardSurvay.module.scss";

export default function CardSurvayComponent(props: CardSurvayProps) {
  const {} = useCardSurvayController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.subject}>
        <Image
          className={styles.img}
          src="/images/avatar.svg"
          width={80}
          height={80}
        />
        <Typography
          variant="h6"
          className={clsx({
            ["strong"]: true,
            [styles.type]: true,
          })}
        >
          موضوع نظرسنجی
        </Typography>
      </Box>
      <Box className={styles.content}>
        <div>
          <Image src="/images/timeline.svg" width={15} height={15} />
          <Typography variant="body1" className={styles.time}>
            زمان باقی‌مانده:
          </Typography>
        </div>
        <div>
          <Typography variant="h6">۱۲:۳۵:45</Typography>
        </div>
      </Box>
      <Box>
        <ButtonCustomComponent
          color="primary"
          label="بپرس اینو"
          isIcon
          variant="contained"
        />
      </Box>
    </div>
  );
}
