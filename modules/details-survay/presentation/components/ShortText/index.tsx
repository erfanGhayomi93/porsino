import { Box, Container, TextareaAutosize, Typography } from "@mui/material";
import useShortTextController, { ShortTextProps } from "./ShortText.controller";
import styles from "./ShortText.module.scss";

export default function ShortTextComponent(props: ShortTextProps) {
  const {} = useShortTextController(props);

  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <div className={styles.box}>
          <Box className={styles.title}>
            <Typography variant="body1" className="strong">
              تعداد اعضای خانواده شما چند نفر است؟
            </Typography>
            <Typography variant="body2" component="span">
              (پاسخ متنی کوتاه)
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
