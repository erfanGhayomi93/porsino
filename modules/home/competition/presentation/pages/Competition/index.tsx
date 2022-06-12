import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Avatar, Box, Container, Typography } from "@mui/material";
import CardCompetitionComponent from "../../components/CardCompetition";
import useCompetitionController, {
  CompetitionProps,
} from "./Competition.controller";
import styles from "./Competition.module.scss";

export default function CompetitionPage(props: CompetitionProps) {
  const {} = useCompetitionController(props);

  return (
    <NavigationBottomComponent value={0}>
      <Container className={styles.root}>
        <Box>
          <CardCompetitionComponent />
          <CardCompetitionComponent />
        </Box>
        <Box className={styles.winner}>
          <div className={styles.title}>
            <Typography variant="body1" className="strong">
              برندگان مسابقه اسم مسابقه
            </Typography>
          </div>
          <div>
            <Avatar
              alt="avatar"
              src="/images/avatar.svg"
              className={styles.presonOfOne}
            />
            <Avatar
              alt="avatar"
              src="/images/avatar.svg"
              className={styles.presonOfTwo}
            />
            <Avatar
              alt="avatar"
              src="/images/avatar.svg"
              className={styles.presonOfThree}
            />
          </div>

          <div className={styles.names}>
            <Box className={styles.nameOfOne}>
              <Typography variant="body1" component="span" className="strong">
                100,۰۰۰
              </Typography>
              <Typography variant="body1" component="span">
                شیبا
              </Typography>
            </Box>

            <Box className={styles.nameOfTwo}>
              <Typography variant="body1" component="span" className="strong">
                80,۰۰۰
              </Typography>
              <Typography variant="body1" component="span">
                شیبا
              </Typography>
            </Box>

            <Box className={styles.nameOfThree}>
              <Typography variant="body1" component="span" className="strong">
                50,۰۰۰
              </Typography>
              <Typography variant="body1" component="span">
                شیبا
              </Typography>
            </Box>
          </div>
        </Box>
      </Container>
    </NavigationBottomComponent>
  );
}
