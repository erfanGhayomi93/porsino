export type ShortTextProps = {
  data: any;
};

export default function useShortTextController(props: ShortTextProps) {
  const { data } = props;
  return { ...props, ...data };
}
