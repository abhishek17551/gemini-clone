import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const InputContext = createContext()

const InputProvider = (props) => {

    const [input,setInput] = useState('')
    const [recentPrompt,setRecentPrompt] = useState('')
    const [prevPrompts,setPrevPrompts] = useState([])
    const [showResult,setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState('')

    const onSent = async (prompt) => {
        setResultData('')
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt != undefined){
            response = await runChat(prompt)
            setRecentPrompt(prompt)
        }
        else {
            setPrevPrompts(prev => [...prev,input])
            setRecentPrompt(input)
            response = await runChat(input)
        } 

        let responseArray = response.split("**")
        let modifiedResponse=""; //Modify the response based on ** characters
        for(let i=0; i<responseArray.length;i++){
            (i === 0 || i%2 != 1) ? modifiedResponse += responseArray[i] : modifiedResponse += '</br><b>'+ responseArray[i] +'</b>'
        }
        let modifiedResponse2; //Modify the response based on * character
        modifiedResponse2 = modifiedResponse.split("*").join('</br>')

        let newResponseArray = modifiedResponse2.split(" ")
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord = newResponseArray[i]
            delayPara(i,nextWord + " ")
        }

        setLoading(false)
        setInput('')
    }

    const delayPara = (index,nextWord) => {
        setTimeout(() => {
            setResultData((prev) => prev+=nextWord)
        }, 75*index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }
    
    const inputValue = {
        prevPrompts,
        setPrevPrompts,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        onSent,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <InputContext.Provider value={inputValue}>
            {props.children}
        </InputContext.Provider>
    )
}

export default InputProvider