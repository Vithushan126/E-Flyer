import React, { useState } from "react";
import BookingComponent from "./BookingComponent";
import PersonalDataComponent from "./personaldatacomponent/PersonalDataComponent";
import PaymentComponent from "./PaymentComponent";
import ConfirmationComponent from "./ConfirmationComponent";
import { ArrowLeft } from "lucide-react";

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
    <div className="w-full flex justify-center relative mt-8 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[768px] md:max-w-[900px] lg:max-w-[1100px] flex flex-col space-y-6">
        
        {/* Stepper */}
        <div className="flex flex-col space-y-20">
          <div className="flex items-center justify-center w-full mt-6">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* Step Circle */}
                <div className="flex flex-col items-center relative">
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-darkBlue flex items-center justify-center
                    ${
                      currentStep > step.number
                        ? "bg-darkBlue text-white"
                        : currentStep === step.number
                        ? "text-darkBlue"
                        : "text-darkBlue"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`absolute top-[50px] md:top-[60px] lg:text-base text-[8px] whitespace-nowrap ${
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
                  <div className="flex-grow h-[2px] w-8 md:w-12 bg-darkBlue"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Back Button */}
          {currentStep > 1 && (
            <div
              className="flex items-center space-x-2 text-base text-smokyGray cursor-pointer "
              onClick={() => setCurrentStep((prev) => prev - 1)}
            >
              <ArrowLeft />
              <span>Back</span>
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
