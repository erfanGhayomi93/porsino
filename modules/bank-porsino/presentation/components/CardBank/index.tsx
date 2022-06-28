import { Box, Typography } from "@mui/material";
import Image from "next/image";
import useCardBankController, { CardBankProps } from "./CardBank.controller";
import styles from "./CardBank.module.scss";
import { RiDownloadLine } from "react-icons/ri";

export default function CardBankComponent(props: CardBankProps) {
  const {} = useCardBankController(props);

  return (
    <div className={styles.root}>
      <Box display="flex" alignItems="">
        <div>
          <Image src="/images/img-bank.svg" width={70} height={70} />
        </div>
        <div>
          <Typography className={styles.subject} variant="body1">
            موضوع نظرسنجی
          </Typography>
          <div className={styles.date}>
            <Typography variant="body1" className="divider" component="span">
              تاریخ اجرا:
            </Typography>
            <Typography variant="body1" component="span">
              ۲۳ تیر ۱۴۰۱
            </Typography>
          </div>
        </div>
      </Box>
      <Box>
        <div className={styles.icon}>
          <RiDownloadLine />
        </div>
      </Box>
    </div>
  );
}
