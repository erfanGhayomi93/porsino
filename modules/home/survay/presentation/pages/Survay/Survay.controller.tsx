export type SurvayProps = {
  data: any;
};

export default function useSurvayController(props: SurvayProps) {
  const { data } = props;
  return { ...props , isData: data && data.length > 0 };
}
