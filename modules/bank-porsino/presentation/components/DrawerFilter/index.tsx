import DrawerCustomComponent from "@/core/components/common/DrawerCustom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import useDrawerFilterController, {
  DrawerFilterProps,
} from "./DrawerFilter.controller";
import styles from "./DrawerFilter.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clsx from "clsx";
import CheckIcon from "@mui/icons-material/Check";
import ButtonCustomComponent from "@/core/components/common/ButtonCustom";

export default function DrawerFilterComponent(props: DrawerFilterProps) {
  const { isShowFilter, setisShowFilter } = useDrawerFilterController(props);

  return (
    <DrawerCustomComponent value={isShowFilter} setValue={setisShowFilter}>
      <Container maxWidth="lg" className={styles.container}>
        <Box className={styles.root}>
          <div className={styles.title}>
            <Typography variant="h6" className="strong">
              فیلتر
            </Typography>
            <IconButton
              color="inherit"
              className={styles.iconButton}
              onClick={() => setisShowFilter(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className={styles.content}>
            {data.map((item, ind) => (
              <Accordion
                className={styles.accordion}
                classes={{ root: styles.accordion }}
                elevation={0}
                key={ind}
              >
                <AccordionSummary
                  className={styles.accordionSummary}
                  expandIcon={
                    <ExpandMoreIcon className={styles.expandMoreIcon} />
                  }
                  aria-controls={`panel1a-content-${item.label}`}
                  id={`panel1a-header-${item.label}`}
                >
                  <Typography variant="body1" className="strong">
                    {item.label}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionDetails}>
                  {item?.children?.length > 0 &&
                    item.children.map((child1, ind1) => (
                      <Accordion
                        className={clsx(
                          styles.accordion,
                          styles.accordionChild1
                        )}
                        classes={{ root: styles.accordion }}
                        elevation={0}
                        key={ind1}
                      >
                        <AccordionSummary
                          className={styles.accordionSummary}
                          expandIcon={
                            <ExpandMoreIcon className={styles.expandMoreIcon} />
                          }
                          aria-controls={`panel2a-content-${child1.label}`}
                          id={`panel2a-header-${child1.label}`}
                        >
                          <Typography variant="body1" className="strong">
                            {child1.label}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                          className={styles.accordionDetailsChild}
                        >
                          <Typography
                            variant="body2"
                            color="divider"
                            className={styles.label}
                          >
                            فناوری اطلاعات و ارتباطات
                          </Typography>
                          {ind1 === 1 && <CheckIcon className={styles.icon} />}
                        </AccordionDetails>
                      </Accordion>
                    ))}
                </AccordionDetails>
              </Accordion>
            ))}
            {/* <Accordion
              className={styles.accordion}
              classes={{ root: styles.accordion }}
              elevation={0}
            >
              <AccordionSummary
                className={styles.accordionSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Accordion
                  className={styles.accordion}
                  classes={{ root: styles.accordion }}
                  elevation={0}
                >
                  <AccordionSummary
                    className={styles.accordionSummary}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion} elevation={0}>
              <AccordionSummary
                className={styles.accordionSummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </div>

          <div className={styles.buttons}>
            <ButtonCustomComponent
              label="اعمال فیلتر"
              color="primary"
              variant="contained"
            />
            <ButtonCustomComponent
              label="پاک کردن"
              color="inherit"
              variant="outlined"
            />
          </div>
        </Box>
      </Container>
    </DrawerCustomComponent>
  );
}

const data = [
  {
    label: "دسته‌بندی",
    children: [
      {
        label: "فناوری اطلاعات و ارتباطات",
        children: [
          { label: "فناوری اطلاعات و ارتباطات" },
          { label: "فناوری اطلاعات و ارتباطات" },
        ],
      },
      {
        label: "صنایع غذایی و کالای مصرفی",
        children: [
          { label: "فناوری اطلاعات و ارتباطات" },
          { label: "فناوری اطلاعات و ارتباطات" },
        ],
      },
      {
        label: "مد و لباس، آرایشی بهداشتی",
      },
      {
        label: "فرهنگ و هنر، ورزش و سرگرمی",
      },
    ],
  },
  {
    label: "شهر",
    children: [
      {
        label: "فناوری اطلاعات و ارتباطات",
        children: [
          { label: "فناوری اطلاعات و ارتباطات" },
          { label: "فناوری اطلاعات و ارتباطات" },
        ],
      },
    ],
  },
  {
    label: "جنسیت",
    children: [
      {
        label: "جنسیت1-1",
      },
      {
        label: "جنسیت1-1",
      },
    ],
  },
  {
    label: "شغل",
    children: [
      {
        label: "شغل2-1",
      },
      {
        label: "شغل2-1",
      },
    ],
  },
  {
    label: "تحصیلات",
    children: [
      {
        label: "تحصیلات2-1",
      },
      {
        label: "تحصیلات2-1",
      },
    ],
  },
  {
    label: "بازه سنی",
    children: [
      {
        label: "بازه سنی3-1",
      },
      {
        label: "بازه سنی3-1",
      },
    ],
  },
];
