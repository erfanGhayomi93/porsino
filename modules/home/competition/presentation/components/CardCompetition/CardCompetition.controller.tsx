export type CardCompetitionProps = {
  user_name: string;
  balance: number;
  expire_at: string;
  logo: string;
  questions_count: number;
};

export default function useCardCompetitionController(
  props: CardCompetitionProps
) {
  const {} = props;
  return { ...props };
}
