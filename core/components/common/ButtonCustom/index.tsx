import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import clsx from "clsx";

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
  onClick?: () => void;
  padding?: string;
  className?: any;
  disabled?: any;
};

export default function ButtonCustomComponent({
  label,
  isIcon,
  variant,
  color,
  onClick,
  padding,
  className,
  disabled,
}: propTypes) {
  const checkStyles = () => {
    let res: any = { padding: "11px 21px" };
    if (color === "secondary") res = { ...res, borderRadius: 50 };
    else if (color === "inherit")
      res = {
        ...res,
        backgroundColor: "white",
        border: "1px solid #E6E6E6",
        borderRadius: 12,
        padding: "10px 21px",
      };
    else res = { ...res, borderRadius: 12 };

    if (padding) res = { ...res, padding };
    return res;
  };

  return (
    <Button
      variant={variant}
      color={color}
      fullWidth
      size="large"
      endIcon={isIcon ? <ArrowBackIosNewIcon style={{ fontSize: 14 }} /> : null}
      style={checkStyles()}
      onClick={onClick}
      className={clsx("strong", className)}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
