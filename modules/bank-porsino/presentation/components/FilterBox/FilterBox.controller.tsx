import { useState } from "react";

export type FilterBoxProps = {};

export default function useFilterBoxController(props: FilterBoxProps) {
  const [isShowFilter, setisShowFilter] = useState(true);
  const {} = props;
  return { ...props, isShowFilter, setisShowFilter };
}
