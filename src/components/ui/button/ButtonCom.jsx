import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const ButtonCom = ({ children, className, variant, size, ...props }) => {
  // Use clsx to combine the buttonVariants classes with the className prop
  const combinedClasses = clsx(buttonVariants({ variant, size }), className);

  // Use twMerge to merge and deduplicate the combined classes
  const mergedClasses = twMerge(combinedClasses);

  return (
    <button className={mergedClasses} {...props}>
      {children}
    </button>
  );
};

// Define button variants using CVA
const buttonVariants = cva("rounded-xl px-8 py-4 transition-colors", {
  variants: {
    variant: {
      default: "bg-white font-semibold text-darkBlue",
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
      disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
    },
    size: {
      sm: "text-sm px-3 py-1",
      md: "text-base px-4 py-2",
      lg: " text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export default ButtonCom;
