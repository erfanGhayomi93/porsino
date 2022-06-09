import useAppController, { AppProps } from "./App.controller";
import styles from "./App.module.scss";
import { Grow, CssBaseline, IconButton } from "@mui/material";
import { SnackbarProvider } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import WarningIcon from "@mui/icons-material/Warning";
import LoadingComponent from "@/core/components/common/loading";

export default function AppPage(props: AppProps) {
  const { onClickDismiss, notistackRef, Component, pageProps } =
    useAppController(props);

  return (
    <div className={styles.root}>
      <SnackbarProvider
        maxSnack={3}
        TransitionComponent={Grow as any}
        ref={notistackRef}
        autoHideDuration={3000}
        action={(key) => (
          <IconButton color="inherit" onClick={onClickDismiss(key)}>
            <CloseIcon />
          </IconButton>
        )}
        iconVariant={{
          error: <WarningIcon sx={{ mr: 1 }} />,
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <CssBaseline />
        <LoadingComponent />
        <Component {...pageProps} />
      </SnackbarProvider>
    </div>
  );
}
