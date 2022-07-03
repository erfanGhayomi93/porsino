import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { toJalaaliWithDay } from "@/core/helpers/date";
import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import useCardSurvayController, {
  CardSurvayProps,
} from "./CardSurvay.controller";
import styles from "./CardSurvay.module.scss";

export default function CardSurvayComponent(props: CardSurvayProps) {
  const { expire_at, title, logo } = useCardSurvayController(props);
  const router = useRouter();

  const handleClick = () => {
    router.push("/home/survay/detailsSurvay/hash");
  };

  return (
    <div className={styles.root}>
      <Box className={styles.subject}>
        <Image
          className={styles.img}
          src={logo ? logo : "/"}
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
          {title}
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
          <Typography variant="h6">{toJalaaliWithDay(expire_at)}</Typography>
        </div>
      </Box>
      <Box>
        <ButtonCustomComponent
          color="primary"
          label="بپرس اینو"
          isIcon
          variant="contained"
          onClick={() => handleClick()}
        />
      </Box>
    </div>
  );
}
