export type DrawerNewQuestionProps = {
  isShowNewQuestion: boolean;
  setisShowNewQuestion: (val: boolean) => void;
};

export default function useDrawerNewQuestionController(
  props: DrawerNewQuestionProps
) {
  const { isShowNewQuestion, setisShowNewQuestion } = props;
  return { isShowNewQuestion, setisShowNewQuestion };
}
