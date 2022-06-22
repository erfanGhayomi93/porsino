export type StartProps = {
  setstatusPage: (val: string) => void;
};

export default function useStartController(props: StartProps) {
  const { setstatusPage } = props;
  return { setstatusPage };
}
