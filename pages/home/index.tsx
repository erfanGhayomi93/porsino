import getHomeDataUC from "@/modules/home/root/domain/usecases";
import HomePage from "@/modules/home/root/presentation/pages/Home";
import { HomeProps } from "@/modules/home/root/presentation/pages/Home/Home.controller";
import { GetStaticProps, NextPage } from "next";

const Home: NextPage = (props: HomeProps) => {
  return <HomePage {...props} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const dataHome = await getHomeDataUC();

  if (dataHome.data.error) throw dataHome.data.error;

  return {
    props: {
      data: dataHome.data,
    },
    revalidate: 60 * 10,
  };
};
