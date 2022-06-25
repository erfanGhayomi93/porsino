import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import { IconButton, Typography } from "@mui/material";
import useDrawerCategoryMainController, {
  DrawerCategoryMainProps,
} from "./DrawerCategoryMain.controller";
import styles from "./DrawerCategoryMain.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";

export default function DrawerCategoryMainComponent(
  props: DrawerCategoryMainProps
) {
  const { isShowCategoryMain, setisShowCategoryMain } =
    useDrawerCategoryMainController(props);

  return (
    <DrawerCustomComponent
      value={isShowCategoryMain}
      setValue={setisShowCategoryMain}
    >
      <div className={styles.root}>
        <div className={styles.title}>
          <Typography variant="h6" className="strong">
            دسته‌بندی اصلی
          </Typography>
          <IconButton
            color="inherit"
            className={styles.iconButton}
            onClick={() => setisShowCategoryMain(false)}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className={styles.content}>
          {data.map((item, ind) => (
            <div key={ind} className={styles.item}>
              <Typography className="strong" variant="h6">
                {item}
              </Typography>
              {ind === 1 && <CheckIcon className={styles.icon} />}
            </div>
          ))}
        </div>

        <div className={styles.button}>
          <ButtonCustomComponent
            label="ثبت"
            color="primary"
            variant="contained"
          />
        </div>
      </div>
    </DrawerCustomComponent>
  );
}

const data = [
  "صنایع غذایی و کالای مصرفی",
  "حمل و نقل",
  "مالی فین تک",
  "خدمات عمومی و دولتی",
  "آموزش و پژوهش",
  "مد و لباس، آرایشی و بهداشتی",
  "فناوری اطلاعات و ارتباطات",
  "خانه و ساختمان",
];
