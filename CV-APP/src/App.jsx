import React, { useState } from 'react';
import './App.css';
import FormType from './components/FormType';
import Resume from './components/Resume';

function App() {
  const [personalDetails, setPersonalDetails] = useState({})
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])

  return (
    <>
    <div className='controlPanel'>
      test
    </div>

    <div className='formsContainer'>
        <FormType
          headerTitle= {"Personal Details"}
          fieldTitles = {["Full Name", "Email", "Phone Number", "Address"]}
          expandable={false}
          onFormChange={setPersonalDetails}
        />
        <FormType
          headerTitle= {"Education"}
          fieldTitles = {["School", "Degree", "Start Date", "End Date", "Location"]}
          expandable={true}
          expanded={false}
          onFormListChange={setEducation}
        />
        <FormType
          headerTitle= {"Experience"}
          fieldTitles = {["Company Name", "Position Title", "Start Date", "End Date", "Location", "Description"]}
          expandable={true}
          onFormListChange={setExperience}
        />
    </div>

    <div className='cvPreview'>
    <Resume
        personalDetails={personalDetails}
        education={education}
        experience={experience}
      />
    </div>

    </>
  )
}

export default App
