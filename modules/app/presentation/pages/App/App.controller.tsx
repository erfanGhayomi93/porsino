import { createRef } from "react";

export type AppProps = {
  onClickDismiss: (key: any) => any;
  notistackRef: any;
  Component: any;
  pageProps: any;
};

export default function useAppController(props: AppProps) {
  const notistackRef = createRef<any>();

  const onClickDismiss = (key: any) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return { ...props, notistackRef, onClickDismiss };
}
