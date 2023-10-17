// RegularForm.js
import React, { useState } from 'react';

function RegularForm({ headerTitle, fieldTitles }) {
  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    for (let title of fieldTitles) {
      initialFormData[title] = '';
    }
    return initialFormData;
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <form className="inputForm" id={headerTitle}>
      {fieldTitles.map((title) => (
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
    </form>
  );
}

export default RegularForm;