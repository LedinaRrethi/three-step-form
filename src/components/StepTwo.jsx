import React from 'react';
import useMultiStepForm from '../hooks/useMultipleStepForm';

const StepTwo = ({formData , updateFormData}) => {
  //const { formData, updateFormData } = useMultiStepForm();

  return (
    <div>
      <h2>Step 2: Age and Gender</h2>
      <input
        type="number"
        placeholder="Age"
        value={formData.step2Data.age}
        onChange={(e) => updateFormData('step2Data', 'age', e.target.value)}
      />
      <select
        value={formData.step2Data.gender}
        onChange={(e) => updateFormData('step2Data', 'gender', e.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default StepTwo;
