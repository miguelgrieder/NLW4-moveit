import Cookies from "js-cookie";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";
import { PersonalizeContext } from "./PersonalizeContext";


interface CountdownContextData{
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    cicleDuration: number;
    startCountdown: () => void;
    resetCountdown: () => void;
    changeTime: (seconds: number) => void;
}

interface CountdownProviderProps {
    children: ReactNode;
    cicleDuration: number;
}


export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children, ...rest}: CountdownProviderProps){
    const {startNewChallenge} = useContext(ChallengesContext)
    const [cicleDuration, setCicleDuration] = useState(rest.cicleDuration ?? 25*60);//AQUI NÃO FUNCIONA O REST
    const [time, setTime] = useState(cicleDuration);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes  =  Math.floor(time/60);
    const seconds = time % 60;

    function changeTime(seconds) {
        setCicleDuration(seconds);
        setTime(seconds);
    }

    useEffect(() => {
        Cookies.set('cicleDuration', String(cicleDuration));
    }, [cicleDuration])

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(cicleDuration)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time-1);
            }, 1000)
        } else if (isActive && time == 0) { setHasFinished(true); setIsActive(false); startNewChallenge()}
    }, [isActive, time])


    return(
        <CountdownContext.Provider value={{minutes, seconds, hasFinished, isActive, cicleDuration, startCountdown, changeTime, resetCountdown}}>
            {children}
        </CountdownContext.Provider>)
}
