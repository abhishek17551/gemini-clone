import React from 'react'
import './main.css'
import { FaUserSecret } from "react-icons/fa6";
import { BsFillArrowRightSquareFill } from "react-icons/bs";


const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <FaUserSecret size={50}/>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello Dev,</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas temporibus deleniti nisi.</p>
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type='text' placeholder='Enter a prompt here...'/>
                    <div className='enter'>
                        <BsFillArrowRightSquareFill size={35}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main