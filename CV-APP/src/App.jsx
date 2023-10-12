// import { useState } from 'react'
import './App.css'
import InputBlock from './components/InputBlock'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <InputBlock
        title="Personal Details"
        fieldTitles = {["Full Name", "Email", "Phone Number", "Address"]}
        expandable={true}
      />
    </>
  )
}

export default App
