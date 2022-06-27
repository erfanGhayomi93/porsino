import useReleaseController, { ReleaseProps } from "./Release.controller";
import styles from "./Release.module.scss";

export default function ReleasePage(props: ReleaseProps) {
  const { Component } = useReleaseController(props);

  return <div className={styles.root}>{Component}</div>;
}
