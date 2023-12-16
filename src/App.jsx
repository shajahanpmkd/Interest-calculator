
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

const [amount,setAmount]=useState(0)
const [year,setYear]=useState(0)
const [rate,setRate]=useState(0)

const [interest,setInterest]=useState(0)

console.log(amount);
console.log(year);
console.log(rate);


const calculate=(e)=>{
   const output=amount*year*rate/100;
   console.log(output);
   setInterest(output)
}

const reset=(e)=>{
  setAmount(0);
  setInterest(0);
  setRate(0);
  setYear(0)
}

  return (
    <div className="App">
       <div className="container">
        <div className="header">
          <h1>Simple Intrest Calculator</h1>
          <p>calculate your simple intrest with us❤️</p>
        </div>
          
         <div className="total">
          <h3>&#8377;{interest}</h3>
          <p>Your total intrest</p>
         </div>

         <div className="form">
          <form action>
            <div className="input">
            <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="standard" /> 
            <br />
            <TextField id="filled-basic" value={year||""} onChange={(e)=>setYear(e.target.value)} label="Year" variant="standard" />
            <br />
            <TextField id="standard-basic" value={rate||""} onChange={(e)=>setRate(e.target.value)} label="Rate" variant="standard"  />
            </div>
    <br />
            <div className="button">
           
<Button variant="contained" color="success" onClick={e=>calculate(e)}> calculate</Button>
<Button variant="outlined" color="error" onClick={e=>reset(e)}>reset</Button>
            </div>
                    
          </form>
         </div>

       </div>
    </div>
  );
}

export default App;
