import NoDataComponent from "@/core/components/common/NoData";
import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Avatar, Box, Container, Typography } from "@mui/material";
import CardLotteryComponent from "../../components/CardLottery";
import useLotteryController, { LotteryProps } from "./Lottery.controller";
import styles from "./Lottery.module.scss";

export default function LotteryPage(props: LotteryProps) {
  const { isData } = useLotteryController(props);

  return (
    <div className={styles.root}>
      <NavigationBottomComponent value={0}>
        <AppHeaderComponent title="قرعه‌کشی‌ها" />
        {isData ? (
          <Container maxWidth="lg">
            <Box>
              <CardLotteryComponent isFinish={false} />
              <CardLotteryComponent isFinish={true} />
            </Box>

            <Box className={styles.winner}>
              <div className={styles.title}>
                <Typography variant="body1" className="strong">
                  تعدادی از برندگان مسابقه پیشین
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
                  <Typography
                    variant="body1"
                    component="span"
                    className="strong"
                  >
                    100,۰۰۰
                  </Typography>
                  <Typography variant="body1" component="span">
                    شیبا
                  </Typography>
                </Box>

                <Box className={styles.nameOfTwo}>
                  <Typography
                    variant="body1"
                    component="span"
                    className="strong"
                  >
                    80,۰۰۰
                  </Typography>
                  <Typography variant="body1" component="span">
                    شیبا
                  </Typography>
                </Box>

                <Box className={styles.nameOfThree}>
                  <Typography
                    variant="body1"
                    component="span"
                    className="strong"
                  >
                    50,۰۰۰
                  </Typography>
                  <Typography variant="body1" component="span">
                    شیبا
                  </Typography>
                </Box>
              </div>
            </Box>
          </Container>
        ) : (
          <NoDataComponent
            label={"در حال حاضر قرعه‌کشی موجود نیست!"}
            srcImg="no-data-lottery"
          />
        )}
      </NavigationBottomComponent>
    </div>
  );
}
