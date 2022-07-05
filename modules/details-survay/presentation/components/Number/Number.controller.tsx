export type NumberProps = {
  data: any;
};

export default function useNumberController(props: NumberProps) {
  const { data } = props;
  return { ...props, ...data };
}
