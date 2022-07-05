import { useEffect, useState } from "react";
import DateComponent from "../../components/Date";
import EvaluateComponent from "../../components/Evaluate";
import ListComponent from "../../components/List";
import LongTextComponent from "../../components/LongText";
import MatrixComponent from "../../components/Matrix";
import MultiAnswerComponent from "../../components/MultiAnswer";
import NumberComponent from "../../components/Number";
import ShortTextComponent from "../../components/ShortText";
import SingleAnswerComponent from "../../components/SingleAnswer";
import SubmitForm from "../../components/submitForm";
export type DetailsSurvayProps = {
  data: any;
};

export const statusPageType = {
  start: "start",
  during: "during",
  finish: "finish",
};

export default function useDetailsSurvayController(props: DetailsSurvayProps) {
  const [thisQuestion, setthisQuestion] = useState<any>([]);
  const [priority, setPriority] = useState<number>(1);
  const [statusPage, setstatusPage] = useState(statusPageType.start);
  const { data } = props;
  const { DataSingleChoice, DataMultiChoice } = SubmitForm({
    thisQuestion,
    priority,
  });

  useEffect(() => {
    console.log("thisQuestion", thisQuestion);
  }, [thisQuestion]);

  let isDisabledButton = () => {
    if (thisQuestion[0].required === 0) return false;

    if (thisQuestion[0].type === "single choice" && !DataSingleChoice.value) {
      return true;
    } else if (
      thisQuestion[0].type === "multiple choice" &&
      !DataMultiChoice.value.hasOwnProperty()
    ) {
      return true;
    }

    return false;
  };

  const typeComponents = (): any => {
    const { data } = thisQuestion[0];
    return {
      "multiple choice": (
        <MultiAnswerComponent {...{ data, DataMultiChoice }} />
      ),
      "single choice": (
        <SingleAnswerComponent {...{ data, DataSingleChoice }} />
      ),
      "short description": <ShortTextComponent {...{ data }} />,
      "long description": <ShortTextComponent {...{ data }} />,
      // number: <LongTextComponent {...{ data}}  />,
      list: <ListComponent {...{ data }} />,
      matrix: <MatrixComponent {...{ data }} />,
      priority: <MatrixComponent {...{ data }} />,
      evaluate: <EvaluateComponent {...{ data }} />,
      number: <NumberComponent {...{ data }} />,
      date: <DateComponent {...{ data }} />,
    };
  };

  useEffect(() => {
    let res: any = data?.form?.questions
      .filter((item: any, ind: number) => ind + 1 === priority)
      .map((item: any, ind: number) => {
        return {
          type: item.type,
          id: item.id,
          data: item,
          priority: ind + 1,
        };
      });

    setthisQuestion(res);
  }, [priority]);

  const {} = props;
  return {
    ...props,
    thisQuestion,
    priority,
    typeComponents,
    setPriority,
    statusPage,
    setstatusPage,
    data,
    isDisabledButton,
  };
}

// const data = {
//   id: 49,
//   hash: "d3713cdc0ead",
//   participant_id: 8,
//   user_id: null,
//   form_id: 63,
//   expire_at: "2023-03-20 23:59:00",
//   reward: 2000,
//   status: "pending",
//   type: 2,
//   ip: null,
//   created_at: "2022-06-19T10:21:37.000000Z",
//   updated_at: "2022-06-19T10:21:37.000000Z",
//   form: {
//     id: 63,
//     hash: "04e2410695",
//     title:
//       "(پاک نکنید...!) چه نوع لوازم شخصی برقی استفاده کنم – اکثرا از چه راهی لوازم شخصی برقی میخرند-کدام برند سشوار خوبه- کدام برند مسواک خوبه- کدام برند ماشین اصلاح صورت خوبه-",
//     user_id: 1,
//     category_id: 12,
//     subcategory_id: 76,
//     max_participants: 10000,
//     expire_at: "2023-03-20 23:59:00",
//     reward: 2000,
//     status: 0,
//     goal: "سنجش قیمت- رفتار سنجی- عادات مصرف- تجربه استفاده- تعهد به برند",
//     logo: null,
//     created_at: "2022-05-19T07:17:58.000000Z",
//     updated_at: "2022-06-09T07:06:03.000000Z",
//     type: 2,
//     deleted_at: null,
//     quill: null,
//     questions: [
//       {
//         id: 2633,
//         text: "۱- بیشترین استفاده شما از کدام یک از محصولات زیر است؟",
//         type: "multiple choice",
//         form_id: 63,
//         required: 0,
//         description: "(چند پاسخی)",
//         created_at: "2022-05-19T07:50:36.000000Z",
//         updated_at: "2022-06-09T07:05:47.000000Z",
//         options: [
//           {
//             id: 7199,
//             question_id: 2633,
//             option: "ماشین اصلاح صورت",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7200,
//             question_id: 2633,
//             option: "ماشین اصلاح سر",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7201,
//             question_id: 2633,
//             option: "سشوار",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7202,
//             question_id: 2633,
//             option: "اصلاح بدن آقایان",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7203,
//             question_id: 2633,
//             option: "اصلاح بدن بانوان",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7204,
//             question_id: 2633,
//             option: "اصلاح مو گوشُ، بینی، ابرو",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7205,
//             question_id: 2633,
//             option: "برس پاک سازی",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7206,
//             question_id: 2633,
//             option: "اتو مو، حالت دهنده",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7207,
//             question_id: 2633,
//             option: "بیگودی، فرکننده",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7208,
//             question_id: 2633,
//             option: "مسواک برقی",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7209,
//             question_id: 2633,
//             option: "لیزر",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//         ],
//       },
//       {
//         id: 2634,
//         text: "۱-۱- به نظر شما تا چه میزان لوازم شخصی برقی اهمیت دارد؟",
//         type: "single choice",
//         form_id: 63,
//         required: 0,
//         description: "(تک پاسخی)",
//         created_at: "2022-05-19T07:50:37.000000Z",
//         updated_at: "2022-06-09T07:05:47.000000Z",
//         options: [
//           {
//             id: 7210,
//             question_id: 2634,
//             option: "بسیار کم",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7211,
//             question_id: 2634,
//             option: "کم",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7212,
//             question_id: 2634,
//             option: "متوسط",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7213,
//             question_id: 2634,
//             option: "زیاد",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7214,
//             question_id: 2634,
//             option: "بسیار زیاد",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//         ],
//       },
//       {
//         id: 2635,
//         text: "۲-۱- زمانی که محصول شما خراب میشود از چه طریقی اقدام برای تهیه مجدد آن می کنید؟",
//         type: "single choice",
//         form_id: 63,
//         required: 0,
//         description: "(تک پاسخی)",
//         created_at: "2022-05-19T07:50:37.000000Z",
//         updated_at: "2022-06-09T07:05:48.000000Z",
//         options: [
//           {
//             id: 7215,
//             question_id: 2635,
//             option: "همسرم تهیه میکند",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:48.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7216,
//             question_id: 2635,
//             option: "از فروشگاه اینترنتی سفارش میدهم",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:48.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7217,
//             question_id: 2635,
//             option: "از مغازه نزدیک منزل میخرم",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:48.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//         ],
//       },
//       {
//         id: 2636,
//         text: "۳-۱- آیا محصول خود را تعمیر میکنید؟",
//         type: "single choice",
//         form_id: 63,
//         required: 0,
//         description: "(تک پاسخی)",
//         created_at: "2022-05-19T07:50:37.000000Z",
//         updated_at: "2022-06-09T07:05:47.000000Z",
//         options: [
//           {
//             id: 7218,
//             question_id: 2636,
//             option: "بله",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7219,
//             question_id: 2636,
//             option: "خیر",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:47.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//         ],
//       },
//       {
//         id: 2637,
//         text: "۴-۱- لطفا نوع بیشترین محصولی را که استفاده میکنید نام ببرید.",
//         type: "short description",
//         form_id: 63,
//         required: 0,
//         description: "(تایپ کنید)",
//         created_at: "2022-05-19T07:50:37.000000Z",
//         updated_at: "2022-06-09T07:05:48.000000Z",
//         options: [],
//       },
//       {
//         id: 2638,
//         text: "۵-۱- لطفا برند بیشترین محصولی را که استفاده میکنید نام ببرید.",
//         type: "short description",
//         form_id: 63,
//         required: 0,
//         description: "(تایپ کنید)",
//         created_at: "2022-05-19T07:50:37.000000Z",
//         updated_at: "2022-06-09T07:05:48.000000Z",
//         options: [],
//       },
//       {
//         id: 2639,
//         text: "۶-۱- لطفا قیمت بیشترین محصولی را که استفاده میکنید نام ببرید.",
//         type: "number",
//         form_id: 63,
//         required: 0,
//         description: "(عدد وارد کنید)",
//         created_at: "2022-05-19T07:50:37.000000Z",
//         updated_at: "2022-06-09T07:05:48.000000Z",
//         options: [],
//       },
//       {
//         id: 2640,
//         text: "۷-۱- کدام‌یک از کلمات زیر توصیف کننده محصول است؟",
//         type: "single choice",
//         form_id: 63,
//         required: 0,
//         description: "(تک پاسخی)",
//         created_at: "2022-05-19T07:50:38.000000Z",
//         updated_at: "2022-06-09T07:05:48.000000Z",
//         options: [
//           {
//             id: 7220,
//             question_id: 2640,
//             option: "پر از ایراد",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:48.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7221,
//             question_id: 2640,
//             option: "خوب اما دارای مشکلاتی محدود",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:48.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7222,
//             question_id: 2640,
//             option: "متوسط",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:48.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7223,
//             question_id: 2640,
//             option: "عالی",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:48.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7224,
//             question_id: 2640,
//             option: "بی نظیر",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:48.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//         ],
//       },
//       {
//         id: 2641,
//         text: "8-1- اگر قرار باشد برند دیگری را جایگزین برند فعلی کنید کدام برند را انتخاب میکنید؟",
//         type: "short description",
//         form_id: 63,
//         required: 0,
//         description: "(تایپ کنید)",
//         created_at: "2022-05-19T07:50:38.000000Z",
//         updated_at: "2022-06-09T07:05:49.000000Z",
//         options: [],
//       },
//       {
//         id: 2642,
//         text: "9-1- اگر قرار باشد محصول دیگری را جایگزین محصول فعلی کنید کدام محصول را انتخاب میکنید؟",
//         type: "short description",
//         form_id: 63,
//         required: 0,
//         description: "(تایپ کنید)",
//         created_at: "2022-05-19T07:50:38.000000Z",
//         updated_at: "2022-06-09T07:05:49.000000Z",
//         options: [],
//       },
//       {
//         id: 2643,
//         text: "10-۱- فکر میکنید کدام محصول نباشد شما زندگی روزمره برایتان سختر می شود؟",
//         type: "single choice",
//         form_id: 63,
//         required: 0,
//         description: "(تک پاسخی)",
//         created_at: "2022-05-19T07:50:38.000000Z",
//         updated_at: "2022-06-09T07:05:49.000000Z",
//         options: [
//           {
//             id: 7225,
//             question_id: 2643,
//             option: "ماشین اصلاح صورت",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7226,
//             question_id: 2643,
//             option: "ماشین اصلاح سر",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7227,
//             question_id: 2643,
//             option: "سشوار",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7228,
//             question_id: 2643,
//             option: "اصلاح بدن آقایان",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7229,
//             question_id: 2643,
//             option: "اصلاح بدن بانوان",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7230,
//             question_id: 2643,
//             option: "اصلاح مو گوشُ، بینی، ابرو",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7231,
//             question_id: 2643,
//             option: "برس پاک سازی",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7232,
//             question_id: 2643,
//             option: "اتو مو، حالت دهنده",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7233,
//             question_id: 2643,
//             option: "بیگودی، فرکننده",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7234,
//             question_id: 2643,
//             option: "مسواک برقی",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//           {
//             id: 7235,
//             question_id: 2643,
//             option: "لیزر",
//             type: 1,
//             created_at: null,
//             updated_at: "2022-06-09T07:05:49.000000Z",
//             option_index: null,
//             answer: 0,
//           },
//         ],
//       },
//     ],
//   },
// };
