import { getCompetitionsDataDS } from "../../data/datasources/competition.datasource";

export default async function getCompetitionsDataUC() {
  const data = await getCompetitionsDataDS();

  return { data };
}
