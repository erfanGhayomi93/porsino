export type MatrixProps = {
  data: any;
};

export default function useMatrixController(props: MatrixProps) {
  const { data } = props;
  return { ...props, ...data };
}
