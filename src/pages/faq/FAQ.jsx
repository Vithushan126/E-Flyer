import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChevronDown, ChevronUp } from "lucide-react";

const qaData = [
  {
    question:
      "the animals on the island and in the sea, and the incredibly friendly always there for us. In the restaurant, we would like to thank the entire kitchen. ?",
    answer:
      "We have been to many islands in the Maldives, but none impressed us as much as Kuredu. We spent two wonderful weeks here and the Christmas period and are delighted with the island, the diverse tropical vegetation, the animals on the island and in the sea, and the incredthe restaurant, we would like to thank the entire kitchen...",
  },
  {
    question:
      "the animals on the island and in the sea, and the incredibly friendly always there for us. In the restaurant, we would like to thank the entire kitchen. ?",
    answer:
      "We have been to many islands in the Maldives, but none impressed us as much as Kuredu. The tropical vegetation, animals, and friendly people made it unforgettable.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const validationSchema = Yup.object({
    question: Yup.string()
      .min(10, "question must be at least 10 characters")
      .required("Please share your question"),
  });

  const formik = useFormik({
    initialValues: {
      question: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Submitted ratings:", values);
      setSubmitting(false);
    },
  });
  return (
    <div className="flex justify-center">
      <div className="max-w-[1100px] w-full space-y-10 mx-2 lg:mx-0 ">
        <div className="mt-10 space-y-4">
          <div className="text-smokyGray text-3xl font-semibold ml-10">
            FAQs
          </div>
          <div className="w-full border border-border p-4 lg:p-8 flex flex-col rounded-3xl space-y-16">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col w-full space-y-4"
            >
              <div className="flex flex-col">
                <textarea
                  id="question"
                  name="question"
                  value={formik.values.question}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="We’re Here to Help – Ask Your Question !"
                  className={`w-full h-28 p-2 lg:p-4 rounded-3xl resize-none focus:ring-0 focus:ring-border ${
                    formik.touched.question && formik.errors.question
                      ? "border-red-500"
                      : "border-border"
                  } border`}
                />
                {formik.touched.question && formik.errors.question && (
                  <span className="text-red text-sm mt-1">
                    {formik.errors.question}
                  </span>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="bg-darkBlue text-white text-2xl py-3 px-8 rounded-2xl hover:bg-blue-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formik.isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <div className="text-smokyGray text-3xl font-semibold ml-10">
            100 + AQs
          </div>
          <div className="w-full border border-border p-4 lg:p-8 flex flex-col rounded-3xl space-y-8">
            {qaData.map((qa, index) => (
              <div
                key={index}
                className="border border-border rounded-xl p-2 lg:p-4 space-y-2 "
              >
                {/* Question */}
                <div
                  className="flex flex-col justify-between items-center cursor-pointer text-smokyGray"
                  onClick={() => toggleAnswer(index)}
                >
                  <div className="flex flex-row justify-between items-start w-full">
                    <div className="text-smokyGray text-3xl font-semibold ">
                      Q
                    </div>
                    <h3 className="font-semibold pt-6 lg:pt-8 px-2 lg:px-8 ">
                      {qa.question}
                    </h3>
                    <button className="">
                      {openIndex === index ? <ChevronDown /> : <ChevronUp />}
                    </button>
                  </div>
                  {/* <h3 className="font-semibold">{qa.question}</h3> */}
                </div>

                {/* Answer */}
                {openIndex === index && (
                  <div className=" text-[#9C9C9C] px-8 lg:px-14">
                    <p>{qa.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
