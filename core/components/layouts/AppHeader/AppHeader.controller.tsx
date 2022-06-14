export type AppHeaderProps = {
  title: string;
};

export default function useAppHeaderController(props: AppHeaderProps) {
  const {} = props;
  return { ...props };
}
