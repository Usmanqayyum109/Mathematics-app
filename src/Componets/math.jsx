import React, { useState } from 'react'

function Test () {

    const [fNumber,setFNumber] = useState(2);
    const [lNumber,setLNumber] = useState(2);
    const [number,setNumber] = useState("×");
    // const [equal,setEqual] = useState("=");
    const [answer,setAnswer] = useState(4);
    const [put,setPut] = useState();
    const [answerDetail,setAnswerDetail] = useState();
    // const [tQuestion,setTQuestion] = useState(1);
    // const [rQuestion,setRQuestion] = useState(0);
    // const [wQuestion,setWQuestion] = useState(0);
    // const [cAnswer,setCAnswer] = useState(true);

    const expression = ["+","-","×","÷"];

    function work(x) {
      setAnswerDetail("");
      setPut("");
        // setTQuestion(tQuestion + 1);
        if (x === 0) {
          setNumber(expression[0]);
        //   setEqual("="); 
          
          setAnswer("");
         const  newFNumber = Math.trunc(Math.random() * (100 - 1 + 1) + 1);
         const  newLNumber = Math.floor(Math.random() * 101);
         setAnswer(newFNumber + newLNumber);
         setFNumber(newFNumber);
         setLNumber(newLNumber);
          
        } else if (x === 1) {
          setNumber(expression[1]); 
        //   setEqual("=");
             
         const  newFNumber = Math.trunc(Math.random() * (100 - 1 + 1) + 1);
         const  newLNumber = Math.floor(Math.random() * newFNumber);
        
          setAnswer(newFNumber - newLNumber);
          setFNumber(newFNumber);
          setLNumber(newLNumber);
          
           
       
    
    } else if (x === 2) {
            setNumber(expression[2]);
            // setEqual("=");    
            const newFNumber = Math.trunc(Math.random() * (10 - 1 + 1) + 1);
            const newLNumber = Math.floor(Math.random() * 11);
            setAnswer(newFNumber * newLNumber);
            setFNumber(newFNumber);
            setLNumber(newLNumber);
            
        } else if (x === 3) {
            setNumber(expression[3]); 
            // setEqual("=");   
             let newFNumber = Math.floor(Math.random() * 101);
             let newLNumber = Math.trunc(Math.random() * (10 - 1 + 1) + 1);
               while (newFNumber % newLNumber !== 0)
               {
                newFNumber = Math.floor(Math.random() * 101);
                newLNumber = Math.trunc(Math.random() * (10 - 1 + 1) + 1);
               }
               if (newFNumber > (newLNumber * 10) )
               {
                   newFNumber = newLNumber * 10;
               }
                setAnswer(newFNumber / newLNumber);
                setFNumber(newFNumber);
                setLNumber(newLNumber);
           
            }
           
        }
            
            
      
        function DisplayResult(studentAnswer, ourAnswer){
                // if (cAnswer === true){
                //     setCAnswer(false);
                
                 if (parseInt(studentAnswer) === ourAnswer){
                   setAnswerDetail("CONGRATULATIONS!  Your answer is right.");
                    
                    // setRQuestion(rQuestion + 1);
                 } else {
                    setAnswerDetail(`Your Answer is WRONG, Right Answer is ${answer}.`);
                    // setWQuestion(wQuestion + 1);
                 }
                // }
                } 
        
  
return (
<div>
   <div >
    <div >
    <h1 className='number'>{fNumber}<br />{lNumber}</h1>
    </div>
   <h3 className='with'>{number}</h3>
   
    <input className='input' type="text" name='enter' placeholder='Enter Your  Answer' value={put} onChange={(e) => setPut(e.target.value)}/>
    </div>
   
    
       
    
    <div>
    <button className='button' onClick={() =>{work(Math.floor(Math.random() * 4))}}>Next Question</button><br />
    <button className='button1' onClick ={() => {DisplayResult(put,  answer)}}>Check Your Answer </button>
    </div>
        <h1 className='answer'>{answerDetail}</h1>
        {/* <div>
        <h2>Total Question: {tQuestion}</h2>    
        <h4>Total Right Answers: {rQuestion}</h4> 
        <h4>Total Wrong Answers: {wQuestion}</h4>       
        </div> */}
        
   
    </div>



)
}



export default Test;