import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type propTypes = {
  label: string;
  isIcon?: boolean;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  variant:
    | "text"
    | "outlined"
    | "contained"
    | "dashed"
    | "containedLight"
    | undefined;
};

export default function ButtonCustomComponent({
  label,
  isIcon,
  variant,
  color,
}: propTypes) {
  return (
    <Button
      variant={variant}
      color={color}
      fullWidth
      size="large"
      endIcon={isIcon ? <ArrowBackIosNewIcon style={{ fontSize: 14 }} /> : null}
      style={{ borderRadius: color === "secondary" ? 50 : 8 }}
    >
      {label}
    </Button>
  );
}
