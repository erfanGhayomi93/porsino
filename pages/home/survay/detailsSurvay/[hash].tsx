import getDetailsSurvayUC from "@/modules/details-survay/domain/usecases";
import DetailsSurvayPage from "@/modules/details-survay/presentation/pages/DetailsSurvay";
import getPollsDataUC from "@/modules/home/survay/domain/usecases";
import { GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

export interface IParams extends ParsedUrlQuery {
  hash: string;
}

const DetailsSurvay: NextPage = (props: any) => {
  return <DetailsSurvayPage {...props} />;
};

export default DetailsSurvay;

export const getStaticProps: GetStaticProps = async (context) => {
  const { hash } = context.params as IParams;
  const dataPoll = await getDetailsSurvayUC(hash);

  if (dataPoll.data.error) throw dataPoll.data.error;

  return {
    props: {
      data: dataPoll.data,
    },
  };
};

export const getStaticPaths: any = async () => {
  const dataPolls: any = await getPollsDataUC();

  const setPaths = () => {
    if (!dataPolls?.data) {
      return [];
    }

    return dataPolls?.data?.map((item: any) => ({
      params: { hash: item?.hash },
    }));
  };

  return {
    paths: setPaths(),
    fallback: "blocking",
  };
};
