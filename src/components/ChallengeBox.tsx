import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext)
    const {resetCountdown} = useContext(CountdownContext)

    function handleChallengeSucedded(){
        completedChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }



    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Complete o desafio para ganhar {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="type"/>
                        <strong>Agora o intervalo!</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                <footer>
                    <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeFailed}>Agora não</button>
                    <button type="button" className={styles.challengeSuceddedButton} onClick={handleChallengeSucedded}>Completei</button>
                </footer>
                </div>
            ) : 
            (<div className={styles.challengeNotActive}>
                <strong>Realize um ciclo focado!</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Ganhe xp completando desafios
                    </p>
                </div>)

            }
            
        </div>
    )
}