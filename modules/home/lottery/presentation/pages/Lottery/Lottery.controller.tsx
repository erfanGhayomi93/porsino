export type LotteryProps = {};

export default function useLotteryController(props: LotteryProps) {
  const {} = props;
  return { ...props, isData: true };
}
