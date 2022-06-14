import { ArrowForwardIos } from "@mui/icons-material";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import useAppHeaderController, { AppHeaderProps } from "./AppHeader.controller";
import styles from "./AppHeader.module.scss";

export default function AppHeaderComponent(props: AppHeaderProps) {
  const { title } = useAppHeaderController(props);

  const btnButton = () => {
    return (
      <div className={styles.arrow} onClick={() => history.back()}>
        <ArrowForwardIos />
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <AppBar className={styles.appBar} position="fixed" color="inherit">
        <Container maxWidth="lg">
          <Toolbar className={styles.toolbar} disableGutters>
            <Box className={styles.box}>
              {btnButton()}
              <Typography component="h1" className="strong">
                {title}
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
