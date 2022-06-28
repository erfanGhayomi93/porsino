import { useRef, useState } from "react";

export type Step1Props = {};

export default function useStep1Controller(props: Step1Props) {
  const [isShowCategoryMain, setisShowCategoryMain] = useState(false);
  const [isShowCategorySub, setisShowCategorySub] = useState(false);
  const attachRaf = useRef<HTMLInputElement | null>(null);
  const {} = props;
  return {
    isShowCategoryMain,
    setisShowCategoryMain,
    isShowCategorySub,
    setisShowCategorySub,
    attachRaf,
  };
}
