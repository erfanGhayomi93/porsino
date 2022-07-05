export type MultiAnswerProps = any;

export default function useMultiAnswerController(props: MultiAnswerProps) {
  const { data, DataMultiChoice } = props;
  return { ...data, DataMultiChoice };
}
