import React from "react";
import AdventureSearchForm from "./AdventureSearchForm";

const Adventure = () => {
  return (
    <>
      <div className="w-full flex justify-center  mx-2">
        <div className="max-w-[1100px] w-full space-y-8">
          <AdventureSearchForm />
        </div>
      </div>
    </>
  );
};

export default Adventure;
