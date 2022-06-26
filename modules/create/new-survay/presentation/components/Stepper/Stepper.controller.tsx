export type StepperProps = {
  step: number;
};

export default function useStepperController(props: StepperProps) {
  const { step } = props;
  return { step };
}
