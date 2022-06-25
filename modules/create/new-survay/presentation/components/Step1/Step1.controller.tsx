import { useRef, useState } from "react";

export type Step1Props = {
  setStep: (val: number) => void;
};

export default function useStep1Controller(props: Step1Props) {
  const [isShowCategoryMain, setisShowCategoryMain] = useState(false);
  const [isShowCategorySub, setisShowCategorySub] = useState(false);
  const attachRaf = useRef<HTMLInputElement | null>(null);
  const { setStep } = props;
  return {
    isShowCategoryMain,
    setisShowCategoryMain,
    isShowCategorySub,
    setisShowCategorySub,
    attachRaf,
    setStep,
  };
}
