import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import { toJalaaliWithDay } from "@/core/helpers/date";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useCardCompetitionController, {
  CardCompetitionProps,
} from "./CardCompetition.controller";
import styles from "./CardCompetition.module.scss";

export default function CardCompetitionComponent(props: CardCompetitionProps) {
  const { user_name, balance, expire_at, logo, questions_count } =
    useCardCompetitionController(props);

  return (
    <div className={styles.card}>
      <Box className={styles.title}>
        <Avatar
          alt="avatar"
          src="/images/avatar-competition.svg"
          className={styles.avatar}
        />
        <Typography variant="body1" component="h6" className="strong">
          {user_name.split("_")[1]}
        </Typography>
      </Box>

      <Box className={styles.content}>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            تعداد سوال:
          </Typography>
          <Typography variant="body1">{questions_count} سوال</Typography>
        </div>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            میزان جایزه:
          </Typography>
          <Typography variant="body1">{balance} شیبا</Typography>
        </div>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            تاریخ اتمام:
          </Typography>
          <Typography variant="body1">{toJalaaliWithDay(expire_at)}</Typography>
        </div>
      </Box>

      <Box>
        <ButtonCustomComponent
          label="شرکت در مسابقه"
          color="primary"
          variant="contained"
        />
      </Box>
    </div>
  );
}
