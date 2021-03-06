import ButtonCustomComponent from "@/core/components/common/ButtonCustom";
import NoDataComponent from "@/core/components/common/NoData";
import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Avatar, Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import CardCompetitionComponent from "../../components/CardCompetition";
import useCompetitionController, {
  CompetitionProps,
} from "./Competition.controller";
import styles from "./Competition.module.scss";

export default function CompetitionPage(props: CompetitionProps) {
  const { isData, data } = useCompetitionController(props);

  return (
    <NavigationBottomComponent value={0}>
      <AppHeaderComponent title="مسابقه‌ها" />

      {isData ? (
        <Container className={styles.root}>
          <Box className={styles.cards}>
            {data.map((item: any) => {
              const { user_name, balance, expire_at, logo, id } = item;
              const { questions_count } = item.form;
              return (
                <CardCompetitionComponent
                  key={id}
                  {...{ user_name, balance, expire_at, logo, questions_count }}
                />
              );
            })}
          </Box>

          <div className={styles.title}>
            <Image width={13.5} height={15} src="/images/survay-popular.svg" />
            <Typography variant="h6" component="h6" className="weight-600">
              مسابقه‌های پیشین
            </Typography>
          </div>

          <Box className={styles.prevCompetitions}>
            <div className={styles.box}>
              <div className={styles.item}>
                <Typography variant="body1">موضوع مسابقه</Typography>
                <div className={styles.boxButton}>
                  <ButtonCustomComponent
                    variant="contained"
                    color="secondary"
                    label={"مشاهده"}
                  />
                </div>
              </div>

              <div className={styles.item}>
                <Typography variant="body1">موضوع مسابقه</Typography>
                <div className={styles.boxButton}>
                  <ButtonCustomComponent
                    variant="contained"
                    color="secondary"
                    label={"مشاهده"}
                  />
                </div>
              </div>

              <div className={styles.item}>
                <Typography variant="body1">موضوع مسابقه</Typography>
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
                <Typography variant="body1">موضوع مسابقه</Typography>
                <div className={styles.boxButton}>
                  <ButtonCustomComponent
                    variant="contained"
                    color="secondary"
                    label={"مشاهده"}
                  />
                </div>
              </div>

              <div className={styles.item}>
                <Typography variant="body1">موضوع مسابقه</Typography>
                <div className={styles.boxButton}>
                  <ButtonCustomComponent
                    variant="contained"
                    color="secondary"
                    label={"مشاهده"}
                  />
                </div>
              </div>

              <div className={styles.item}>
                <Typography variant="body1">موضوع مسابقه</Typography>
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
                <Typography variant="body1">موضوع مسابقه</Typography>
                <div className={styles.boxButton}>
                  <ButtonCustomComponent
                    variant="contained"
                    color="secondary"
                    label={"مشاهده"}
                  />
                </div>
              </div>

              <div className={styles.item}>
                <Typography variant="body1">موضوع مسابقه</Typography>
                <div className={styles.boxButton}>
                  <ButtonCustomComponent
                    variant="contained"
                    color="secondary"
                    label={"مشاهده"}
                  />
                </div>
              </div>

              <div className={styles.item}>
                <Typography variant="body1">موضوع مسابقه</Typography>
                <div className={styles.boxButton}>
                  <ButtonCustomComponent
                    variant="contained"
                    color="secondary"
                    label={"مشاهده"}
                  />
                </div>
              </div>
            </div>
          </Box>
        </Container>
      ) : (
        <NoDataComponent
          label={"در حال حاضر مسابقه موجود نیست!"}
          srcImg="no-data-competitions"
        />
      )}
    </NavigationBottomComponent>
  );
}
