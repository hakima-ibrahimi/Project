// import TriviaCategories from "./TriviaCategories"
import { useEffect, useState } from "react";
import getQuestion from "./api"
import MyComponent from "./MyComponent";

export default function Question(){

    const [question, setQuestion] = useState()
  
  useEffect(() => {
    getQuestion().then(res  =>  {
      console.log(res) 
      
      const resQuestion = Object.keys(res) 
      setQuestion(resQuestion)
  })
  }, [])

  return (
    <>
    <di>
        <MyComponent question={question} />
    </di>
    </>
  )
};