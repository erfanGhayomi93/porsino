import useFilterBoxController, { FilterBoxProps } from "./FilterBox.controller";
import styles from "./FilterBox.module.scss";
import { RiFilterLine, RiSearchLine } from "react-icons/ri";
import InputTextComponent from "@/core/components/common/form/InputText";

export default function FilterBoxComponent(props: FilterBoxProps) {
  const {} = useFilterBoxController(props);

  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <div className={styles.filter}>
          <RiFilterLine />
        </div>

        <div className={styles.search}>
          <InputTextComponent
            placeholder="جستجو"
            fullWidth
            style={{ height: "100%" }}
            startAdornment={<RiSearchLine />}
            classes={{
              root: styles.rootClasses,
              input: styles.inputClasses,
            }}
          />
        </div>
      </div>
    </div>
  );
}
