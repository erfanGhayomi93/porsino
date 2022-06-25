import { OutlinedInput } from "@mui/material";
import React from "react";
import styles from "./InputText.module.scss";

type InputTextProps = {
  autoFocus?: boolean;
  endAdornment?: any;
  startAdornment?: any;
  placeholder?: string;
  fullWidth?: boolean;
  label?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  readOnly?: boolean;
  sx?: any;
  onClick?: any;
};

export default function InputTextComponent({
  placeholder,
  endAdornment,
  startAdornment,
  value,
  fullWidth,
  label,
  onChange,
  autoFocus,
  readOnly,
  sx,
  onClick,
}: InputTextProps) {
  return (
    <OutlinedInput
      className={styles.inputText}
      autoFocus={autoFocus}
      placeholder={placeholder}
      endAdornment={endAdornment}
      startAdornment={startAdornment}
      classes={{
        root: styles.rootInput,
      }}
      fullWidth={fullWidth}
      label={label}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      sx={sx}
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        "aria-label": "weight",
      }}
      onClick={onClick}
    />
  );
}
