import { getHomeDataDS } from "../../datasources/home.datasource";

export default async function getHomeDataUC() {
  const data = await getHomeDataDS();

  return { data };
}
