import React, { useState, useRef } from 'react';
import ExpandedForm from './ExpandedForm';
import RegularForm from './RegularForm';
import CollapsedForm from './CollapsedForm';

function FormType({ 
  headerTitle, 
  fieldTitles, 
  expandable}) 
  
  {

  const [formList, setFormList] = useState([]);
  const [title, setTitle] = useState(''); // State to hold the "School" input value
  const [blockIsExpanded, setBlockIsExpanded] = useState(false); // Initialize with the provided expanded value
  const [formIsExpanded, setFormIsExpanded] = useState(false); // Initialize with the provided expanded value
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [formData, setFormData] = useState(() => {
    const initialFormData = {};
    for (let title of fieldTitles) {
      initialFormData[title] = '';
    }
    return initialFormData;
  });

  

  function blockExpansionHandler() {
    setBlockIsExpanded(!blockIsExpanded); // Toggle the expansion stat
    }
  
  function onSave () {
    console.log()
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

  // Handle input change
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  //   if (name === "School") {
  //     setTitle(value); // Update the title state with the latest value
  //   }
  // }
  
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
        />
      )} 
        
        {blockIsExpanded && ( // Conditional rendering based on blockIsExpanded
        <>
        {expandable &&
            formList.map((form) => {
              const titleKeys = Object.keys(form.formData);
              const firstValue = form.formData[titleKeys[0]];
              const secondValue = form.formData[titleKeys[1]];
              console.log(form.formData);
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

export default FormType;