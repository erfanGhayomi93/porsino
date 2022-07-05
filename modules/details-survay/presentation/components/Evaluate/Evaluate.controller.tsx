import { useEffect, useState } from "react";

export type EvaluateProps = {
  data: any;
};

export default function useEvaluateController(props: EvaluateProps) {
  const { data } = props;
  const [questions, setquestions] = useState([]);
  const [countStar, setcountStar] = useState(0);

  useEffect(() => {
    let count = 0;

    const res = data.options.filter((item: any) => {
      if (item.type === 2) return true;
      ++count;
    });

    setquestions(res);
    setcountStar(count);
  }, []);

  return { ...props, ...data, questions, countStar };
}
