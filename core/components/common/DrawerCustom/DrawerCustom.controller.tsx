import React from "react";

export type DrawerCustomProps = {
  value: boolean;
  setValue: (val: boolean) => void;
  children: React.ReactNode;
};

export default function useDrawerCustomController(props: any) {
  const { value, setValue, children } = props;

  // const toggleDrawer =
  //   () => (event: React.KeyboardEvent | React.MouseEvent) => {
  //     if (
  //       event.type === "keydown" &&
  //       ((event as React.KeyboardEvent).key === "Tab" ||
  //         (event as React.KeyboardEvent).key === "Shift")
  //     ) {
  //       return;
  //     }

  //     setValue(false);
  //   };

  return { value, setValue, children };
}
