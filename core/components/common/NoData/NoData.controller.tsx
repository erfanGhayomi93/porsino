export type NoDataProps = {
  label: string;
};

export default function useNoDataController(props: NoDataProps) {
  const {} = props;
  return { ...props };
}
