import { Box, Typography } from "@mui/material";
import Image from "next/image";
import useNoDataController, { NoDataProps } from "./NoData.controller";
import styles from "./NoData.module.scss";

export default function NoDataComponent(props: NoDataProps) {
  const { label } = useNoDataController(props);

  return (
    <div className={styles.root}>
      <Box className={styles.box}>
        <Image src="/images/no-data.svg" width={170} height={170} />

        <Typography variant="h6" component="h6" className="strong">
          {label}
        </Typography>
      </Box>
    </div>
  );
}
