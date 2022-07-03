export type CardSurvayProps = {
  expire_at: string;
  title: string;
  logo: string;
};

export default function useCardSurvayController(props: CardSurvayProps) {
  const {} = props;
  return { ...props };
}
