export type MultiAnswerProps = any;

export default function useMultiAnswerController(props: MultiAnswerProps) {
  console.log("props", props);
  const { data } = props;
  return { ...data };
}
