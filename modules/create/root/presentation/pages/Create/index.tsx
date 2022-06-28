import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import DrawerCreateBlankComponent from "../../components/DrawerCreateBlankSurvay";
import DrawerCreateReadyComponent from "../../components/DrawerCreateReadySurvay";
import useCreateController, { CreateProps } from "./Create.controller";
import styles from "./Create.module.scss";

export default function CreatePage(props: CreateProps) {
  const {
    isShowDrawerBlank,
    setisShowDrawerBlank,
    isShowDrawerReady,
    setisShowDrawerReady,
    router,
  } = useCreateController(props);

  return (
    <NavigationBottomComponent value={2}>
      <AppHeaderComponent title="ساختن" />
      <Container maxWidth="lg">
        <div className={styles.root}>
          <Typography variant="body1" className="weight-600">
            یکی از موارد زیر را انتخاب کنید:
          </Typography>
          <Box
            textAlign="center"
            className={styles.image}
            onClick={() => setisShowDrawerBlank(true)}
          >
            <Image
              src="/images/create-survay.svg"
              width="100%"
              height="100%"
              layout="responsive"
              loading="lazy"
            />
          </Box>
          <DrawerCreateBlankComponent
            value={isShowDrawerBlank}
            setisShowDrawerBlank={setisShowDrawerBlank}
            setisShowDrawerReady={setisShowDrawerReady}
          />
          <DrawerCreateReadyComponent
            value={isShowDrawerReady}
            setValue={setisShowDrawerReady}
          />

          <Box
            textAlign="center"
            className={styles.image}
            onClick={() => router.push("/create/newCompetition")}
          >
            <Image
              src="/images/create-competition.svg"
              width="100%"
              height="100%"
              layout="responsive"
              loading="lazy"
            />
          </Box>
        </div>
      </Container>
    </NavigationBottomComponent>
  );
}
