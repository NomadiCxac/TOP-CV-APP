// import { useState } from 'react'
import './App.css'
import InputBlock from './components/InputBlock'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <div className='controlPanel'>
      test
    </div>

    <div className='formsContainer'>
      <InputBlock
          title="Personal Details"
          fieldTitles = {["Full Name", "Email", "Phone Number", "Address"]}
          expandable={false}
        />
        <InputBlock
          title="Education"
          fieldTitles = {["School", "Degree", "Start Date", "End Date", "Location"]}
          expandable={true}
        />
        <InputBlock
          title="Experience"
          fieldTitles = {["Company Name", "Position Title", "Start Date", "End Date", "Location", "Description"]}
          expandable={true}
        />
    </div>

    <div className='cvPreview'>

    </div>

    </>
  )
}

export default App
