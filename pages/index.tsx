import localize from "@/core/localization";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Home: NextPage = () => {
  const [initialize, setInitialize] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialize(true);
    }, 2000);
  }, []);

  return (
    <div className={styles.root}>
      <Head>
        <title>{localize("HOME__TITLE")}</title>
        <meta name="description" content="porsino in bitbarg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={clsx({
          [styles.loaded]: initialize,
        })}
      >
        <div className={styles.porsino}>
          <Image src="/images/porsino.svg" width={230} height={60} />
        </div>
        <div className={styles.powered}>
          <Image src="/images/poweredByBitbarg.svg" width={118} height={25} />
        </div>
      </div>

      <div
        className={clsx({
          [styles.loaded]: !initialize,
        })}
      >
        <div className={styles.circle}></div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className={styles.sliderWrapper}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.logoSlide}>
              <Image src="/images/logo-slide1.svg" width={200} height={200} />
            </div>
            <div className={styles.content}>
              <Typography variant="h6" className="strong">
                ایــنجا می‌تــونی توی نظــرسنــجی‌ها
              </Typography>
              <Typography variant="h6">
                شـرکت کنـی و ازش کسب درآمــد کنی
              </Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.logoSlide}>
              <Image src="/images/logo-slide2.svg" width={200} height={200} />
              <div className={styles.content}>
                <Typography variant="h6" className="strong">
                  ایــنجا می‌تــونی توی نظــرسنــجی‌ها
                </Typography>
                <Typography variant="h6">
                  شـرکت کنـی و ازش کسب درآمــد کنی
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.logoSlide}>
              <Image src="/images/logo-slide3.svg" width={200} height={200} />
              <div className={styles.content}>
                <Typography variant="h6" className="strong">
                  خودت می‌تونی نظرسنجی و مسابقه
                </Typography>
                <Typography variant="h6">
                  ایجاد کنی و برای دیـگران ارســال کنـی
                </Typography>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={styles.arrow}>
          <Image src="/images/arrow-left.svg" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Home;
