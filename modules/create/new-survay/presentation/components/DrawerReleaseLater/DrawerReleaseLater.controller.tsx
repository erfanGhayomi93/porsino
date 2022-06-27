import { useRouter } from "next/router";

export type DrawerReleaseLaterProps = {
  isreleaseLater: boolean;
  setisreleaseLater: (val: boolean) => void;
};

export default function useDrawerReleaseLaterController(
  props: DrawerReleaseLaterProps
) {
  const router = useRouter();
  const {} = props;
  return { ...props, router };
}
