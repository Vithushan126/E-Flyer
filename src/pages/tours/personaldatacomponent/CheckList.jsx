import React, { useState } from 'react';

const CheckListForm = ({ onNext }) => {
  const [termsChecked, setTermsChecked] = useState(false);
  const [documentsChecked, setDocumentsChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);

  return (
    <>
    <div className="w-full mx-auto p-6 bg-white rounded-3xl border border-border font-inter">
      <h2 className="text-xl font-medium mb-6">Check List</h2>

      <div className="flex items-center gap-3 mb-4">
        <input
          type="checkbox"
          checked={termsChecked}
          onChange={() => setTermsChecked(!termsChecked)}
          className="w-11 h-11 text-blue-500 border-border rounded"
        />
        <div>
          <p>I have read MTCH AG's General Terms and Conditions and Privacy Policy as well as the important information! I have read and accept them for all participants. In particular, I agree to the processing of data that is particularly worthy of protection.</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <input
          type="checkbox"
          checked={documentsChecked}
          onChange={() => setDocumentsChecked(!documentsChecked)}
          className="w-7 h-7 text-blue-500 border-border rounded"
        />
        <div>
          <p>I confirm that all participants will be in possession of the necessary travel documents (ID / passport / possibly visa) for the chosen destination at the time of departure.</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <input
          type="checkbox"
          checked={newsletterChecked}
          onChange={() => setNewsletterChecked(!newsletterChecked)}
          className="w-4 h-4 text-blue-500 border-border rounded"
        />
        <div>
          <p>I want to be informed about the latest holiday offers and subscribe to the free newsletter.</p>
        </div>
      </div>
    </div>
   <div className="mt-8 mb-4 flex justify-end">
   <button onClick={onNext} className="bg-darkBlue text-white rounded-3xl px-5 py-[35px] h-[57px] w-[330px] flex items-center justify-center text-2xl font-medium">
    For Payment
   </button>
</div>
</>
  );
};

export default CheckListForm;