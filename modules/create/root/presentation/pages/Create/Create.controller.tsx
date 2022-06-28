import { useRouter } from "next/router";
import { useState } from "react";

export type CreateProps = {};

export default function useCreateController(props: CreateProps) {
  const [isShowDrawerBlank, setisShowDrawerBlank] = useState(false);
  const [isShowDrawerReady, setisShowDrawerReady] = useState(false);
  const router = useRouter();

  return {
    isShowDrawerBlank,
    setisShowDrawerBlank,
    isShowDrawerReady,
    setisShowDrawerReady,
    router,
  };
}
