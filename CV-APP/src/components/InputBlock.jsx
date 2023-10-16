import React, { useState } from 'react';
import FormType from './FormType';


function InputBlock({ title, fieldTitles, expandable }) {
  // useState to manage visibility of the form
  const [isExpanded, setIsExpanded] = useState(false);

  // Array to store InfoSlice components
  const [infoSlices, setInfoSlices] = useState([]);

  const [isButtonVisible, setIsButtonVisible] = useState(true); // Added state for the button visibility

  // Toggle function for the arrow
  function toggleExpansion() {
    setIsExpanded(!isExpanded);
  }

  // Function to add a new InfoSlice
  function addInfoSlice() {
    const newInfoSlice = (
        <FormType
        fieldTitles={fieldTitles}
        headerTitle={title}
        expandable={expandable}
      />
    );
    setInfoSlices([...infoSlices, newInfoSlice]);
    setIsButtonVisible(false); // Hide the button after it's clicked
  }

  return (
    <div className="inputBlock" id={"draggable" + title}>
      <div className='headerContainer'>
      <h2>{title}</h2>
        {/* If expandable is true, show the arrow */}
        {expandable && (
          <span onClick={toggleExpansion}>
            {isExpanded ? '^' : 'v'}
          </span>
        )}
      </div>

      {/* Render InfoSlice components based on isExpanded */}
      {infoSlices.map((infoSlice, index) => (
        <div key={index}>{infoSlice}</div>
      ))}

      {/* Show FormType based on isExpanded state */}
      {!expandable && (
        <FormType
          fieldTitles={fieldTitles}
          headerTitle={title}
          expandable={expandable}
        />
      )}

      {expandable && isExpanded && isButtonVisible && (
        <button onClick={addInfoSlice}>{title + ' +'}</button>
      )}
    </div>
  );
}

export default InputBlock;