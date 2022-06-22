import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import { Box, Container, IconButton, Typography } from "@mui/material";
import useDrawerShareController, {
  DrawerShareProps,
} from "./DrawerShare.controller";
import styles from "./DrawerShare.module.scss";
import CloseIcon from "@mui/icons-material/Close";

export default function DrawerShareComponent(props: DrawerShareProps) {
  const { isShowShare, setIsShowShare } = useDrawerShareController(props);

  return (
    <DrawerCustomComponent value={isShowShare} setValue={setIsShowShare}>
      <Container maxWidth="lg">
        <Box className={styles.root}>
          <div className={styles.title}>
            <Typography variant="h6" className="strong">
              اشتراک‌گذاری
            </Typography>
            <IconButton
              color="inherit"
              className={styles.iconButton}
              onClick={() => setIsShowShare(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className={styles.content}>
            <Box className={styles.item}>
              <svg>
                <use xlinkHref="/sprit.svg#telegram" />
              </svg>
              <Typography variant="body1">تلگرام</Typography>
            </Box>
            <Box className={styles.item}>
              <svg>
                <use xlinkHref="/sprit.svg#whatsapp" />
              </svg>
              <Typography variant="body1">واتس‌آپ</Typography>
            </Box>
            <Box className={styles.item}>
              <svg>
                <use xlinkHref="/sprit.svg#copy-link" />
              </svg>
              <Typography variant="body1">کپی لینک</Typography>
            </Box>
          </div>
        </Box>
      </Container>
    </DrawerCustomComponent>
  );
}
