import { useState } from "react";

export type TabProps = {};

export default function useTabController(props: TabProps) {
  const [valueTab, setValueTab] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  return { ...props, valueTab, handleChangeTab };
}
