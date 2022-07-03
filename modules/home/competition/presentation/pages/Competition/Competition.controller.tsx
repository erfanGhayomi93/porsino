export type CompetitionProps = {
  data: any;
};

export default function useCompetitionController(props: CompetitionProps) {
  const { data } = props;
  return { ...props, isData: data && data.length > 0 };
}
