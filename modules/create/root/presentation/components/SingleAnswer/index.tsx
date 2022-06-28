import InputTextComponent from "@/core/components/common/form/InputText";
import { Box, Chip, FormHelperText, Switch, Typography } from "@mui/material";
import useSingleAnswerController, {
  SingleAnswerProps,
} from "./SingleAnswer.controller";
import styles from "./SingleAnswer.module.scss";
import AddIcon from "@mui/icons-material/Add";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";

export default function SingleAnswerComponent(props: SingleAnswerProps) {
  const {
    options,
    handleClickAddOption,
    handleChangeOption,
    question,
    setquestion,
    handleSubmit,
  } = useSingleAnswerController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.item}>
        <InputTextComponent
          fullWidth
          placeholder="متن سوال تک انتخابی"
          endAdornment={
            <svg className={styles.icon}>
              <use xlinkHref="/sprit.svg#image-line" />
            </svg>
          }
          value={question}
          onChange={(e) => setquestion(e.target.value)}
        />
      </Box>

      {options.map((item, ind) => (
        <Box className={styles.item} key={ind}>
          <InputTextComponent
            fullWidth
            placeholder={item.label}
            value={item.value}
            onChange={(e) => handleChangeOption(e, item.label)}
            endAdornment={
              <svg className={styles.icon}>
                <use xlinkHref="/sprit.svg#image-line" />
              </svg>
            }
          />
        </Box>
      ))}

      <Chip
        label={"افزودن گزینه"}
        className={styles.chip}
        variant={"outlined"}
        clickable={true}
        color="primary"
        icon={<AddIcon />}
        onClick={() => handleClickAddOption()}
      />

      <Box className={styles.item}>
        <InputTextComponent fullWidth placeholder="توضیحات (اختیاری)" />
        <FormHelperText className={styles.helperText}>
          توضیحات که در زیر سوال نمایش داده می‌شود.
        </FormHelperText>
      </Box>

      <div className={styles.isRequired}>
        <Typography variant="h6">اجباری بودن پاسخ‌دهی</Typography>
        <Switch />
      </div>

      <div className={styles.button}>
        <ButtonCustomComponent
          label="بعدی"
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
