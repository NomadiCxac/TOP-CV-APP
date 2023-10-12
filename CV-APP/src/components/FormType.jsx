import React, { useState } from 'react';
let count = 0;
function FormType({ fieldTitles }) {

//   Initial state setup
//   const initialFormData = {};
//   for (let title of fieldTitles) {
//     console.log(count++)
//     initialFormData[title] = '';
//   }

  // State to hold the form data
  const [formData, setFormData] = useState(() => {
     // Initial state setup
    const initialFormData = {};
    for (let title of fieldTitles) {
        console.log(count++)
        initialFormData[title] = '';
  }
    return initialFormData;
  }); 


  // Handle input change
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    console.log(`Key pressed: ${name}, Current Value: ${value}`);
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fieldTitles.map(title => (
          <div className="inputGroup" key={title}>
            <label htmlFor={title}>{title}:</label>
            <input
              type="text"
              id={title}
              name={title}
              value={formData[title] || ''}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormType;