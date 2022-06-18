import useTabController, { TabProps } from "./Tab.controller";
import styles from "./Tab.module.scss";
import {
  Box,
  Chip,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
import CardCreditComponent from "../CardCredit";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function TabComponent(props: TabProps) {
  const { valueTab, handleChangeTab } = useTabController(props);

  return (
    <Box className={styles.tabs}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={valueTab}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
          textColor="primary"
          variant="fullWidth"
          classes={{
            root: styles.textColorSecondary,
            indicator: styles.textColorSecondary,
          }}
        >
          <Tab className="strong" label="تاریخچه نظرسنجی" {...a11yProps(0)} />
          <Tab className="strong" label="تاریخچه مسابقه" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={valueTab} index={0}>
        <div className={styles.chipsBox}>
          <div className={styles.chipsMobile}>
            <Stack direction="row" spacing={1}>
              {dataChips.map((item: any) => (
                <Chip
                  key={item.id}
                  label={item.label}
                  className={styles.chip}
                  variant={item?.active ? "filled" : "outlined"}
                  clickable={false}
                  color="primary"
                  // deleteIcon={<DoneIcon />}
                  // onDelete={undefined}

                  // onClick={() => setActiveCategory(item.enTitle)}
                />
              ))}
            </Stack>
          </div>
        </div>
        <Container maxWidth="lg">
          {/* <div className={styles.search}>
            <FormControl variant="outlined">
              <OutlinedInput
                id="search-credit"
                placeholder="جستجو"
                // value={values.weight}
                // onChange={handleChange("weight")}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="start"
                    >
                      <SearchIcon
                      // className={styles.searchIcon}
                      />
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </div> */}

          <div className={styles.cards}>
            <CardCreditComponent isButton />
            <CardCreditComponent isButton />
            <CardCreditComponent isButton />
            <CardCreditComponent isButton />
          </div>
        </Container>
      </TabPanel>
      <TabPanel value={valueTab} index={1}>
        <Container maxWidth="lg">
          <div className={styles.cards}>
            <CardCreditComponent />
            <CardCreditComponent />
            <CardCreditComponent />
            <CardCreditComponent />
            <CardCreditComponent />
          </div>
        </Container>
      </TabPanel>
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const dataChips = [
  { label: "یک هفته", id: 1, active: true },
  { label: "یک ماه", id: 2 },
  { label: "سه ماه", id: 3 },
  { label: "شش ماه", id: 4 },
  { label: "یک سال", id: 5 },
  { label: "یک سال", id: 6 },
  { label: "یک سال", id: 7 },
];
