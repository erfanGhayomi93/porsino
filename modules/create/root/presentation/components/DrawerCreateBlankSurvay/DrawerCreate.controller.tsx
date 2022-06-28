import { useRouter } from "next/router";

export type DrawerCreateProps = {
  value: boolean;
  setisShowDrawerBlank: (val: boolean) => void;
  setisShowDrawerReady: (val: boolean) => void;
};

export default function useDrawerCreateController(props: DrawerCreateProps) {
  const router = useRouter();
  const { setisShowDrawerBlank } = props;
  return { ...props, router, setisShowDrawerBlank };
}
