import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { PersonalizarModal } from "../components/PersonalizarModal";


interface PersonalizarContextData{
    openPersonalizarModal: () => void;
    closePersonalizarModal: () => void;
}




export const PersonalizarContext = createContext({} as PersonalizarContextData)



export function PersonalizarProvider({children}){
    const [isPersonalizarModalOpen, setIsPersonalizarModalOpen] = useState(false);
    
    function openPersonalizarModal(){
        setIsPersonalizarModalOpen(true)
    }

    function closePersonalizarModal(){
        setIsPersonalizarModalOpen(false)
    }


    return(
        <PersonalizarContext.Provider value={{openPersonalizarModal, closePersonalizarModal}}>
            {children}
            { isPersonalizarModalOpen && <PersonalizarModal/>}
        </PersonalizarContext.Provider>)
 }