import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useStep3Controller, { Step3Props } from "./Step3.controller";
import styles from "./Step3.module.scss";

export default function Step3Component(props: Step3Props) {
  const {} = useStep3Controller(props);

  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant="h6">
        انتشار نظرسنجی
      </Typography>

      <Box className={styles.images}>
        <Link href="/create/release/[type]" as={`/create/release/free`}>
          <Box textAlign="center" className={styles.image}>
            <Image
              src="/images/free-release.svg"
              width="100%"
              height={162}
              layout="fill"
              loading="lazy"
            />
          </Box>
        </Link>

        <Link href="/create/release/[type]" as={`/create/release/targeted`}>
          <Box textAlign="center" className={styles.image}>
            <Image
              src="/images/targeted-release.svg"
              width="100%"
              height={162}
              layout="fill"
              loading="lazy"
            />
          </Box>
        </Link>
        <Link href="/create/release/[type]" as={`/create/release/open`}>
          <Box textAlign="center" className={styles.image}>
            <Image
              src="/images/open-release.svg"
              width="100%"
              height={162}
              layout="fill"
              loading="lazy"
            />
          </Box>
        </Link>
        {/* <Link href="/create/release/[type]" as={`/create/release/free`}> */}
        <Box textAlign="center" className={styles.image}>
          <Image
            src="/images/reward-release.svg"
            width="100%"
            height={162}
            layout="fill"
            loading="lazy"
          />
        </Box>
        {/* </Link> */}
      </Box>
    </div>
  );
}
