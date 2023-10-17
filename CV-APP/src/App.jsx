// import { useState } from 'react'
import './App.css'
import FormType from './components/FormType'
import InputBlock from './components/InputBlock'

function App() {
  // const [count, setCount] = useState(0)
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
        />
        <FormType
          headerTitle= {"Education"}
          fieldTitles = {["School", "Degree", "Start Date", "End Date", "Location"]}
          expandable={true}
          expanded={false}
        />
        <FormType
          headerTitle= {"Experience"}
          fieldTitles = {["Company Name", "Position Title", "Start Date", "End Date", "Location", "Description"]}
          expandable={true}
          expanded={false}
        />
    </div>

    <div className='cvPreview'>

    </div>

    </>
  )
}

export default App
