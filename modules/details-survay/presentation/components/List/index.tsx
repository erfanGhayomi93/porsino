import useListController, { ListProps } from "./List.controller";
import styles from "./List.module.scss";
import {
  Box,
  Container,
  IconButton,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import InputTextComponent from "@/core/components/common/form/InputText";
import { RiArrowDownSLine } from "react-icons/ri";
import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import CloseIcon from "@mui/icons-material/Close";

export default function ListComponent(props: ListProps) {
  const { text, options, isShowDrawer, setIsShowDrawer } =
    useListController(props);

  return (
    <>
      <Container maxWidth="lg">
        <div className={styles.root}>
          <div className={styles.box}>
            {/* <Box className={styles.title}>
            <Typography variant="body2" component="span">
              ({text})
            </Typography>
          </Box> */}

            <Box className={styles.content}>
              <InputTextComponent
                placeholder={text}
                fullWidth
                readOnly
                endAdornment={<RiArrowDownSLine className={styles.icon} />}
                onClick={() => null}
              />
            </Box>
          </div>
        </div>
      </Container>

      <DrawerCustomComponent value={isShowDrawer} setValue={setIsShowDrawer}>
        <Container maxWidth="lg">
          <Box className={styles.drawer}>
            <div className={styles.title}>
              <Typography variant="h6" className="strong">
                انتخاب کنید
              </Typography>
              <IconButton
                color="inherit"
                className={styles.iconButton}
                onClick={() => setIsShowDrawer(false)}
              >
                <CloseIcon />
              </IconButton>
            </div>

            <div className={styles.content}>
              {options.map((item: any, ind: number) => (
                <Box className={styles.item} key={ind}>
                  <Typography variant="body1">{item.option}</Typography>
                </Box>
              ))}
            </div>
          </Box>
        </Container>
      </DrawerCustomComponent>
    </>
  );
}
