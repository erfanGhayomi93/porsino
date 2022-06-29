import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Box, Chip, Container } from "@mui/material";
import CardBankComponent from "../../components/CardBank";
import FilterBoxComponent from "../../components/FilterBox";
import useBankPorsinoController, {
  BankPorsinoProps,
} from "./BankPorsino.controller";
import styles from "./BankPorsino.module.scss";
import { RiCloseLine } from "react-icons/ri";

export default function BankPorsinoPage(props: BankPorsinoProps) {
  const {} = useBankPorsinoController(props);

  const handleDelete = () => {};

  return (
    <NavigationBottomComponent value={3}>
      <AppHeaderComponent title="بانک پرسینو" />
      <Container maxWidth="lg">
        <div className={styles.root}>
          <FilterBoxComponent />

          {true && (
            <div className={styles.chips}>
              {dataChips.map((item, ind) => (
                <Chip
                  key={ind}
                  label={item.label}
                  className={styles.chip}
                  clickable
                  deleteIcon={<RiCloseLine className={styles.deleteIcon} />}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}

          <Box className={styles.cards}>
            <CardBankComponent />
            <CardBankComponent />
            <CardBankComponent />
            <CardBankComponent />
            <CardBankComponent />
          </Box>
        </div>
      </Container>
    </NavigationBottomComponent>
  );
}

const dataChips = [{ label: "آزمون" }, { label: "روان‌شناسی" }];
