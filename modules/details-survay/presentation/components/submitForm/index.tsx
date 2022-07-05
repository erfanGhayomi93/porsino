import useUpdateEffect from "@/core/hooks/useUpdateEffect";
import { useState } from "react";

type SubmitForm = {
  thisQuestion: any;
  priority: number;
};

export default function SubmitForm(props: SubmitForm) {
  ////////global
  const [result, setresult] = useState({});
  const { thisQuestion, priority } = props;
  const { id, type } = thisQuestion[0] || {};

  ///////SingleChoice
  const [valueSingleChoice, setvalueSingleChoice] = useState(null);
  /////multiSingleChoice
  const [valueMultiChoice, setvalueMultiChoice] = useState<any>({});

  ///////SingleChoice
  useUpdateEffect(() => {
    setresult((prev) => ({
      ...prev,
      [priority]: {
        question_id: id,
        type: type,
        option_type: 1,
        option_id: valueSingleChoice,
      },
    }));
  }, [valueSingleChoice]);

  /////multiSingleChoice
  useUpdateEffect(() => {
    const question = Object.keys(valueMultiChoice).filter(
      (itm) => valueMultiChoice[itm]
    );

    setresult((prev) => ({
      ...prev,
      [priority]: {
        question_id: id,
        type: type,
        option_type: 1,
        option_id: question,
      },
    }));
  }, [valueMultiChoice]);

  useUpdateEffect(() => {
    console.log("result", result);
  }, [result]);

  return {
    DataSingleChoice: {
      value: valueSingleChoice,
      setvalue: setvalueSingleChoice,
    },
    DataMultiChoice: {
      value: valueMultiChoice,
      setvalue: setvalueMultiChoice,
    },
  };
}
