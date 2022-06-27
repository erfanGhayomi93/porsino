import { useRouter } from "next/router";
import FreeReleaseComponent from "../../components/FreeRelease";
import OpenReleaseComponent from "../../components/OpenRelease";
import TargetedComponent from "../../components/Targeted";

export type ReleaseProps = {};

export const statusPageType: any = {
  free: <FreeReleaseComponent />, //انتشار رایگان
  targeted: <TargetedComponent />, //انتشار هدفمند
  open: <OpenReleaseComponent />, //انتشار آزاد
};

export default function useReleaseController(props: ReleaseProps) {
  const router = useRouter();

  const Component: any = router.query?.type
    ? statusPageType[`${router?.query?.type}`]
    : null;
  const {} = props;
  return { ...props, Component };
}
