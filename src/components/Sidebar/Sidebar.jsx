import React, { useContext, useState } from 'react'
import './sidebar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { InputContext } from '../../context/InputContext';


const Sidebar = () => {
    const [extended,setExtended] = useState()
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(InputContext)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
  return (
    <div className="sidebar">
        <div className="top">
            <div className='menu'><GiHamburgerMenu onClick={() => setExtended((prev) => !prev)} size={35}/></div>
            <div className="new-chat" onClick={() => newChat()}>
                <BsPlusSquareFill size={30}/>
                {extended ? <p>New Chat</p> : null} 
            </div>
            {
                extended ? 
                <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    {
                        prevPrompts.map((item,index) => (
                            <div className="recent-entry" onClick={()=> loadPrompt(item)}>
                                <RiMessage2Fill size={30}/>
                                <p>{item.slice(0,20)}</p>
                            </div>
                        ))
                    }
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