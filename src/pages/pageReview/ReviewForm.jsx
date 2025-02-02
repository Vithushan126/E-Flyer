import React from "react";
import { Star } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ReviewForm = () => {
  const validationSchema = Yup.object({
    review: Yup.string()
      .min(10, "Review must be at least 10 characters")
      .required("Please share your review"),
  });

  const formik = useFormik({
    initialValues: {
      pricePerformance: 0,
      cleanliness: 0,
      position: 0,
      service: 0,
      room: 0,
      sleepQuality: 0,
      review: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Submitted ratings:", values);
      setSubmitting(false);
    },
  });

  const ratingCategories = [
    { id: "pricePerformance", label: "Price Performance" },
    { id: "cleanliness", label: "Cleanliness" },
    { id: "position", label: "Position" },
    { id: "service", label: "Service" },
    { id: "room", label: "Room" },
    { id: "sleepQuality", label: "Sleep Quality" },
  ];

  const StarRating = ({ name }) => {
    const handleStarClick = (rating) => {
      formik.setFieldValue(name, rating);
      formik.setFieldTouched(name, true);
    };

    return (
      <div className=" ">
        <div className="flex flex-row space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleStarClick(star)}
              className="focus:outline-none"
            >
              <Star
                size={24}
                fill={star <= formik.values[name] ? "orange" : "none"}
                stroke="orange"
                strokeWidth={1}
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-4 mt-10">
      <h2 className="text-lg ml-10">Share Your Experience</h2>
      <div className="w-full p-8 rounded-lg border border-border">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-row w-full space-x-8"
        >
          <div className="w-1/3 flex flex-col space-y-4">
            {ratingCategories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between  border border-border rounded-lg px-2"
              >
                <span className="min-w-[120px]">{category.label}</span>
                <StarRating name={category.id} />
              </div>
            ))}
          </div>

          <div className="w-2/3 space-y-4">
            <div className="flex flex-col">
              <textarea
                id="review"
                name="review"
                value={formik.values.review}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Drop your review..."
                className={`w-full h-44 p-4 rounded-xl resize-none focus:ring-2 focus:ring-border ${
                  formik.touched.review && formik.errors.review
                    ? "border-red-500"
                    : "border-border"
                } border`}
              />
              {formik.touched.review && formik.errors.review && (
                <span className="text-red text-sm mt-1">
                  {formik.errors.review}
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
