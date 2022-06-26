import { statusPageType } from "../Step2/Step2.controller";

export type DrawerNewQuestionProps = {
  isShowNewQuestion: boolean;
  setisShowNewQuestion: (val: boolean) => void;
  setstatusPage: (val: string) => void;
  setisShowCommon: (val: boolean) => void;
};

export default function useDrawerNewQuestionController(
  props: DrawerNewQuestionProps
) {
  const {
    isShowNewQuestion,
    setisShowNewQuestion,
    setstatusPage,
    setisShowCommon,
  } = props;

  const handleClickTypeQuestion = (type: string) => {
    setisShowCommon(false);
    setisShowNewQuestion(false);

    if (type === statusPageType.singleAnswer) {
      setstatusPage(statusPageType.singleAnswer);
    }
  };

  return { isShowNewQuestion, setisShowNewQuestion, handleClickTypeQuestion };
}
