import InputTextComponent from "@/core/components/common/form/InputText";
import { Box, Typography } from "@mui/material";
import useStep1Controller, { Step1Props } from "./Step1.controller";
import styles from "./Step1.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DrawerMainCategoryComponent from "../DrawerMainCategory";
import DrawerSubCategoryComponent from "../DrawerSubCategory";

export default function Step1Component(props: Step1Props) {
  const {
    isShowCategoryMain,
    setisShowCategoryMain,
    isShowCategorySub,
    setisShowCategorySub,
    attachRaf,
  } = useStep1Controller(props);

  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant="h6">
        اطلاعات پایه
      </Typography>

      <Box className={styles.content}>
        <Box className={styles.item}>
          <InputTextComponent placeholder="عنوان" fullWidth />
        </Box>

        <Box className={styles.item}>
          <InputTextComponent
            placeholder="دسته‌بندی اصلی"
            readOnly
            fullWidth
            endAdornment={<KeyboardArrowDownIcon />}
            onClick={() => setisShowCategoryMain(true)}
          />

          <DrawerMainCategoryComponent
            isShowCategoryMain={isShowCategoryMain}
            setisShowCategoryMain={setisShowCategoryMain}
          />
        </Box>

        <Box className={styles.item}>
          <InputTextComponent
            placeholder="دسته‌بندی فرعی"
            readOnly
            fullWidth
            endAdornment={<KeyboardArrowDownIcon />}
            onClick={() => setisShowCategorySub(true)}
          />
          <DrawerSubCategoryComponent
            isShowCategorySub={isShowCategorySub}
            setisShowCategorySub={setisShowCategorySub}
          />
        </Box>

        <Box className={styles.item}>
          <InputTextComponent placeholder="اسم برند (اختیاری)" fullWidth />
        </Box>

        <Box className={styles.item}>
          <InputTextComponent placeholder="هدف از نظرسنجی" fullWidth />
        </Box>

        <Box className={styles.item}>
          <InputTextComponent
            placeholder="تصویر نظرسنجی"
            fullWidth
            readOnly
            endAdornment={
              <svg className={styles.icon}>
                <use xlinkHref="/sprit.svg#image-line" />
              </svg>
            }
            onClick={() => attachRaf?.current?.click()}
          />

          <input type="file" ref={attachRaf} style={{ display: "none" }} />
        </Box>
      </Box>
    </div>
  );
}
