import useNavigationBottomController, {
  NavigationBottomProps,
} from "./NavigationBottom.controller";
import styles from "./NavigationBottom.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import { useRouter } from "next/router";
import {
  RiNewspaperFill,
  RiNewspaperLine,
  RiUserLine,
  RiUserFill,
  RiHome5Fill,
  RiWallet2Line,
  RiAddCircleFill,
  RiAddCircleLine,
  RiWallet2Fill,
} from "react-icons/ri";

export default function NavigationBottomComponent(
  props: NavigationBottomProps
) {
  const { value, children } = useNavigationBottomController(props);
  const router = useRouter();

  const handleRouteNavigationBottom = (path: string): void => {
    router.push(path);
  };

  return (
    <div className={styles.root}>
      <Box sx={{ pb: 7 }}>
        <List disablePadding>{children}</List>
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 100,
          }}
          elevation={4}
        >
          <BottomNavigation showLabels value={value}>
            <BottomNavigationAction
              classes={{
                selected: styles.BottomNavigationSelected,
                label: styles.BottomNavigation,
              }}
              label={"خانه"}
              icon={<RiHome5Fill className={styles.icon} />}
              onClick={() => handleRouteNavigationBottom("/home")}
            />

            <BottomNavigationAction
              classes={{
                selected: styles.BottomNavigationSelected,
                label: styles.BottomNavigation,
              }}
              label={"اعتبار"}
              icon={
                value === 1 ? (
                  <RiWallet2Fill className={styles.icon} />
                ) : (
                  <RiWallet2Line className={styles.icon} />
                )
              }
              onClick={() => handleRouteNavigationBottom("/credit")}
            />
            <BottomNavigationAction
              classes={{
                selected: styles.BottomNavigationSelected,
                label: styles.BottomNavigation,
              }}
              label="ساختن"
              icon={
                value === 2 ? (
                  <RiAddCircleFill className={styles.icon} />
                ) : (
                  <RiAddCircleLine className={styles.icon} />
                )
              }
              onClick={() => handleRouteNavigationBottom("/create")}
            />
            <BottomNavigationAction
              classes={{
                selected: styles.BottomNavigationSelected,
                label: styles.BottomNavigation,
              }}
              label="بانک پرسینو"
              icon={
                value === 3 ? (
                  <RiNewspaperFill className={styles.icon} />
                ) : (
                  <RiNewspaperLine className={styles.icon} />
                )
              }
              onClick={() => handleRouteNavigationBottom("/bankPorsino")}
            />
            <BottomNavigationAction
              classes={{
                selected: styles.BottomNavigationSelected,
                label: styles.BottomNavigation,
              }}
              label="پروفایل"
              icon={
                value === 4 ? (
                  <RiUserFill className={styles.icon} />
                ) : (
                  <RiUserLine className={styles.icon} />
                )
              }
              onClick={() => handleRouteNavigationBottom("/profile")}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}
