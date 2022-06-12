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
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";

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
        <List>{children}</List>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100 }}
          elevation={3}
        >
          <BottomNavigation showLabels value={value}>
            <BottomNavigationAction
              classes={{
                root: styles.BottomNavigation,
                selected: styles.BottomNavigationSelected,
              }}
              label={"خانه"}
              icon={<HomeIcon />}
              onClick={() => handleRouteNavigationBottom("/home")}
            />

            <BottomNavigationAction
              classes={{
                root: styles.BottomNavigation,
                selected: styles.BottomNavigationSelected,
              }}
              label={"اعتبار"}
              icon={<AccountBalanceWalletIcon />}
              onClick={() => handleRouteNavigationBottom("/credit")}
            />
            <BottomNavigationAction
              classes={{
                root: styles.BottomNavigation,
                selected: styles.BottomNavigationSelected,
              }}
              label="ساختن"
              icon={<AddCircleOutlineIcon />}
            />
            <BottomNavigationAction
              classes={{
                root: styles.BottomNavigation,
                selected: styles.BottomNavigationSelected,
              }}
              label="نتایج"
              icon={<NewspaperIcon />}
            />
            <BottomNavigationAction
              classes={{
                root: styles.BottomNavigation,
                selected: styles.BottomNavigationSelected,
              }}
              label="پروفایل"
              icon={<PersonIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}
