import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import useMultiStepForm from '../hooks/useMultipleStepForm';

const MultiStepForm = () => {
  const {  formData , updateFormData, resetFormData , step, nextStep, prevStep } = useMultiStepForm();
  

  console.log('Form data :' , formData, step);

  return (
    <div>
      <h1>Multi-Step Form</h1>
      {step === 1 && <StepOne formData= {formData} updateFormData={updateFormData}/>}
      {step === 2 && <StepTwo formData= {formData} updateFormData={updateFormData} />}
      {step === 3 && <StepThree formData= {formData} updateFormData={updateFormData} resetFormData={resetFormData}/>}
      
      <div>
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
