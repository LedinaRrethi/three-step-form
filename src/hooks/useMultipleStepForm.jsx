import { useState, useEffect } from 'react';

const useMultiStepForm = () => {
  
  const initialFormData = {
    step1Data: { name: '', surname: '' },
    step2Data: { age: '', gender: '' },
    step3Data: { companyName: '', companyCode: '' },
  };

  const savedData = JSON.parse(localStorage.getItem('formData'));
  const savedStep = JSON.parse(localStorage.getItem('step'))

  const [formData, setFormData] = useState(savedData || initialFormData);
  const [step , setStep] = useState(savedStep || 1);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('step', JSON.stringify(step));
  }, [formData, step]);

  const updateFormData = (stepKey, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [stepKey]: {
        ...prev[stepKey],
        [field]: value,
      },
    }));
  };

  const nextStep = () => setStep((prev) => (prev < 3 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  return { formData, updateFormData, step, setStep, nextStep, prevStep };
};

export default useMultiStepForm;
