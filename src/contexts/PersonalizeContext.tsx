import Cookies from "js-cookie";
import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PersonalizeModal } from "../components/PersonalizeModal";
import { CountdownContext } from "./CountdownContext";


interface PersonalizeContextData{
    username: string;
    openPersonalizeModal: () => void;
    closePersonalizeModal: () => void;
    askChangeTime: (minutes) => void;
    changeUsername: (username) => void;
}


interface PersonalizeProviderProps {
    children: ReactNode;
    username: string;
}

export const PersonalizeContext = createContext({} as PersonalizeContextData)



export function PersonalizeProvider({children, ...rest}: PersonalizeProviderProps){
    const {changeTime} = useContext(CountdownContext)
    const [isPersonalizeModalOpen, setIsPersonalizeModalOpen] = useState(false);
    const [username, setUsername] = useState(rest.username ?? 'Cliente');
    
    useEffect(() => {
        Cookies.set('username', String(username));
    }, [username])

    useEffect(() => {
        if (username==='Cliente'){
        setIsPersonalizeModalOpen(true);}
    }, [])

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

    function changeUsername(username){
        setUsername(username)
    }

    

    return(
        <PersonalizeContext.Provider value={{username, openPersonalizeModal, closePersonalizeModal, askChangeTime, changeUsername}}>
            {children}
            { isPersonalizeModalOpen && <PersonalizeModal/>}
        </PersonalizeContext.Provider>)
 }