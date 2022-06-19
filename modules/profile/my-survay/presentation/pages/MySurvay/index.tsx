import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Container } from "@mui/material";
import CardMySurvayComponent from "../../components/CardMySurvay";
import useMySurvayController, { MySurvayProps } from "./MySurvay.controller";
import styles from "./MySurvay.module.scss";

export default function MySurvayPage(props: MySurvayProps) {
  const {} = useMySurvayController(props);

  return (
    <NavigationBottomComponent value={4}>
      <AppHeaderComponent title="نظرسنجی های من" />
      <Container maxWidth="lg">
        <div className={styles.root}>
          <CardMySurvayComponent />
          <CardMySurvayComponent />
          <CardMySurvayComponent />
        </div>
      </Container>
    </NavigationBottomComponent>
  );
}
