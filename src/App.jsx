import { useState } from 'react'
import './App.css'

function App() {
  const[height,setHeight] = useState("");
  const[weight,setWeight] = useState("");
  const[bmi,setBmi] = useState(null);
  const[bmiStatus,setBmiStatus] = useState("");
  const[errorMessage,setErrorMessage] = useState("");

  const calculateBmi = () => 
  {

    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);


    if(isValidHeight && isValidWeight)
      {
        const heightInMts = height/100;
        const bmiValue = weight / (heightInMts * heightInMts);
        setBmi(bmiValue.toFixed(2));

        if(bmiValue < 18.5)
          {
            setBmiStatus("Under Weight");
          }
        else if(bmiValue >= 18.5 && bmiValue < 24.5)
          {
            setBmiStatus("Normal Weight");
          }
        else if(bmiValue >= 25 && bmiValue < 29.9)
          { 
            setBmiStatus("Overweight");
          }
        else
          {
            setBmiStatus("Obese");            
          }

         setErrorMessage("");
      }

      else
      {
        setBmi(null);
        setBmiStatus("");
        setErrorMessage("Please enter a valid numeric value for height and weight.");
      }


  }

  const clearAll = () =>
  { 
    setBmi(null);
    setBmiStatus("");
    setHeight("");
    setWeight("");

  }

  return (
    <>
       <div className='BMI-calculator'>
          
          <div className='box'></div>

          <div className="data">

            <h1>BMI Calculator</h1>

            <p className='error'>{errorMessage}</p>

            <div className="input-container">
              <label htmlFor="height"> Height (cm) : </label>
              <input type="text" id='height' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>

            <div className="input-container">
              <label htmlFor="weight"> Weight (Kg) : </label>
              <input type="text" id='weight' value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </div>

            <div className='buttons'>
              <button onClick={calculateBmi}>Calculate BMI</button>
              <button onClick={clearAll} id='clear'>Clear</button>
            </div>



          {bmi !== null && <div className="result">
              <p>Your BMI is : {bmi}</p>
              <p>Status : {bmiStatus}</p>
            </div>}
          
            
            <p id='copyright'>Designed By <span>Kaarthik</span></p>


          </div>


       </div>
    </>
  )
}

export default App
