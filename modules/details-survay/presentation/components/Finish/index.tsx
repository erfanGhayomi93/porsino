import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { statusPageType } from "../../pages/DetailsSurvay/DetailsSurvay.controller";
import useFinishController, { FinishProps } from "./Finish.controller";
import styles from "./Finish.module.scss";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DrawerShareComponent from "../DrawerShare";

export default function FinishComponent(props: FinishProps) {
  const { router, isShowShare, setIsShowShare } = useFinishController(props);

  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <Box className={styles.img}>
          <Image src="/images/finish-question.svg" width={80} height={80} />
        </Box>
        <Typography variant="h6" className={styles.text}>
          با تشکر، پاسخ‌های شما ثبت شد
        </Typography>

        <Box className={styles.content}>
          <Typography variant="h6" className="weight-600">
            ۱۵,۰۰۰ شیبا
          </Typography>
          <Typography variant="h6" component="span">
            به اعتبار شما افزوده شد.
          </Typography>
        </Box>

        <Box className={styles.buttons}>
          <div className={styles.share} onClick={() => setIsShowShare(true)}>
            <svg>
              <use xlinkHref="/sprit.svg#share-selected"></use>
            </svg>
          </div>

          <DrawerShareComponent {...{ isShowShare, setIsShowShare }} />

          <div className={styles.save}>
            <svg>
              <use xlinkHref="/sprit.svg#save-unselected"></use>
            </svg>
          </div>

          <div className={styles.returnToHome}>
            <ButtonCustomComponent
              label="بازگشت به خانه"
              color="inherit"
              variant="outlined"
              onClick={() => router.push("/home")}
              padding="18px 21px"
            />
          </div>
        </Box>
      </div>
    </Container>
  );
}
