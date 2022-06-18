import { useState } from "react";

export type GenderTypeProps = {
  value: boolean;
  setValue: (val: boolean) => void;
};

export default function useGenderTypeController(props: GenderTypeProps) {
  const { value, setValue } = props;
  const [valueRadio, setValueRadio] = useState(null);

  return { value, setValue, valueRadio, setValueRadio };
}
