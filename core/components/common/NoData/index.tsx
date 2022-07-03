import { Box, Typography } from "@mui/material";
import Image from "next/image";
import useNoDataController, { NoDataProps } from "./NoData.controller";
import styles from "./NoData.module.scss";

export default function NoDataComponent(props: NoDataProps) {
  const { label, srcImg } = useNoDataController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.box}>
        <div className={styles.backImg}>
          <Image src={`/images/${srcImg}.svg`} width={160} height={160} />
        </div>

        <Typography variant="h6" component="h6">
          {label}
        </Typography>

        <svg className={styles.sticker}>
          <use xlinkHref="/sprit.svg#sticker-angray" />
        </svg>
      </Box>
    </div>
  );
}
