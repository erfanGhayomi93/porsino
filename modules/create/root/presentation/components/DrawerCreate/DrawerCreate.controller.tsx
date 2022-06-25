import { useRouter } from "next/router";

export type DrawerCreateProps = {
  value: boolean;
  setValue: (val: boolean) => void;
};

export default function useDrawerCreateController(props: DrawerCreateProps) {
  const router = useRouter();
  const { value, setValue } = props;
  return { value, setValue, router };
}
