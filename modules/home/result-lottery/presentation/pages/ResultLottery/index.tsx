import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Box, Container } from "@mui/material";
import CardResultLotteryComponent from "../../components/CardResultLottery";
import useResultLotteryController, {
  ResultLotteryProps,
} from "./ResultLottery.controller";
import styles from "./ResultLottery.module.scss";

export default function ResultLotteryPage(props: ResultLotteryProps) {
  const {} = useResultLotteryController(props);

  return (
    <div className={styles.root}>
      <NavigationBottomComponent value={0}>
        <AppHeaderComponent title="اسامی برندگان" />
        <Container maxWidth="lg">
          <Box className={styles.box}>
            <CardResultLotteryComponent />
            <CardResultLotteryComponent />
            <CardResultLotteryComponent />
            <CardResultLotteryComponent />
            <CardResultLotteryComponent />
            <CardResultLotteryComponent />
            <CardResultLotteryComponent />
            <CardResultLotteryComponent />
          </Box>
        </Container>
      </NavigationBottomComponent>
    </div>
  );
}
