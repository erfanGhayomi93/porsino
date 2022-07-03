import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import useHomeController, { HomeProps } from "./Home.controller";
import styles from "./Home.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CardProperPersonsComponent from "../../components/CardProperPersons";
import Banner from "@/public/images/banner-home.svg";
import { useRouter } from "next/router";
import AppHeaderComponent from "@/core/components/layouts/AppHeader";

export default function HomePage(props: HomeProps) {
  const { data } = useHomeController(props);
  const router = useRouter();

  const handleRoute = (path: string): void => {
    router.push(path);
  };

  return (
    <>
      <NavigationBottomComponent value={0}>
        <AppHeaderComponent title="پرسینو" />

        <Container maxWidth="lg" className={styles.root}>
          <Box className={styles.imgCard}>
            <div className={styles.item}>
              <Typography
                variant="body1"
                component="span"
                className={styles.muted}
              >
                موجودی ارزنظر:
              </Typography>
              <p>
                <Typography variant="body1" component="span">
                  {data.balance}
                </Typography>
                <Typography variant="body1" component="span">
                  شیبا
                </Typography>
              </p>
            </div>
            <div className={styles.item}>
              <Typography
                variant="body1"
                component="span"
                className={styles.muted}
              >
                رتبه شما‌:
              </Typography>
              <Typography variant="body1" component="span">
                {data.level}
              </Typography>
            </div>
          </Box>

          <Box className={styles.todayPrograms}>
            <div className={styles.title}>
              <div className={styles.item}>
                <svg>
                  <use xlinkHref="/sprit.svg#newsPaper"></use>
                </svg>
                <Typography variant="h6" component="h6" className="weight-600">
                  برنامه‌های امروز
                </Typography>
              </div>
              <Typography variant="body1" component="span">
                ۲ تیر ۱۴۰۱
              </Typography>
            </div>

            <div className={styles.content}>
              <div
                className={styles.item}
                onClick={() => handleRoute("/home/survay")}
              >
                <Box display="flex" alignItems="center">
                  <Image src="/images/survay-icon.svg" width={56} height={56} />

                  <Box className={styles.box}>
                    <Typography
                      variant="h3"
                      component="span"
                      className="weight-600"
                    >
                      {data.active_polls}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className="weight-600"
                    >
                      نظر سنجی موجود است
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <ArrowBackIosNewIcon />
                </Box>
              </div>

              <div
                className={styles.item}
                onClick={() => handleRoute("/home/competition")}
              >
                <Box display="flex" alignItems="center">
                  <Image
                    src="/images/competition-icon.svg"
                    width={56}
                    height={56}
                  />

                  <Box className={styles.box}>
                    <Typography
                      variant="h3"
                      component="span"
                      className="weight-600"
                    >
                      {data.active_competitions}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className="weight-600"
                    >
                      مسابقه موجود است
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <ArrowBackIosNewIcon />
                </Box>
              </div>

              <div
                className={styles.item}
                onClick={() => handleRoute("/home/lottery")}
              >
                <Box display="flex" alignItems="center">
                  <Image
                    src="/images/lottery-icon.svg"
                    width={56}
                    height={56}
                  />

                  <Box className={styles.box}>
                    <Typography
                      variant="body1"
                      component="span"
                      className="weight-600"
                    >
                      اطلاع رسانی قرعه‌کشی‌ها
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <ArrowBackIosNewIcon />
                </Box>
              </div>
            </div>
          </Box>

          <Box className={styles.banner}>
            <Image src={Banner} layout="fill" objectFit="contain" />
          </Box>
        </Container>

        <Box className={styles.properPerson}>
          <div className={styles.title}>
            <Image
              width={15.75}
              height={15.75}
              src="/images/properPerson.svg"
            />
            <Typography variant="h6" component="h6" className="strong">
              کاربران برتر پرسینو
            </Typography>
          </div>
          <div className={styles.content}>
            <div className={styles.box}>
              {data.top_users.map((item: any, ind: number) => {
                const { balance, user_name, avatar } = item;
                return (
                  <CardProperPersonsComponent
                    key={ind}
                    {...{ balance, user_name, avatar }}
                    index={ind}
                  />
                );
              })}
            </div>
          </div>
        </Box>
      </NavigationBottomComponent>
    </>
  );
}
