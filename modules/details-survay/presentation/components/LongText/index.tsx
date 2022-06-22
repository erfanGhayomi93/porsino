import useLongTextController, { LongTextProps } from "./LongText.controller";
import styles from "./LongText.module.scss";
import { Box, Container, TextareaAutosize, Typography } from "@mui/material";

export default function LongTextComponent(props: LongTextProps) {
  const {} = useLongTextController(props);

  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <div className={styles.box}>
          <Box className={styles.title}>
            <Typography variant="body1" className="strong">
              تعداد اعضای خانواده شما چند نفر است؟
            </Typography>
            <Typography variant="body2" component="span">
              (پاسخ متنی بلند)
            </Typography>
          </Box>

          <Box className={styles.content}>
            <TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              placeholder="محل درج پاسخ ..."
              style={{ width: 200 }}
              className={styles.textArea}
            />
          </Box>
        </div>
      </div>
    </Container>
  );
}
