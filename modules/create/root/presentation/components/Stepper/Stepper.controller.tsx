export type StepperProps = {
  step: number;
  isPageSurvay?: boolean;
};

export default function useStepperController(props: StepperProps) {
  return { ...props };
}
