export type DrawerTypeQuestionProps = {
  isShowTypeQues: boolean;
  setisShowTypeQues: (val: boolean) => void;
};

export default function useDrawerTypeQuestionController(
  props: DrawerTypeQuestionProps
) {
  const {} = props;
  return { ...props };
}
