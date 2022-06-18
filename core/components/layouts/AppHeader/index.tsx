import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import useAppHeaderController, { AppHeaderProps } from "./AppHeader.controller";
import styles from "./AppHeader.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";

export default function AppHeaderComponent(props: AppHeaderProps) {
  const { title } = useAppHeaderController(props);
  const router = useRouter();

  const btnButton = () => {
    return (
      // <div >
      <ArrowForwardIcon
        className={styles.arrow}
        onClick={() => {
          console.log("history", history.back());
          const backHistory: any = history.back();
          if (backHistory) {
            history.back();
          }
          //  else {
          //   router.push("/home");
          // }
        }}
      />
      // </div>
    );
  };

  return (
    <div className={styles.root}>
      <AppBar className={styles.appBar} position="fixed" color="inherit">
        <Container maxWidth="lg">
          <Toolbar className={styles.toolbar} disableGutters>
            <Box className={styles.box}>
              {btnButton()}
              <Typography variant="h6" component="h1" className="strong">
                {title}
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
