import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Box, Container, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import AgeRangeComponent from "../../components/AgeRange";
import GenderTypeComponent from "../../components/GenderType";
import usePersonalInformationController, {
  PersonalInformationProps,
} from "./PersonalInformation.controller";
import styles from "./PersonalInformation.module.scss";

export default function PersonalInformationPage(
  props: PersonalInformationProps
) {
  const { isShowGender, setIsShowGender, isShowAge, setIsShowAge } =
    usePersonalInformationController(props);

  return (
    <div>
      <NavigationBottomComponent value={4}>
        <AppHeaderComponent title="اطلاعات شخصی" />
        <Container maxWidth="lg">
          <div className={styles.root}>
            <Box className={styles.avatar}>
              <Image src="/images/avatar-profile.svg" width={60} height={60} />
            </Box>
            <Typography className={styles.title} variant="h6">
              مشخصات حساب کاربری:
            </Typography>

            <Box className={styles.content}>
              <div className={styles.item}>
                <Box display="flex">
                  <Typography variant="body1" color="divider">
                    جنسیت:
                  </Typography>
                  <Typography variant="body1" className={styles.text}>
                    خانم
                  </Typography>
                </Box>
                <IconButton onClick={() => setIsShowGender(true)}>
                  <Image src="/images/edit.svg" width={18} height={18} />
                </IconButton>

                <GenderTypeComponent
                  value={isShowGender}
                  setValue={setIsShowGender}
                />
              </div>

              <div className={styles.item}>
                <Box display="flex">
                  <Typography variant="body1" color="divider">
                    بازه سنی:
                  </Typography>
                  <Typography variant="body1" className={styles.text}>
                    ۲۵ تا ۳۴ سال
                  </Typography>
                </Box>
                <IconButton onClick={() => setIsShowAge(true)}>
                  <Image src="/images/edit.svg" width={18} height={18} />
                </IconButton>

                <AgeRangeComponent value={isShowAge} setValue={setIsShowAge} />
              </div>
            </Box>
          </div>
        </Container>
      </NavigationBottomComponent>
    </div>
  );
}
