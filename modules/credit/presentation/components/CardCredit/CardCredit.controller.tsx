export type CardCreditProps = {
  isButton?: boolean;
};

export default function useCardCreditController(props: CardCreditProps) {
  const { isButton } = props;
  return { ...props, isButton };
}
