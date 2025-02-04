import React, { useState } from "react";
import BookingComponent from "./BookingComponent";
import PersonalDataComponent from "./personaldatacomponent/PersonalDataComponent";
import PaymentComponent from "./PaymentComponent";
import ConfirmationComponent from "./ConfirmationComponent";
import { ArrowLeft, Check } from "lucide-react";

const BookingStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const steps = [
    { number: 1, title: "Booking Details", component: <BookingComponent onNext={goToNextStep} /> },
    { number: 2, title: "Personal Data", component: <PersonalDataComponent onNext={goToNextStep} /> },
    { number: 3, title: "Payment", component: <PaymentComponent onNext={goToNextStep} /> },
    { number: 4, title: "Confirmation", component: <ConfirmationComponent /> },
  ];

  return (
    <div className="w-full flex justify-center relative mt-12">
      <div className="max-w-[1100px] w-full flex flex-col space-y-8">
        {/* Stepper */}
        <div className="flex flex-col space-y-10">
          <div className="flex items-center justify-between mt-10">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full border-2 border-darkBlue flex items-center justify-center
                  ${
                    currentStep > step.number
                      ? "bg-darkBlue  text-white"
                      : currentStep === step.number
                      ? "text-darkBlue"
                      : "text-darkBlue"
                  }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`absolute top-[80px] text-sm whitespace-nowrap ${
                      currentStep >= step.number
                        ? "text-darkBlue"
                        : "text-smokyGray"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>

                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="flex-grow h-[2px] bg-darkBlue"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Back Button */}
          {currentStep > 1 && (
            <div
              className="flex flex-row space-x-2 items-center text-smokyGray cursor-pointer"
              onClick={() => setCurrentStep((prev) => prev - 1)}
            >
              <ArrowLeft />
              <span className="">Back</span>
            </div>
          )}
        </div>
        {/* Content Area */}
        <div>
          {steps.find((step) => step.number === currentStep)?.component}
        </div>
      </div>
    </div>
  );
};

export default BookingStepper;
