import { useState } from "react";

export type CreateProps = {};

export default function useCreateController(props: CreateProps) {
  const [isShowDrawer, setisShowDrawer] = useState(false);
  const {} = props;
  return { isShowDrawer, setisShowDrawer };
}
