import useFilterBoxController, { FilterBoxProps } from "./FilterBox.controller";
import styles from "./FilterBox.module.scss";
import { RiFilterLine, RiSearchLine } from "react-icons/ri";
import InputTextComponent from "@/core/components/common/form/InputText";
import DrawerFilterComponent from "../DrawerFilter";

export default function FilterBoxComponent(props: FilterBoxProps) {
  const { isShowFilter, setisShowFilter } = useFilterBoxController(props);

  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <div className={styles.filter} onClick={() => setisShowFilter(true)}>
          <RiFilterLine />
        </div>
        <DrawerFilterComponent {...{ isShowFilter, setisShowFilter }} />

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
