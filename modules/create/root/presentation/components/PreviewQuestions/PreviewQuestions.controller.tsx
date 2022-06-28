import { getLocalStorage } from "@/core/components/common/localStorageMethod/indes";
import { useEffect } from "react";

export type PreviewQuestionsProps = {
  isShowNewQuestion: boolean;
  setisShowNewQuestion: (val: boolean) => void;
  setstatusPage: (val: string) => void;
  setisShowCommon: (val: boolean) => void;
};

export default function usePreviewQuestionsController(
  props: PreviewQuestionsProps
) {
  const {} = props;

  useEffect(() => {}, []);

  return { ...props, questions: getLocalStorage("questions-porsino") };
}
