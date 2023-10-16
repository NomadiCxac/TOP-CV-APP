import React, { useState, useEffect } from 'react';
import FormType from './FormType';

function InputBlock({ title, fieldTitles, expandable }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formTypes, setFormTypes] = useState([])

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  function toggleExpansion() {
    setIsExpanded(!isExpanded);
    setIsButtonVisible(true);
  }

  function addFormType() {
    setIsButtonVisible(false);
    setFormTypes((prevFormTypes) => [
      ...prevFormTypes,
      <FormType
        key={prevFormTypes.length}
        fieldTitles={fieldTitles}
        expandable={expandable}
        expanded={true}
        setIsButtonVisible={setIsButtonVisible}
        onRemove={() => removeFormType(prevFormTypes.length)}
      />,
    ]);
  }

  function removeFormType(index) {
    const updatedFormTypes = [...formTypes];
    updatedFormTypes.splice(index, 1);
    setFormTypes(updatedFormTypes);
  }

  // useEffect(() => {
  //   // Log the infoSlices array whenever it changes
  //   console.log(infoSlices);
  // }, [infoSlices]);


  return (
  
    // Header Component
    <div className="inputBlock" id={title}>
      <div className='headerContainer'>
        <h2>{title}</h2>
        {expandable && (
          <span onClick={toggleExpansion}>
            {isExpanded ? '^' : 'v'}
          </span>
        )}
      </div>
        
      {!expandable && (
        <FormType
          fieldTitles={fieldTitles}
          expandable={expandable}
          expanded={true}
        />
      )}

      {expandable && !isExpanded && (
        <div className='formsHidden'></div>
      )}

      {expandable && isExpanded && (
        <div className='infoSliceContainer'>
          {formTypes.map((formType, index) => (
            <div className="infoSliceBlock" key={index}>
              {formType}
            </div>
          ))}
        </div>
      )}
      {expandable && isButtonVisible && (
        <button onClick={addFormType}>{title + " +"}</button>
      )}
    </div>
  );
}

export default InputBlock;