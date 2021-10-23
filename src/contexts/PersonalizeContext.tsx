import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PersonalizeModal } from "../components/PersonalizeModal";
import { CountdownContext } from "./CountdownContext";


interface PersonalizeContextData{

    openPersonalizeModal: () => void;
    closePersonalizeModal: () => void;
    askChangeTime: (minutes) => void;
}


interface PersonalizeProviderProps {
    children: ReactNode
}

export const PersonalizeContext = createContext({} as PersonalizeContextData)



export function PersonalizeProvider({children}: PersonalizeProviderProps){
    const {changeTime} = useContext(CountdownContext)
    const [isPersonalizeModalOpen, setIsPersonalizeModalOpen] = useState(false);
    

    function openPersonalizeModal(){
        setIsPersonalizeModalOpen(true)
    }

    function closePersonalizeModal(){
        setIsPersonalizeModalOpen(false)
    }

    function askChangeTime(minutes){
        const seconds = minutes*60;
        console.log(seconds)
       changeTime(seconds);
    }

    

    return(
        <PersonalizeContext.Provider value={{openPersonalizeModal, closePersonalizeModal, askChangeTime}}>
            {children}
            { isPersonalizeModalOpen && <PersonalizeModal/>}
        </PersonalizeContext.Provider>)
 }