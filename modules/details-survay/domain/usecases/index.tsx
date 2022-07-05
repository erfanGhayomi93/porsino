import { getDetailsSurvayDS } from "../../data/datasources/details-survay.datasource";

export default async function getDetailsSurvayUC(hash: string) {
  const data = await getDetailsSurvayDS(hash);

  return { data };
}
