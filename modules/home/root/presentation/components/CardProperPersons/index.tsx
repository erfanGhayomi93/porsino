import { Avatar, Box, Typography } from "@mui/material";
import useCardProperPersonsController, {
  CardProperPersonsProps,
} from "./CardProperPersons.controller";
import styles from "./CardProperPersons.module.scss";

export default function CardProperPersonsComponent(
  props: CardProperPersonsProps
) {
  const {} = useCardProperPersonsController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.surface}>
        <Avatar alt="avatar" src="/images/avatar.svg" />
        <Typography variant="body1" className="strong">
          فرینوش موگویی
        </Typography>
      </Box>
      <Box className={styles.content}>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            رتبه:
          </Typography>
          <Typography variant="body1" component="span">
            ۲۰۰
          </Typography>
        </div>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            اعتبار:
          </Typography>
          <Typography variant="body1" component="span">
            550,۰۰۰ شیبا
          </Typography>
        </div>
      </Box>
    </div>
  );
}
