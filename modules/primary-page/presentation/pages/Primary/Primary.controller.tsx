import { useEffect, useState } from "react";

export type PrimaryProps = {};

export default function usePrimaryController(props: PrimaryProps) {
  const [initialize, setInitialize] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialize(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { ...props, initialize };
}
