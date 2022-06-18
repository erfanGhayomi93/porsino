import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import {
  Box,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import useProfileController, { ProfileProps } from "./Profile.controller";
import styles from "./Profile.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SettingProfileComponent from "../../components/SettingProfile";

export default function ProfilePage(props: any) {
  const { isShowSettng, setIsShowSettng } = useProfileController(props);

  return (
    <div className={styles.root}>
      <NavigationBottomComponent value={4}>
        <AppHeaderComponent title="حساب کاربری" />
        <Container maxWidth="lg">
          <List className={styles.box}>
            <ListItem className={styles.listItem} disablePadding>
              <ListItemButton
                className={styles.item}
                LinkComponent={Link}
                href="/profile/personalInformation"
              >
                <ListItemText
                  className={styles.itemText}
                  primary="اطلاعات شخصی"
                />
                <ListItemIcon className={styles.itemIcon}>
                  <ArrowBackIosNewIcon className={styles.arrow} />
                </ListItemIcon>
              </ListItemButton>
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
              <ListItemButton
                className={styles.item}
                LinkComponent={Link}
                href="/profile/myCompetitions"
              >
                <ListItemText
                  className={styles.itemText}
                  primary="مسابقه‌های من"
                />
                <ListItemIcon className={styles.itemIcon}>
                  <ArrowBackIosNewIcon className={styles.arrow} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem className={styles.listItem} disablePadding>
              <ListItemButton className={styles.item}>
                <ListItemText
                  className={styles.itemText}
                  primary="نظرسنجی‌های من"
                />
                <ListItemIcon className={styles.itemIcon}>
                  <ArrowBackIosNewIcon className={styles.arrow} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem className={styles.listItem} disablePadding>
              <ListItemButton className={styles.item}>
                <ListItemText
                  className={styles.itemText}
                  primary="علاقه‌مند‌ی‌ها"
                />
                <ListItemIcon className={styles.itemIcon}>
                  <ArrowBackIosNewIcon className={styles.arrow} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Container>
      </NavigationBottomComponent>
    </div>
  );
}
