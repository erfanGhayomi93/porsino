import { useState } from "react";

export type Step2Props = {
  isNotice: boolean;
  setisNotice: (val: Boolean) => void;
};

export default function useStep2Controller(props: Step2Props) {
  const { isNotice, setisNotice } = props;
  const [isShowNewQuestion, setisShowNewQuestion] = useState(true);
  return { isNotice, setisNotice, isShowNewQuestion, setisShowNewQuestion };
}
