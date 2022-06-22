export type HeaderQuestionProps = {
  allQuestion: number;
  numberQuestion : number;
};

export default function useHeaderQuestionController(
  props: HeaderQuestionProps
) {
  const {} = props;
  return { ...props };
}
