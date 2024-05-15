import React, { useContext,useEffect, useState } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../context/Context'
function Main() {

let [CUser,setCUser] = useState("")
    useEffect(() => {
      const userInput = prompt("Enter User Name : ");
     setCUser(userInput)
  
      // Clean up any side effects (not needed in this case)
      return () => {
        // You can include any cleanup logic here if needed
      };
    }, []); // Empty dependency array to run this effect only once when the component mounts
  
  
  
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt='' />
      </div>
      <div className='main-container'>


        {!showResult ? <>
          <div className='greet'>
            <p><span>Hey, {CUser}</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className='cards'>
            <div className='card' onClick={()=>setInput("Help me write an email for requesting a refund for a product.")}>
              <p>Help me write an email for requesting a refund for a product.</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className='card' onClick={()=>setInput("Help me writing a code for factorial of a number")}>
              <p>Help me writing a code for factorial of a number</p>
              <img src={assets.code_icon} alt="" />
            </div>
            <div className='card' onClick={()=>setInput("Help me solving rubix cube")}>
              <p>Help me solving rubix cube</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className='card' onClick={()=>setInput("Create an Architecture for a House")}>
              <p>Create an Architecture for a House</p>
              <img src={assets.compass_icon} alt="" />
            </div>
          </div>

        </> : <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt=''/>
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt=''/>
              {loading?<div className='loader'>
                <hr/>
                <hr/>
                <hr/>

              </div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
   
            </div>
        </div>
        }





        <div className='main-bottom'>
          <div className='search-box'>
            <input onChange={(e) => setInput(e.target.value)} type='text' value={input} placeholder='Enter a prompt here' />
            <div>
              
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
