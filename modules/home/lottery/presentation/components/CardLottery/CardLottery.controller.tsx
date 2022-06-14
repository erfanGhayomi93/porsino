export type CardLotteryProps = {
  isFinish : boolean
};

export default function useCardLotteryController(props: CardLotteryProps) {
  const {} = props;
  return { ...props };
}
