export type DrawerFilterProps = {
  isShowFilter: boolean;
  setisShowFilter: (val: boolean) => void;
};

export default function useDrawerFilterController(props: DrawerFilterProps) {
  const {} = props;
  return { ...props };
}
