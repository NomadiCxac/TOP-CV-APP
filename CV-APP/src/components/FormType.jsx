import React, { useState } from 'react';

function FormType({ fieldTitles, expandable, expanded, setIsButtonVisible, onRemove }) {

  const [title, setTitle] = useState(''); // State to hold the "School" input value
  const [isExpanded, setIsExpanded] = useState(expanded); // Initialize with the provided expanded value
  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    for (let title of fieldTitles) {
      initialFormData[title] = '';
    }
    return initialFormData;
  });

  // Toggle function for the arrow
  function toggleExpansion(e) {
    setIsExpanded(!isExpanded);
    setIsButtonVisible(true);
  }


  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    console.log(name);

    if (name === "School") {
      setTitle(prevTitle => (value)); // Update the title state with the latest value
    }
  };


  return (
    <>
      {/* If not expandable or if expandable and isExpanded, always render form inputs */}
      {(!expandable || (expandable && isExpanded)) && (
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
          {expandable && (
            <div className='infoSliceButtons'>
              <button>Delete</button>
              <button onClick={toggleExpansion}>Cancel</button>
              <button onClick={toggleExpansion}>Save</button>
              {onRemove && <button onClick={onRemove}>Remove</button>}
            </div>
          )}
        </form>
      )}
      {expandable && !isExpanded && (
        <div className="infoSlice" id={title} onClick={toggleExpansion}>
          {title}
        </div>
      )}
    </>
  );
}

export default FormType;