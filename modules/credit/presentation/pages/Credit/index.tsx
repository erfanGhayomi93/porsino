import AppHeaderComponent from "@/core/components/layouts/AppHeader";
import NavigationBottomComponent from "@/core/components/layouts/NavigationBottom";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import clsx from "clsx";
import { useState } from "react";
import TabComponent from "../../components/Tab";
import useCreditController, { CreditProps } from "./Credit.controller";
import styles from "./Credit.module.scss";

export default function CreditPage(props: CreditProps) {
  const {} = useCreditController(props);

  return (
    <div className={styles.root}>
      <NavigationBottomComponent value={1}>
        <AppHeaderComponent title="اعتبار" />
        <Container maxWidth="lg">
          <Box className={styles.detailCredit}>
            {dataDetailCredit.map((item, ind) => (
              <div key={ind} className={styles.item}>
                <Typography variant="body1" className={styles.subject}>
                  {item.subject}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h6"
                    className={clsx(styles.count, "strong")}
                  >
                    {item.count}
                  </Typography>
                  <Typography variant="body1">شیبا</Typography>
                </Box>
              </div>
            ))}
          </Box>
        </Container>

        <TabComponent />
      </NavigationBottomComponent>
    </div>
  );
}

const dataDetailCredit = [
  {
    subject: "کل اعتبار:",
    count: "۵,۵00,۰۰۰",
  },
  { subject: "موجودی اعتبار:", count: "۴۳0,۰۰۰" },
  { subject: "اعتبار دریافتی از نظرسنجی:", count: "۵2,۰۰۰" },
  { subject: "اعتبار دریافتی از مسابقه:", count: "۹,۰۰۰" },
];
