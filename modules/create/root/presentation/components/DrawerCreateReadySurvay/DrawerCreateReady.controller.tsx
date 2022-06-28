export type DrawerCreateReadyProps = {
  value: boolean;
  setValue: (val: boolean) => void;
};

export default function useDrawerCreateReadyController(
  props: DrawerCreateReadyProps
) {
  const {} = props;
  return { ...props };
}
