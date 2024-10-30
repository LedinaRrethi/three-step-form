import { useState, useEffect } from 'react';

const useMultiStepForm = () => {
  
  const initialFormData = {
    step1Data: { name: '', surname: '' },
    step2Data: { age: '', gender: '' },
    step3Data: { companyName: '', companyCode: '' },
  };

  //better approach to use useEffect
  // const savedData = JSON.parse(localStorage.getItem('formData'));
  // const savedStep = JSON.parse(localStorage.getItem('step'))

  // const [formData, setFormData] = useState(savedData || initialFormData);
  // const [step , setStep] = useState(savedStep || 1);

  const [formData, setFormData] = useState(initialFormData);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData')) || initialFormData;
    const savedStep = JSON.parse(localStorage.getItem('step')) || 1;
    if (savedData) setFormData(savedData);
    if (savedStep) setStep(savedStep);

    console.log(savedData);
  }, []);


  // useEffect(() => {
  //   localStorage.setItem('formData', JSON.stringify(formData));
  //   localStorage.setItem('step', JSON.stringify(step));
  // }, [formData, step]);

  const updateFormData = (stepKey, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [stepKey]: {
        ...prev[stepKey],
        [field]: value,
      },
    }));

    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('step', JSON.stringify(step));
  };

  const resetFormData = () => {
    setFormData(initialFormData)
    setStep(1);
    localStorage.removeItem('formData');
    localStorage.removeItem('step');
  };

  const nextStep = () => setStep((prev) => (prev < 3 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  return { initialFormData , formData, updateFormData, resetFormData, step, setStep, nextStep, prevStep };
};

export default useMultiStepForm;
