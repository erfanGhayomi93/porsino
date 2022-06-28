import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Box, Container } from "@mui/material";
import CardBankComponent from "../../components/CardBank";
import FilterBoxComponent from "../../components/FilterBox";
import useBankPorsinoController, {
  BankPorsinoProps,
} from "./BankPorsino.controller";
import styles from "./BankPorsino.module.scss";

export default function BankPorsinoPage(props: BankPorsinoProps) {
  const {} = useBankPorsinoController(props);

  return (
    <NavigationBottomComponent value={3}>
      <AppHeaderComponent title="بانک پرسینو" />
      <Container maxWidth="lg">
        <FilterBoxComponent />

        <Box className={styles.cards}>
          <CardBankComponent />
          <CardBankComponent />
          <CardBankComponent />
          <CardBankComponent />
          <CardBankComponent />
        </Box>
      </Container>
    </NavigationBottomComponent>
  );
}
