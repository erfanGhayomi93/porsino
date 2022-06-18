import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Container } from "@mui/material";
import CardMyCompetitionComponent from "../../components/CardMyCompetition";
import useMyCompetitionsController, {
  MyCompetitionsProps,
} from "./MyCompetitions.controller";
import styles from "./MyCompetitions.module.scss";

export default function MyCompetitionsPage(props: MyCompetitionsProps) {
  const {} = useMyCompetitionsController(props);

  return (
    <NavigationBottomComponent value={4}>
      <AppHeaderComponent title="مسابقه های من" />
      <Container maxWidth="lg">
        <div className={styles.root}>
          <CardMyCompetitionComponent />
          <CardMyCompetitionComponent />
          <CardMyCompetitionComponent />
          <CardMyCompetitionComponent />
        </div>
      </Container>
    </NavigationBottomComponent>
  );
}
