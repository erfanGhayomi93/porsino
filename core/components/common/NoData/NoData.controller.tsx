export type NoDataProps = {
  label: string;
  srcImg: string;
};

export default function useNoDataController(props: NoDataProps) {
  return { ...props };
}
