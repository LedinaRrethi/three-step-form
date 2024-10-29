import React from 'react'

const StepThree = ({formData , updateFormData , resetFormData  }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submited!");
       resetFormData () ;
        
    }
  return (
    <div>
        <h2>Complete your company name and code</h2>
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Company name'
            value = {formData.step3Data.companyName}
            onChange={(e) => updateFormData('step3Data' , 'companyName' , e.target.value) }
         />

          <input 
            type="text"
            placeholder='Company code'
            value = {formData.step3Data.companyCode}
            onChange={(e) => updateFormData('step3Data' , 'companyCode' , e.target.value) 
            
            }
         />
         <button type='submit'>Submit</button>
         </form>

      
    </div>
  )
}

export default StepThree
