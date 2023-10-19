import React, { useState, useEffect, useRef } from 'react';
import ExpandedForm from './ExpandedForm';
import RegularForm from './RegularForm';
import CollapsedForm from './CollapsedForm';

function FormType({ 
  headerTitle, 
  fieldTitles, 
  expandable,
  onFormChange,
  onFormListChange,
  }) 

{

  const [formData, setFormData] = useState({});
  const [formList, setFormList] = useState([]);
  const [blockIsExpanded, setBlockIsExpanded] = useState(false); // Initialize with the provided expanded value
  const [isButtonVisible, setIsButtonVisible] = useState(true);


  function handleRegularFormChange(fieldName, value) {
    const updatedFormData = {
      ...formData,
      [fieldName]: value,
    };
    setFormData(updatedFormData);
    onFormChange(updatedFormData); // Inform parent of change
  }

  useEffect(() => {
    if (onFormListChange) {
        onFormListChange(formList);
    }
}, [formList, onFormListChange]);
  
  function blockExpansionHandler() {
    setBlockIsExpanded(!blockIsExpanded); // Toggle the expansion stat
    }
  
  const originalFormData = useRef({}); // Using useRef to maintain the initial state

  function formFunctionsHandler(id, action = 'toggle') {
    setFormList((prevForms) =>
        prevForms.map((form) => {
            if(form.id === id && action === 'expand') {
                originalFormData.current[id] = { ...form.formData };
            }
            if(form.id === id && action === 'cancel') {
                form.formData = originalFormData.current[id];
            }
            return form.id === id 
            ? { 
                ...form, 
                isExpanded: action === 'toggle' ? !form.isExpanded : (action === 'expand')
              }
            : form;
        })
    );
    setIsButtonVisible(action !== 'expand');
}

  
  function handleChange(formId, fieldName, value) {
    console.log(fieldName)
    setFormList((prevForms) =>
      prevForms.map((form) =>
        form.id === formId
          ? {
              ...form,
              formData: {
                ...form.formData,
                [fieldName]: value,
              },
            }
          : form
      )
    );
  }

  function addNewForm() {

    const newForm = {
      id: `Form ${formList.length + 1}`, // Use a unique identifier for each form
      formData: {},
      isExpanded: true,
    };
  
    // Initialize formData for each field title
    fieldTitles.forEach((fieldTitle) => {
      newForm.formData[fieldTitle] = '';
    });

    setFormList((prevFormList) => [...prevFormList, newForm]);
    setIsButtonVisible(false);
  }

  function removeForm(id) {
    setFormList(prevForms => prevForms.filter(form => form.id !== id));
    setIsButtonVisible(true);
}


  return (
    <>
    <div className="inputBlock" id={headerTitle}>
      <div className='headerContainer'>
        <h2>{headerTitle}</h2>
        {expandable && (
          <span onClick={blockExpansionHandler}>
            {blockIsExpanded ? '^' : 'v'}
          </span>
        )}
      </div>
      {!expandable && (
        <RegularForm
          headerTitle={headerTitle}
          fieldTitles={fieldTitles}
          formData={formData}
          onChange={handleRegularFormChange}
        />
      )} 
        
        {blockIsExpanded && ( // Conditional rendering based on blockIsExpanded
        <>
        {expandable &&
            formList.map((form) => {
              const titleKeys = Object.keys(form.formData);
              const firstValue = form.formData[titleKeys[0]];
              const secondValue = form.formData[titleKeys[1]];
              return form.isExpanded ? (
                <ExpandedForm
                  key={form.id}
                  formId={form.id}
                  fieldTitles={fieldTitles}
                  formData={form.formData}
                  handleChange={handleChange}
                  onRemove={() =>  removeForm(form.id)}
                  onCancel={() => formFunctionsHandler(form.id)}
                  onSave={() => formFunctionsHandler(form.id, 'save')}
                />
              ) : (
                <CollapsedForm
                    key={form.id}
                    title={`${firstValue} - ${secondValue}`}
                    onExpand={() => formFunctionsHandler(form.id)}
                />
              );
            })
          }
          {expandable && isButtonVisible && (
            <button onClick={addNewForm}>{headerTitle + ' +'}</button>
          )}
        </>
      )}
    </div>
  </>
  );
}


FormType.defaultProps = {
  onFormListChange: () => {}
};

export default FormType;