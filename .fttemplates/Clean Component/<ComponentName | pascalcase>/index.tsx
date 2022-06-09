import use<ComponentName | pascalcase>Controller, { <ComponentName | pascalcase>Props } from "./<ComponentName | pascalcase>.controller";
import styles from "./<ComponentName | pascalcase>.module.scss";

export default function <ComponentName | pascalcase>Component(props: <ComponentName | pascalcase>Props) {
  const {} = use<ComponentName | pascalcase>Controller(props);

  return <div className={styles.root}></div>;
}
