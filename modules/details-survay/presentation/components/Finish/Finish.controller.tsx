import { useRouter } from "next/router";
import { useState } from "react";

export type FinishProps = {};

export default function useFinishController(props: FinishProps) {
  const [isShowShare, setIsShowShare] = useState(false);

  const router = useRouter();
  const {} = props;
  return { router, isShowShare, setIsShowShare };
}
