export type StepperProps = {
  step: number;
  setStep: (val: any) => void;
};

export default function useStepperController(props: StepperProps) {
  const { step, setStep } = props;
  return { step, setStep };
}
