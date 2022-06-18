import useDrawerCustomController, {
  DrawerCustomProps,
} from "./DrawerCustom.controller";
import styles from "./DrawerCustom.module.scss";
import { Drawer } from "@mui/material";

export default function DrawerCustomComponent(props: DrawerCustomProps) {
  const { value, setValue, children } = useDrawerCustomController(props);

  return (
    <Drawer
      classes={{
        paper: styles.root,
      }}
      anchor={"bottom"}
      open={value}
      onClose={() => setValue(false)}
    >
      {children}
    </Drawer>
  );
}
