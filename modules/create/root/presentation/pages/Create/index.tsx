import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import DrawerCreateComponent from "../../components/DrawerCreate";
import useCreateController, { CreateProps } from "./Create.controller";
import styles from "./Create.module.scss";

export default function CreatePage(props: CreateProps) {
  const { isShowDrawer, setisShowDrawer } = useCreateController(props);

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
            onClick={() => setisShowDrawer(true)}
          >
            <Image
              src="/images/create-survay.svg"
              // layout="fill"
              // objectFit="contain"
              width="100%"
              height="100%"
              layout="responsive"
              loading="lazy"
            />
          </Box>

          <DrawerCreateComponent
            value={isShowDrawer}
            setValue={setisShowDrawer}
          />

          <Box textAlign="center" className={styles.image}>
            <Image
              src="/images/create-competition.svg"
              // layout="fill"
              // objectFit="contain"
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
