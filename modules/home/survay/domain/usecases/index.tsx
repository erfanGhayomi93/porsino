import { getPollsDataDS } from "../../data/datasources/survay.datasource";

export default async function getPollsDataUC() {
  const data = await getPollsDataDS();

  return { data };
}
