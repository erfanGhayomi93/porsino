import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import { IconButton, Typography } from "@mui/material";
import useDrawerCategorySubController, {
  DrawerCategorySubProps,
} from "./DrawerCategorySub.controller";
import styles from "./DrawerCategorySub.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";

export default function DrawerSubCategoryComponent(
  props: DrawerCategorySubProps
) {
  const { isShowCategorySub, setisShowCategorySub } =
    useDrawerCategorySubController(props);

  return (
    <DrawerCustomComponent
      value={isShowCategorySub}
      setValue={setisShowCategorySub}
    >
      <div className={styles.root}>
        <div className={styles.title}>
          <Typography variant="h6" className="strong">
            دسته‌بندی فرعی
          </Typography>
          <IconButton
            color="inherit"
            className={styles.iconButton}
            onClick={() => setisShowCategorySub(false)}
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

const data = ["خواروبار", "لبنیات", "نوشیدنی", "یخچالی", "دخانیات و غیرغذایی"];
