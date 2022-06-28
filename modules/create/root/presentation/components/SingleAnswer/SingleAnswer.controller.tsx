import {
  getLocalStorage,
  setLocalStorage,
} from "@/core/components/common/localStorageMethod/indes";
import { statusPageType } from "@/modules/create/new-survay/presentation/components/Step2/Step2.controller";
import { useState } from "react";

export type SingleAnswerProps = {
  setstatusPage: (val: string) => void;
  setisShowCommon: (val: boolean) => void;
};

export default function useSingleAnswerController(props: SingleAnswerProps) {
  const { setstatusPage, setisShowCommon } = props;
  const [options, setoptions] = useState([{ label: "گزینه ۱", value: "" }]);
  const [question, setquestion] = useState("");

  const handleClickAddOption = () => {
    setoptions((prev) => [
      ...prev,
      { label: `گزینه ${options.length + 1}`, value: "" },
    ]);
  };

  const handleChangeOption = (e: any, label: string) => {
    let res = options.map((item) =>
      item.label !== label ? item : { ...item, value: e.target.value }
    );
    setoptions(res);
  };

  const handleSubmit = () => {
    const prevData = getLocalStorage("questions-porsino");
    const nowData = { question, options };
    const result: any = prevData ? [...prevData, nowData] : [nowData];
    if (question) setLocalStorage("questions-porsino", result);
    setstatusPage(statusPageType.previewQuestions);
    setisShowCommon(true);
  };
  return {
    options,
    handleClickAddOption,
    handleChangeOption,
    question,
    setquestion,
    handleSubmit,
  };
}
