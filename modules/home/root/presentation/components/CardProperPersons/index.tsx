import { Avatar, Box, Typography } from "@mui/material";
import useCardProperPersonsController, {
  CardProperPersonsProps,
} from "./CardProperPersons.controller";
import styles from "./CardProperPersons.module.scss";

export default function CardProperPersonsComponent(
  props: CardProperPersonsProps
) {
  const { balance, user_name, avatar, index } =
    useCardProperPersonsController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.surface}>
        <Avatar
          alt="avatar"
          src={
            avatar
              ? `/images/avatar/${avatar}.svg`
              : "http://65.21.109.77/assets/images/logo.png"
          }
        />
        <Typography variant="body1" className="strong">
          {user_name.split("_")[1]}
        </Typography>
      </Box>
      <Box className={styles.content}>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            رتبه:
          </Typography>
          <Typography variant="body1" component="span">
            {index + 1}
          </Typography>
        </div>
        <div className={styles.item}>
          <Typography variant="body1" component="span">
            اعتبار:
          </Typography>
          <Typography variant="body1" component="span">
            {balance} شیبا
          </Typography>
        </div>
      </Box>
    </div>
  );
}
