import { GetStaticProps, NextPage } from "next";
import SurvayPage from "@/modules/home/survay/presentation/pages/Survay";
import getPollsDataUC from "@/modules/home/survay/domain/usecases";

const Survay: NextPage = (props: any) => {
  return <SurvayPage {...props} />;
};

export default Survay;

export const getStaticProps: GetStaticProps = async () => {
  const dataHome = await getPollsDataUC();

  if (dataHome.data.error) throw dataHome.data.error;

  return {
    props: {
      data: dataHome.data,
    },
    revalidate: 60 * 10,
  };
};
