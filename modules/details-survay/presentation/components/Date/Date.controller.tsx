export type DateProps = {
  data: any;
};

export default function useDateController(props: DateProps) {
  const { data } = props;
  return { ...props, ...data };
}
