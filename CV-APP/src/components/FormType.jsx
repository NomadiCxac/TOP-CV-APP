import React, { useState } from 'react';

function FormType({ fieldTitles, headerTitle, expandable, setIsButtonVisible }) {
  const [isExpanded, setIsExpanded] = useState(false);

  let title = "";
  // State to hold the form data
  const [formData, setFormData] = useState(() => {
    // Initial state setup
    const initialFormData = {};
    for (let title of fieldTitles) {
      initialFormData[title] = '';
    }
    return initialFormData;
  });

  // Toggle function for the arrow
  function toggleExpansion(e) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    setIsButtonVisible(true);
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
    // Case if 
    if (name == "School") {
      title = value;
      console.log(title);
    }
  };

  // Handle form submission
  function generateInfoSlice(e) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    setIsButtonVisible(true);
  }

  

  return (
    <>
      {!expandable ? (
        // If unexpandable, always render form inputs
        <form>
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
      ) : isExpanded ? (
        // If expandable and expanded, render infoSlice and buttons
        <>
          <div className="infoSlice" onClick={toggleExpansion}>
            {title}
          </div>
        </>
      ) : (
        // If expandable and not expanded, render form inputs
        <form onSubmit={generateInfoSlice}>
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
            <div className='infoSliceButtons'>
            <button>Delete</button>
            <button onClick={toggleExpansion}>Cancel</button>
            <button onClick={generateInfoSlice}>Save</button>
          </div>
        </form>
      )}
    </>
  )
}

export default FormType;