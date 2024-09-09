import React, { useState } from 'react'
import './sidebar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


const Sidebar = () => {
    const [extended,setExtended] = useState()
  return (
    <div className="sidebar">
        <div className="top">
            <div className='menu'><GiHamburgerMenu onClick={() => setExtended((prev) => !prev)} size={35}/></div>
            <div className="new-chat">
                <BsPlusSquareFill size={30}/>
                {extended ? <p>New Chat</p> : null} 
            </div>
            {
                extended ? 
                <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    <div className="recent-entry">
                        <RiMessage2Fill size={30}/>
                        <p>What is React?</p>
                    </div>
                </div> : null

            }
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <BsFillPatchQuestionFill size={30}/>
                {extended ? <p>Help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <FaHistory size={30}/>
                {extended ? <p>Activity</p> : null}
            </div>
            <div className="bottom-item recent-entry">
                <IoSettingsOutline size={30}/>
                {extended ? <p>Settings</p> : null}
            </div>
        </div>

    </div>
    
  )
}

export default Sidebar