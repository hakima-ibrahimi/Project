import React, {useEffect} from "react";
import {getQuestion} from "./api"


export default function Question(){

    // const [question, setQuestion] = useState()
  
  useEffect(() => {
    getQuestion().then(res  =>  {
      console.log(res) 
      
      // const resQuestion = Object.keys(res) 
      // setQuestion(resQuestion)
  })
  }, [])

  return (
    <>
    
    </>
  )
};