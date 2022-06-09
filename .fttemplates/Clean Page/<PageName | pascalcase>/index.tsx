import use<PageName | pascalcase>Controller, { <PageName | pascalcase>Props } from "./<PageName | pascalcase>.controller";
import styles from "./<PageName | pascalcase>.module.scss";

export default function <PageName | pascalcase>Page(props: <PageName | pascalcase>Props) {
  const {} = use<PageName | pascalcase>Controller(props);

  return <div className={styles.root}></div>;
}
