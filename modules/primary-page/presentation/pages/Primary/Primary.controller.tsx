import { useEffect, useState } from "react";

export type PrimaryProps = {};

export default function usePrimaryController(props: PrimaryProps) {
  const [initialize, setInitialize] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    setInitialize(true);
    // }, 2000);
  }, []);

  return { ...props, initialize };
}
