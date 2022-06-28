import useDrawerCreateReadyController, {
  DrawerCreateReadyProps,
} from "./DrawerCreateReady.controller";
import styles from "./DrawerCreateReady.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import { Container, IconButton, Typography } from "@mui/material";

export default function DrawerCreateReadyComponent(
  props: DrawerCreateReadyProps
) {
  const { value, setValue } = useDrawerCreateReadyController(props);

  return (
    <DrawerCustomComponent value={value} setValue={setValue}>
      <Container maxWidth="lg" className={styles.container}>
        <div className={styles.root}>
          <div className={styles.title}>
            <Typography variant="h6" className="strong">
              پرسشنامه‌های آماده
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
            {data.map((item, ind) => (
              <div className={styles.item} key={ind}>
                <Typography variant="h6" className="strong">
                  {item.label}
                </Typography>
                <Typography variant="body1" component="span">
                  {item.countQues} سوال
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </DrawerCustomComponent>
  );
}

const data = [
  { label: "شخصیت شناسی", countQues: 19 },
  { label: "استخدام", countQues: 9 },
  { label: "راننده اسنپ شو", countQues: 15 },
  { label: "ترک سیگار", countQues: 5 },
  { label: "مشخصات فردی", countQues: 8 },
  { label: "بهترین کافه‌های تهران", countQues: 26 },
  { label: "رضایت بیمار", countQues: 10 },
  { label: "مشاوره", countQues: 12 },
  { label: "ارزیابی کالا", countQues: 18 },
];
