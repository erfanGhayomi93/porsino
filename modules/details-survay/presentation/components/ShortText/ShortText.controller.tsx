export type ShortTextProps = {
  data: any;
  DataShortDescription: {
    value: string | undefined;
    setvalue: (val: string) => void;
  };
};

export default function useShortTextController(props: ShortTextProps) {
  const { data, DataShortDescription } = props;
  const { value, setvalue } = DataShortDescription;
  return { ...data, value, setvalue };
}
