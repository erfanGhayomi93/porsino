import { useState } from "react";

export type FilterBoxProps = {};

export default function useFilterBoxController(props: FilterBoxProps) {
  const [isShowFilter, setisShowFilter] = useState(false);
  const {} = props;
  return { ...props, isShowFilter, setisShowFilter };
}
