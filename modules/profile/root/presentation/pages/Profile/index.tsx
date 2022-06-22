import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import useProfileController, { ProfileProps } from "./Profile.controller";
import styles from "./Profile.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SettingProfileComponent from "../../components/SettingProfile";
import Link from "next/link";

export default function ProfilePage(props: any) {
  const { isShowSettng, setIsShowSettng } = useProfileController(props);

  return (
    <div className={styles.root}>
      <NavigationBottomComponent value={4}>
        <AppHeaderComponent title="حساب کاربری" />
        <Container maxWidth="lg">
          <List className={styles.box}>
            <ListItem className={styles.listItem} disablePadding>
              <Link href="/profile/personalInformation" passHref>
                <ListItemButton className={styles.item}>
                  <ListItemText
                    className={styles.itemText}
                    primary="اطلاعات شخصی"
                  />
                  <ListItemIcon className={styles.itemIcon}>
                    <ArrowBackIosNewIcon className={styles.arrow} />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem className={styles.listItem} disablePadding>
              <ListItemButton
                className={styles.item}
                onClick={() => setIsShowSettng(true)}
              >
                <ListItemText
                  className={styles.itemText}
                  primary="تنظیمات اعلانات"
                />
                <ListItemIcon className={styles.itemIcon}>
                  <ArrowBackIosNewIcon className={styles.arrow} />
                </ListItemIcon>
              </ListItemButton>

              <SettingProfileComponent
                value={isShowSettng}
                setValue={setIsShowSettng}
              />
            </ListItem>

            <ListItem className={styles.listItem} disablePadding>
              <Link href="/profile/myCompetitions" passHref>
                <ListItemButton className={styles.item}>
                  <ListItemText
                    className={styles.itemText}
                    primary="مسابقه‌های من"
                  />
                  <ListItemIcon className={styles.itemIcon}>
                    <ArrowBackIosNewIcon className={styles.arrow} />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem className={styles.listItem} disablePadding>
              <Link href="/profile/mySurvay" passHref>
                <ListItemButton className={styles.item}>
                  <ListItemText
                    className={styles.itemText}
                    primary="نظرسنجی‌های من"
                  />
                  <ListItemIcon className={styles.itemIcon}>
                    <ArrowBackIosNewIcon className={styles.arrow} />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem className={styles.listItem} disablePadding>
              <Link href="/profile/myFavorites" passHref>
                <ListItemButton className={styles.item}>
                  <ListItemText
                    className={styles.itemText}
                    primary="علاقه‌مند‌ی‌ها"
                  />
                  <ListItemIcon className={styles.itemIcon}>
                    <ArrowBackIosNewIcon className={styles.arrow} />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Container>
      </NavigationBottomComponent>
    </div>
  );
}
