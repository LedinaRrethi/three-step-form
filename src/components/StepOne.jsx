import React from 'react';
import useMultiStepForm from '../hooks/useMultipleStepForm';

const StepOne = () => {
  const { formData, updateFormData } = useMultiStepForm();
  console.log(formData);

  return (
    <div>
      <h2>Complete your name and surname</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.step1Data.name}
        onChange={(e) => updateFormData('step1Data', 'name', e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={formData.step1Data.surname}
        onChange={(e) => updateFormData('step1Data', 'surname', e.target.value)}
      
      />
    </div>
  );
};

export default StepOne;
