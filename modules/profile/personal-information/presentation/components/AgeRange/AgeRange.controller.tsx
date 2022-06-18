import { useState } from "react";

export type AgeRangeProps = {
  value: boolean;
  setValue: (val: boolean) => void;
};

export default function useAgeRangeController(props: AgeRangeProps) {
  const { value, setValue } = props;
  const [valueRadio, setValueRadio] = useState(null);

  return { value, setValue, valueRadio, setValueRadio };
}
