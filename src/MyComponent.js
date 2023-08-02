import React, { useState } from 'react';

const MyComponent = (props) => {
const [display, setdisplay] = useState(false)  

  function showCategory(e) {
    e.preventDefault()
    setdisplay(true)
    
  }
  return (
   
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
            <>
         
            <div   
             style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
        >
             <button 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  display: 'flex',
                  flexWrap: 'wrap',
                }}


							onClick={showCategory}
							value={item}>
						  {item}
						</button>  
            </div>
         
            </>
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
        <h2>quiz</h2>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={showCategory}
         
        >
          Start
        </button>
      </div>
    </div>
  );
           
  
};

export default MyComponent;