import { useState } from "react";

export type ListProps = {
  data: any;
};

export default function useListController(props: ListProps) {
  const [isShowDrawer ,setIsShowDrawer] = useState(true)
  const { data } = props;
  return { ...props, ...data , isShowDrawer ,setIsShowDrawer };
}
