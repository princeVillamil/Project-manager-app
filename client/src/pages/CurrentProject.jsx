import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../Components/Header'
export default function CurrentProject() {
  let [isProjectNameChange, setIsProjectNameChange] = useState(false)
  const [newProjectName, setNewProjectName] = useState('Project')


  const setInput = (input, outPut)=>{
    let outputText = document.getElementById(outPut)
    console.log(input.keyPress)
    if(outputText.innerText === input.target.value || input.key !== 'Enter') {
      if(input.key === 'Enter' || input.type === 'blur') setIsProjectNameChange(isProjectNameChange=!isProjectNameChange)
      return 
    }else{
      if(input.key === 'Enter' || input.type === 'blur') setIsProjectNameChange(isProjectNameChange=!isProjectNameChange)
      setNewProjectName(newProjectName=>newProjectName=input.target.value)

    }
  }
  useEffect(()=>{
    if(isProjectNameChange === true) document.getElementById('projectNameInput').focus()
  }, [isProjectNameChange])
  return (
    <div className="2xl:container 2xl:mx-auto">
      <Header/>
      <div className="mt-5 px-5 container flex gap-2 flex-row mx-auto">
        <div className="relative flex rounded w-fit">
          <h1 id='projectName' className={isProjectNameChange?'hidden':'hover:bg-gray-300 hover:border-gray-300 cursor-pointer px-3 border border-[.25rem] border-white py-1 rounded font-[700] text-[20px]'} onClick={()=>setIsProjectNameChange(isProjectNameChange=!isProjectNameChange)}>{newProjectName}</h1>
          <input id='projectNameInput' type="text" className={isProjectNameChange?'px-3 py-1 border border-[.25rem] border-white rounded font-[700] text-[20px]':'hidden'} defaultValue={newProjectName} onBlur={(e)=>setInput(e, 'projectName')} onKeyPress={(e)=>setInput(e, 'projectName')} onMouseLeave={(e)=>setInput(e, 'projectName')}/>
        </div>
        <button className='bg-black rounded text-white'>Click</button>
      </div>
    </div>
  )
}
// font-size: 18px;
// font-weight: 700;
// line-height: 32px;