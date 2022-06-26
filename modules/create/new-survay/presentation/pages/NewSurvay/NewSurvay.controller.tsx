import { useState } from "react";

export type NewSurvayProps = {};

export default function useNewSurvayController(props: NewSurvayProps) {
  const [step, setStep] = useState(1);
  const [isNotice, setisNotice] = useState(true);

  const {} = props;
  return { step, setStep, isNotice, setisNotice };
}
