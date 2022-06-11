export type NavigationBottomProps = {
  value: number;
  children: any;
};

export default function useNavigationBottomController(
  props: NavigationBottomProps
) {
  const { value, children } = props;

  return { ...props, value, children };
}
