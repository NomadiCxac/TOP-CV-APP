import React, { useState, useRef } from 'react';
import ResumeHeader from './ResumeHeader';
import ResumeContent from './ResumeContent';

function Resume ({personalDetails, education, experience}) {
    const [resumeData, setResumeData] = useState([])

  return (
    <>
        <ResumeHeader
            title={"Personal Details"}
            data = {personalDetails}
        />
        <ResumeContent 
            title={"Education"}
            data = {education}
        />
        <ResumeContent 
            title={"Experience"}
            data = {experience}
        />
    </>
  )
}

export default Resume;