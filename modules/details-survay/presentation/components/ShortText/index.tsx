import { Box, Container, TextareaAutosize, Typography } from "@mui/material";
import useShortTextController, { ShortTextProps } from "./ShortText.controller";
import styles from "./ShortText.module.scss";

export default function ShortTextComponent(props: ShortTextProps) {
  const { text, discription, value, setvalue } = useShortTextController(props);

  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <div className={styles.box}>
          <Box className={styles.title}>
            <Typography variant="body1" className="strong">
              {text}
            </Typography>
            <Typography variant="body2" component="span">
              {discription}
            </Typography>
          </Box>

          <Box className={styles.content}>
            <TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              placeholder="محل درج پاسخ ..."
              style={{ width: 200 }}
              className={styles.textArea}
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            />
          </Box>
        </div>
      </div>
    </Container>
  );
}
