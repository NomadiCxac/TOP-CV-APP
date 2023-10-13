import React, { useState } from 'react';

function FormType({ fieldTitles, headerTitle, expandable}) {


//   So previously I worked with Alexei Darmin to understand why this initalization might be more expensive than reinitalizing a state 
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
    <>
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
        {expandable && <button className={headerTitle}>{headerTitle + " +"}</button>}
      </form>
    </>
  );
}

export default FormType;