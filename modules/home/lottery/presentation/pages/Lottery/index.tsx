import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Container } from "@mui/material";
import CardLotteryComponent from "../../components/CardLottery";
import useLotteryController, { LotteryProps } from "./Lottery.controller";
import styles from "./Lottery.module.scss";

export default function LotteryPage(props: LotteryProps) {
  const {} = useLotteryController(props);

  return (
    <div className={styles.root}>
      <NavigationBottomComponent value={0}>
        <AppHeaderComponent title="قرعه‌کشی‌ها" />

        <Container maxWidth="lg">
          <CardLotteryComponent isFinish={false} />
          <CardLotteryComponent isFinish={true} />
          <CardLotteryComponent isFinish={true} />
        </Container>
      </NavigationBottomComponent>
    </div>
  );
}
