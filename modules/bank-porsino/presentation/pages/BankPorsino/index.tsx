import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Container } from "@mui/material";
import useBankPorsinoController, {
  BankPorsinoProps,
} from "./BankPorsino.controller";
import styles from "./BankPorsino.module.scss";

export default function BankPorsinoPage(props: BankPorsinoProps) {
  const {} = useBankPorsinoController(props);

  return (
    <NavigationBottomComponent value={3}>
      <Container maxWidth="lg"></Container>
    </NavigationBottomComponent>
  );
}
