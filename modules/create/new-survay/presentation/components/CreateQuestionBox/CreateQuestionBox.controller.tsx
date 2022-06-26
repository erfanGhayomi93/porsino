export type CreateQuestionBoxProps = {
  isShowNewQuestion: boolean;
  setisShowNewQuestion: (val: boolean) => void;
  setstatusPage: (val: string) => void;
  setisShowCommon: (val: boolean) => void;
};

export default function useCreateQuestionBoxController(
  props: CreateQuestionBoxProps
) {
  const {} = props;
  return { ...props };
}
