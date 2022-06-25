export type DrawerCategoryMainProps = {
  isShowCategoryMain: boolean;
  setisShowCategoryMain: (val: boolean) => void;
};

export default function useDrawerCategoryMainController(
  props: DrawerCategoryMainProps
) {
  const { isShowCategoryMain, setisShowCategoryMain } = props;
  return { isShowCategoryMain, setisShowCategoryMain };
}
