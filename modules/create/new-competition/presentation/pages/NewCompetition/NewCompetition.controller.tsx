import { useState } from "react";
export type NewCompetitionProps = {};

export default function useNewCompetitionController(
  props: NewCompetitionProps
) {
  const [step, setStep] = useState(1);
  const [isNotice, setisNotice] = useState(true);
  const [isShowCommon, setisShowCommon] = useState(true);
  const [isreleaseLater, setisreleaseLater] = useState(false);

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
