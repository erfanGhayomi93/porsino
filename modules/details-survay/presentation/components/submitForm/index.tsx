import useUpdateEffect from "@/core/hooks/useUpdateEffect";
import { useState } from "react";
import { statusQuestionType } from "../../pages/DetailsSurvay/DetailsSurvay.controller";

type SubmitForm = {
  thisQuestion: any;
  priority: number;
};

export default function SubmitForm(props: SubmitForm) {
  ////////global
  const [result, setresult] = useState<any>({});
  const { thisQuestion, priority } = props;
  const { id, type } = thisQuestion[0] || {};

  ///////SingleChoice
  const [valueSingleChoice, setvalueSingleChoice] = useState(null);
  /////multiChoice
  const [valueMultiChoice, setvalueMultiChoice] = useState<any>({});
  /////evalute
  const [valueEvaluate, setvalueEvaluate] = useState<any>({});
  /////shortDescriptions
  const [valueShortDescription, setvalueShortDescription] =
    useState<string>("");

  ////handle submit form
  useUpdateEffect(() => {
    const { singleChoice, multipleChoice, shortDescription, evaluate } =
      statusQuestionType;
    let result = {};

    if (type === singleChoice) {
      ///////SingleChoice
      result = {
        [priority]: {
          question_id: id,
          type: type,
          option_type: 1,
          option_id: valueSingleChoice,
        },
      };
    } else if (type === multipleChoice) {
      /////multiChoice
      const question = Object.keys(valueMultiChoice).filter(
        (itm) => valueMultiChoice[itm]
      );

      result = {
        [priority]: {
          question_id: id,
          type: type,
          option_type: 1,
          option_id: question,
        },
      };
    } else if (type === shortDescription) {
      /////short descriptions
      result = {
        [priority]: {
          question_id: id,
          type: type,
          option_text: valueShortDescription,
        },
      };
    } else if (type === evaluate) {
      //////////evalute
      const sub_questions = Object.keys(valueEvaluate).map((item) => {
        return {
          sub_question_id: item,
          option_id: "",
        };
      });

      result = {
        [priority]: {
          question_id: id,
          type: type,
          sub_questions: sub_questions,
        },
      };
    }

    setresult((prev: any) => ({
      ...prev,
      ...result,
    }));
  }, [
    type,
    id,
    priority,
    valueSingleChoice,
    valueMultiChoice,
    valueEvaluate,
    valueShortDescription,
  ]);

  useUpdateEffect(() => {
    /////after change question to be reset state
    setvalueSingleChoice(null);
    setvalueMultiChoice({});
    setvalueEvaluate({});
    setvalueShortDescription("");

    console.log("thisQuestion", thisQuestion[0]);
  }, [priority]);

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
    DataEvaluate: {
      value: valueEvaluate,
      setvalue: setvalueEvaluate,
    },
    DataShortDescription: {
      value: valueShortDescription,
      setvalue: setvalueShortDescription,
    },
  };
}
