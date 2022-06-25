import { useState } from "react";

export type NewSurvayProps = {};

export default function useNewSurvayController(props: NewSurvayProps) {
  const [step, setStep] = useState(1);
  const {} = props;
  return { step, setStep };
}
