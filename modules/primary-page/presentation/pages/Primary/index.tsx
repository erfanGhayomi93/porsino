import usePrimaryController, { PrimaryProps } from "./Primary.controller";
import styles from "./Primary.module.scss";
import localize from "@/core/localization";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { Typography } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";

export default function PrimaryPage(props: PrimaryProps) {
  const { initialize } = usePrimaryController(props);

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
          [styles.secondary]: true,
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
              <Image src="/images/slide1.svg" width={200} height={300} />
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
              <Image src="/images/slide2.svg" width={235} height={240} />
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
              <Image src="/images/slide3.svg" width={312} height={220} />
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
          <Link href="/home" passHref>
            <a>
              <Image src="/images/arrow-left.svg" width={50} height={50} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
