import { useState } from "react";

export type DrawerShareProps = {
  isShowShare: boolean;
  setIsShowShare: (val: boolean) => void;
};

export default function useDrawerShareController(props: DrawerShareProps) {
  const { isShowShare, setIsShowShare } = props;
  return { isShowShare, setIsShowShare };
}
