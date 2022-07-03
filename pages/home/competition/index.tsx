import { GetStaticProps, NextPage } from "next";
import CompetitionPage from "@/modules/home/competition/presentation/pages/Competition";
import getCompetitionsDataUC from "@/modules/home/competition/domain/usecases";

const Survay: NextPage = (props: any) => {
  return <CompetitionPage {...props} />;
};

export default Survay;

export const getStaticProps: GetStaticProps = async () => {
  const dataCompetitions = await getCompetitionsDataUC();

  if (dataCompetitions.data.error) throw dataCompetitions.data.error;

  return {
    props: {
      data: dataCompetitions.data,
    },
  };
};
