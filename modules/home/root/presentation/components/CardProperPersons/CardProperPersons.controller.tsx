export type CardProperPersonsProps = {
  avatar: number;
  index: number;
  user_name: string;
  balance: string;
};

export default function useCardProperPersonsController(
  props: CardProperPersonsProps
) {
  const {} = props;
  return { ...props };
}
