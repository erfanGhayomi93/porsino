import { useState } from "react";

export type Step2Props = {
  isNotice: boolean;
  setisNotice: (val: boolean) => void;
  setisShowCommon: (val: boolean) => void;
};

export interface statusPageInterface {
  main: string;
  singleAnswer: string;
  multiAnswer: string;
  previewQuestions: string;
}

export const statusPageType = {
  main: "main",
  singleAnswer: "تک انتخابی",
  multiAnswer: "چند انتخابی",
  previewQuestions: "نمایش سوالات",
};

export default function useStep2Controller(props: Step2Props) {
  const { isNotice, setisNotice, setisShowCommon } = props;
  const [isShowNewQuestion, setisShowNewQuestion] = useState(false);
  const [statusPage, setstatusPage] = useState(statusPageType.main);
  return {
    isNotice,
    setisNotice,
    isShowNewQuestion,
    setisShowNewQuestion,
    statusPage,
    setstatusPage,
    setisShowCommon,
  };
}
