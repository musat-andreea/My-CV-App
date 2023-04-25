import React, {FormEvent, useState} from 'react';
import {useMultistepForm} from "./useMultistepForm";
import {AccountForm} from "./AccountForm";
import {UserPrincipalForm} from "./UserPrincipalForm";
import {UserPersonalForm} from "./UserPersonalForm";

type FormData = {
  nume: string
  prenume: string
  telefon: string
  adresa: string
  dataNasterii: string
  nationalitate: string
  linkedin: string,
  email: string
  parola: string
}

const INITIAL_DATA: FormData = {
  nume: "",
  prenume: "",
  telefon: "",
  adresa: "",
  dataNasterii: "",
  nationalitate: "",
  linkedin: "",
  email: "",
  parola: ""
}

function App() {

  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields}
    })
  }
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next
  } = useMultistepForm([
      <AccountForm {...data} updateFields={updateFields}/>,
      <UserPrincipalForm {...data} updateFields={updateFields}/>,
      <UserPersonalForm {...data} updateFields={updateFields}/>
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if(!isLastStep) return next()
    alert("Successful Acount Creation")
  }

  return (
      <div style={{
    position: "relative",
    background: "white",
    border: "1px solid black",
    padding: "2rem",
    margin: "1rem",
    borderRadius: ".5rem",
    fontFamily: "Arial",
    maxWidth: "max-content"
  }}>
    <form onSubmit={onSubmit}>
      <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}>
        {currentStepIndex + 1}/{steps.length}
      </div>
      {step}
      <div style={{marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end"}}>
        {!isFirstStep && <button type="button" onClick={back}>
          Back
        </button>}
       <button type="submit">
         {isLastStep ? "Submit" : "Next"}
       </button>

      </div>
    </form>
  </div>
  )
}

export default App;
