import React, { useState } from 'react';
import Question from './Question';
const MyComponent = (props) => {
const [display, setDisplay] = useState(false)  

  function showCategory(e) {
    e.preventDefault()
    setDisplay(true) 
  }
  
  return (
    
  <>
 
    <div
      style={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      <div className={display ? "" : "d-none"}>
         {Object.keys(props).map(item => {  
          return(       
            <div   
             style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
            }}
             >  <h3> Select the Category</h3>
             <div
							onClick={showCategory}
							value={item}>    
              {props[item].map((subcategory, index) => (
              <card>
              <button key={index}
              style={{
               fontSize: '20px',
               borderRadius: '5px',
               cursor: 'pointer',
               width: "220px",
               border: "3px solid rgba(220, 168, 221, 0.982)",
               boxShadow: "3px 3px 6px #bebebe, -3px -3px 6px #ffffff",
               backdropFilter: "blur(10px)",
               boxsShadow: "0 2px 15px rgba(220, 168, 221, 0.982)",
               display: "flex",
               flexWrap: "warp",
                
              }}
              >{subcategory}</button>
              </card>
            ))}
            {props.subcategory}
						</div>  
            </div>
          )
         })}
      </div>
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
        className={display ? "d-none" : ""}
      >
        <h2>QUIZ&#129419;</h2>
        <Question/>
        <button
          style={{
            fontSize: '20px',
               borderRadius: '5px',
               cursor: 'pointer',
               width: "220px",
               border: "3px solid rgba(220, 168, 221, 0.982)",
               boxShadow: "3px 3px 6px #bebebe, -3px -3px 6px #ffffff",
               backdropFilter: "blur(10px)",
               boxsShadow: "0 2px 15px rgba(220, 168, 221, 0.982)",
               display: "flex",
               flexWrap: "warp",
          }}
          onClick={showCategory}
           >
          Start
        </button>
      </div>
    </div>
    </>
  );
           
  
};

export default MyComponent;