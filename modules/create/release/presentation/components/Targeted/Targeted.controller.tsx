import { useState } from "react";

export type TargetedProps = {};

export default function useTargetedController(props: TargetedProps) {
  const [isShowTypeQues, setisShowTypeQues] = useState(false);
  const {} = props;
  return { ...props, isShowTypeQues, setisShowTypeQues };
}
