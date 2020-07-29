import React, {useState, useEffect, Dispatch, SetStateAction} from "react";

// since components are just functions, they use the same syntax

/***** Component structure - No Props - Both JSX and TSX *****/
function ComponentName () {
  return(<div>HTML to render</div>)
}

/***** Component structure - With Simple Props - JSX *****/
function ComponentName3 ({prop1, prop2}) {
  return(<div>HTML to render</div>)
}

/***** Component structure - With Simple Props - TSX *****/
// types are defined to the right of the parameters
// syntax without destructuring - (props: {prop1: string, prop2: number})
// syntax with destructuring is the same - ({prop1, prop2} : {prop1: string, prop2: number})
function ComponentName4 ({prop1, prop2} : {prop1: string, prop2: number}){
  return(<div>HTML to render</div>)
}

/***** Using the above component - Incorrect props *****/
function ComponentName5(){
  return(
    <ComponentName4 prop2='prop2' /> // 🚨 prop1 is missing and prop2 should be a string
  )
}

/***** Using the above component - Correct props *****/
function ComponentName6(){
  return(
    <ComponentName4 prop1='prop1' prop2={4} />
  )
}

/***** useState *****/
// The definition of useState is below
// function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
// It is a generic function, so the type needs to be set when it is called
function ComponentName7(){
  const [state, setState] = useState<string>('initial'); // calling useState with the type string
  return (
    <div>
      <ComponentName8 state={state} setState={setState} />
    </div>
  )
}

// the component above passed both state and setState down to this component, so those types need to be defined
// we can see the types from the return type of the useState definition above - [S, Dispatch<SetStateAction<S>>]
function ComponentName8({state, setState} : {state: string, setState: Dispatch<SetStateAction<string>>}){
  return(<div>HTML to render</div>)
}
