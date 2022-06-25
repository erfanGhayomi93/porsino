import useBlankCreateController, {
  BlankCreateProps,
} from "./BlankCreate.controller";
import styles from "./BlankCreate.module.scss";

export default function BlankCreateComponent(props: BlankCreateProps) {
  const {} = useBlankCreateController(props);

  return <div className={styles.root}></div>;
}
