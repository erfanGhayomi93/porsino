import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import NoDataComponent from "@/core/components/common/NoData";
import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import CardSurvayComponent from "../../components/CardSurvay";
import useSurvayController, { SurvayProps } from "./Survay.controller";
import styles from "./Survay.module.scss";

export default function SurvayPage(props: SurvayProps) {
  const { data, isData } = useSurvayController(props);

  if (!isData) {
    return (
      <NavigationBottomComponent value={0}>
        <AppHeaderComponent title="نظرسنجی‌ها" />

        <NoDataComponent
          label={"در حال حاضر نظرسنجی موجود نیست!"}
          srcImg="no-data-survay"
        />
      </NavigationBottomComponent>
    );
  }

  return (
    <div className={styles.root}>
      <Container>
        <NavigationBottomComponent value={0}>
          <AppHeaderComponent title="نظرسنجی‌ها" />

          {data?.map((item: any) => {
            const { expire_at, title, logo, hash } = item;
            return (
              <CardSurvayComponent
                key={item.id}
                {...{ expire_at, title, logo, hash }}
              />
            );
          })}
        </NavigationBottomComponent>
      </Container>

      <div className={styles.popularSurvay}>
        <div className={styles.title}>
          <Image width={13.5} height={15} src="/images/survay-popular.svg" />
          <Typography variant="h6" component="h6" className="strong">
            نظرسنجی‌های محبوب
          </Typography>
        </div>

        <div className={styles.content}>
          <div className={styles.box}>
            <div className={styles.item}>
              <Typography variant="body1">موضوع نظرسنجی</Typography>
              <div className={styles.boxButton}>
                <ButtonCustomComponent
                  variant="contained"
                  color="secondary"
                  label={"مشاهده"}
                />
              </div>
            </div>

            <div className={styles.item}>
              <Typography variant="body1">موضوع نظرسنجی</Typography>
              <div className={styles.boxButton}>
                <ButtonCustomComponent
                  variant="contained"
                  color="secondary"
                  label={"مشاهده"}
                />
              </div>
            </div>

            <div className={styles.item}>
              <Typography variant="body1">موضوع نظرسنجی</Typography>
              <div className={styles.boxButton}>
                <ButtonCustomComponent
                  variant="contained"
                  color="secondary"
                  label={"مشاهده"}
                />
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.item}>
              <Typography variant="body1">موضوع نظرسنجی</Typography>
              <div className={styles.boxButton}>
                <ButtonCustomComponent
                  variant="contained"
                  color="secondary"
                  label={"مشاهده"}
                />
              </div>
            </div>

            <div className={styles.item}>
              <Typography variant="body1">موضوع نظرسنجی</Typography>
              <div className={styles.boxButton}>
                <ButtonCustomComponent
                  variant="contained"
                  color="secondary"
                  label={"مشاهده"}
                />
              </div>
            </div>

            <div className={styles.item}>
              <Typography variant="body1">موضوع نظرسنجی</Typography>
              <div className={styles.boxButton}>
                <ButtonCustomComponent
                  variant="contained"
                  color="secondary"
                  label={"مشاهده"}
                />
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.item}>
              <Typography variant="body1">موضوع نظرسنجی</Typography>
              <div className={styles.boxButton}>
                <ButtonCustomComponent
                  variant="contained"
                  color="secondary"
                  label={"مشاهده"}
                />
              </div>
            </div>

            <div className={styles.item}>
              <Typography variant="body1">موضوع نظرسنجی</Typography>
              <div className={styles.boxButton}>
                <ButtonCustomComponent
                  variant="contained"
                  color="secondary"
                  label={"مشاهده"}
                />
              </div>
            </div>

            <div className={styles.item}>
              <Typography variant="body1">موضوع نظرسنجی</Typography>
              <div className={styles.boxButton}>
                <ButtonCustomComponent
                  variant="contained"
                  color="secondary"
                  label={"مشاهده"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
