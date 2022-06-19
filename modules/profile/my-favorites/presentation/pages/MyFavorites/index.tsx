import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Container } from "@mui/material";
import CardMyFavoritsComponent from "../../components/CardMyFavorits";
import useMyFavoritesController, {
  MyFavoritesProps,
} from "./MyFavorites.controller";
import styles from "./MyFavorites.module.scss";

export default function MyFavoritesPage(props: MyFavoritesProps) {
  const {} = useMyFavoritesController(props);

  return (
    <NavigationBottomComponent value={4}>
      <AppHeaderComponent title="نشان شده ها" />
      <Container maxWidth="lg">
        <div className={styles.root}>
          <CardMyFavoritsComponent />
          <CardMyFavoritsComponent />
          <CardMyFavoritsComponent />
          <CardMyFavoritsComponent />
        </div>
      </Container>
    </NavigationBottomComponent>
  );
}
