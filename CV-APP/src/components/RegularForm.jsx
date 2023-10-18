import React from 'react';

function RegularForm({ headerTitle, fieldTitles, formData, onChange }) {
  // The local state has been removed as the parent will manage the formData now
  
  function handleChange(e) {
    const { name, value } = e.target;
    onChange(name, value);  // Calling the passed down onChange with field name and value
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
            onChange={handleChange}  // Using the local handleChange to call the passed down onChange
          />
        </div>
      ))}
    </form>
  );
}

export default RegularForm;