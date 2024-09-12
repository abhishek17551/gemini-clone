import React, { useContext } from 'react'
import './main.css'
import { FaUserSecret } from "react-icons/fa6";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { InputContext } from '../../context/InputContext';
import { SiGooglegemini } from "react-icons/si";


const Main = () => {

    const {input,setInput,onSent,recentPrompt,showResult,loading,resultData} = useContext(InputContext)
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <FaUserSecret size={50}/>
        </div>
        <div className="main-container">
            {
                !showResult ?
                <>
                    <div className="greet">
                        <p><span>Hello Dev,</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas temporibus deleniti nisi.</p>
                        </div>
                    </div>
                </> : 
                <div className='result'>
                    <div className="result-title">
                        <FaUserSecret size={50}/>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <SiGooglegemini size={35}/>
                        {
                            loading ?
                            <div className='loader'>
                                <hr/>
                                <hr/>
                                <hr/>
                            </div>
                            :
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                        
                    </div>
                </div>
            }


            <div className="main-bottom">
                <div className="search-box">
                    <input type='text' placeholder='Enter a prompt here...' onChange={(e) => setInput(e.target.value)} value={input}/>
                    <div className='enter'>
                        <BsFillArrowRightSquareFill size={35} onClick={() => onSent()}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main