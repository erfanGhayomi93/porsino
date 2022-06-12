import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import useHomeController, { HomeProps } from "./Home.controller";
import styles from "./Home.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CardProperPersonsComponent from "../../components/CardProperPersons";
import Banner from "@/public/images/banner-home.svg";
import { useRouter } from "next/router";

export default function HomePage(props: HomeProps) {
  const {} = useHomeController(props);
  const router = useRouter();

  const handleRoute = (path: string): void => {
    router.push(path);
  };

  return (
    <>
      <NavigationBottomComponent value={0}>
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
                  2,۰۰۰
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
                120
              </Typography>
            </div>
          </Box>

          <Box className={styles.todayPrograms}>
            <div className={styles.title}>
              <div className={styles.item}>
                <Image src="/images/newsPaper.svg" width={15} height={15} />
                <Typography variant="h6" component="h6" className="strong">
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
                <div>
                  <Image src="/images/survay-icon.svg" width={56} height={56} />
                  <Typography variant="body1" component="p">
                    ۴ نظر سنجی موجود است
                  </Typography>
                </div>
                <div>
                  <ArrowBackIosNewIcon />
                </div>
              </div>
              <div
                className={styles.item}
                onClick={() => handleRoute("/home/competition")}
              >
                <div>
                  <Image
                    src="/images/competition-icon.svg"
                    width={56}
                    height={56}
                  />
                  <Typography variant="body1" component="p">
                    2 مسابقه موجود است
                  </Typography>
                </div>
                <div>
                  <ArrowBackIosNewIcon />
                </div>
              </div>

              <div className={styles.item}>
                <div>
                  <Image
                    src="/images/lottery-icon.svg"
                    width={56}
                    height={56}
                  />
                  <Typography variant="body1" component="p">
                    اطلاع رسانی قرعه‌کشی‌ها
                  </Typography>
                </div>
                <div>
                  <ArrowBackIosNewIcon />
                </div>
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
              <CardProperPersonsComponent />
              <CardProperPersonsComponent />
              <CardProperPersonsComponent />
              <CardProperPersonsComponent />
            </div>
          </div>
        </Box>
      </NavigationBottomComponent>
    </>
  );
}
