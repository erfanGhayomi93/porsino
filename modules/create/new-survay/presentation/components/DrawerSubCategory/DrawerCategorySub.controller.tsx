export type DrawerCategorySubProps = {
  isShowCategorySub: boolean;
  setisShowCategorySub: (val: boolean) => void;
};

export default function useDrawerCategorySubController(
  props: DrawerCategorySubProps
) {
  const { isShowCategorySub, setisShowCategorySub } = props;
  return { isShowCategorySub, setisShowCategorySub };
}
