import { useEffect, useState } from "react";
import getQuestionCategories from "./api"
import MyComponent from "./MyComponent";

export default function TriviaCategories(){
  
  const [category, setCategory] = useState()
  
  useEffect(() => {
    getQuestionCategories().then(res  =>  {
      console.log(res) 
      
      const resCategories = Object.keys(res) 
       setCategory(resCategories)
      
  })
  }, [])
 
 
  return (
    <>
    <div>
      <MyComponent category={category} />
    </div>
    </>
  )
};


