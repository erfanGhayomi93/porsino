import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import { Container, IconButton, Typography } from "@mui/material";
import useDrawerCreateController, {
  DrawerCreateProps,
} from "./DrawerCreate.controller";
import styles from "./DrawerCreate.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { useEffect } from "react";

export default function DrawerCreateComponent(props: DrawerCreateProps) {
  const { value, setisShowDrawerBlank, router, setisShowDrawerReady } =
    useDrawerCreateController(props);

  return (
    <DrawerCustomComponent value={value} setValue={setisShowDrawerBlank}>
      <Container maxWidth="lg">
        <div className={styles.root}>
          <div className={styles.title}>
            <Typography variant="h6" className="strong">
              ایجاد پرسشنامه
            </Typography>
            <IconButton
              color="inherit"
              className={styles.iconButton}
              onClick={() => setisShowDrawerBlank(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className={styles.content}>
            <div
              className={styles.item}
              onClick={() => router.push("/create/newSurvay")}
            >
              <Typography variant="body1" className="weight-600">
                پرسشنامه خالی
              </Typography>
              <svg>
                <use xlinkHref="/sprit.svg#question-blank" />
              </svg>
            </div>

            <div
              className={styles.item}
              onClick={() => setisShowDrawerReady(true)}
            >
              <Typography variant="body1" className="weight-600">
                پرسشنامه آماده
              </Typography>
              <svg>
                <use xlinkHref="/sprit.svg#question-ready" />
              </svg>
            </div>
          </div>

          <div className={styles.button}>
            <ButtonCustomComponent
              label="ثبت"
              variant="contained"
              color="primary"
            />
          </div>
        </div>
      </Container>
    </DrawerCustomComponent>
  );
}
