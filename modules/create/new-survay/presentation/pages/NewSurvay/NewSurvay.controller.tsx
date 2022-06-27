import { useState } from "react";

export type NewSurvayProps = {};

export default function useNewSurvayController(props: NewSurvayProps) {
  const [step, setStep] = useState(3);
  const [isNotice, setisNotice] = useState(true);
  const [isShowCommon, setisShowCommon] = useState(true);
  const [isreleaseLater, setisreleaseLater] = useState(false);

  const {} = props;
  return {
    step,
    setStep,
    isNotice,
    setisNotice,
    isShowCommon,
    setisShowCommon,
    isreleaseLater,
    setisreleaseLater,
  };
}
