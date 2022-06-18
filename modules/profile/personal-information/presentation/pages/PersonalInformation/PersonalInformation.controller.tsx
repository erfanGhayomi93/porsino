import { useState } from "react";

export type PersonalInformationProps = {};

export default function usePersonalInformationController(
  props: PersonalInformationProps
) {
  const [isShowGender, setIsShowGender] = useState(false);
  const [isShowAge, setIsShowAge] = useState(false);

  return { isShowGender, setIsShowGender, isShowAge, setIsShowAge };
}
