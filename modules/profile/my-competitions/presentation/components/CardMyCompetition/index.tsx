import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import useCardMyCompetitionController, {
  CardMyCompetitionProps,
} from "./CardMyCompetition.controller";
import styles from "./CardMyCompetition.module.scss";

export default function CardMyCompetitionComponent(
  props: CardMyCompetitionProps
) {
  const {} = useCardMyCompetitionController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.title}>
        <Typography className="strong" variant="body1">
          نام مسابقه
        </Typography>
        <Typography
          className={clsx({
            [styles.secondaryLight]: true,
            [styles.errorLight]: false,
            strong: true,
          })}
          variant="body1"
        >
          فعال
        </Typography>
      </Box>
      <Box className={styles.content}>
        <div className={styles.item}>
          <Box display="flex">
            <Typography variant="body1" color="divider">
              بازدید :
            </Typography>
            <Typography variant="body1">120</Typography>
          </Box>

          <Box display="flex">
            <Typography variant="body1" color="divider">
              پاسخ‌ها :
            </Typography>
            <Typography variant="body1">105</Typography>
          </Box>
        </div>
      </Box>

      <ButtonCustomComponent
        label="نمایش"
        variant="contained"
        color="primary"
      />
    </div>
  );
}
