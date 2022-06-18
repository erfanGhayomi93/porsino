import { useState } from "react";

export type ProfileProps = {
  isShowSettng: boolean;
  setIsShowSettng: (value: boolean) => void;
};

export default function useProfileController(props: any) {
  const [isShowSettng, setIsShowSettng] = useState(false);
  const {} = props;
  return { ...props, isShowSettng, setIsShowSettng };
}
