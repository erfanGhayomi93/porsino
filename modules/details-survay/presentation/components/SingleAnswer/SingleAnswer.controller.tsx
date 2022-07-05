export type SingleAnswerProps = any;

export default function useSingleAnswerController(props: SingleAnswerProps) {
  const { data } = props;
  return { ...data , ...props };
}
