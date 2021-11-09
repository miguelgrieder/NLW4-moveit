import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import { PersonalizeContext } from '../contexts/PersonalizeContext'
import styles from '../styles/components/Profile.module.css'



export function Profile() {
    const {level} = useContext(ChallengesContext)
    const {openPersonalizeModal, username} = useContext(PersonalizeContext)
    const {isActive} = useContext(CountdownContext)

    return (
        <div className={styles.profileContainer}>
            <div>
                <img src="https://ih1.redbubble.net/image.379601685.6062/st,small,507x507-pad,600x600,f8f8f8.u7.jpg" alt="profile_img" />
                <div>
                    <strong>
                        <span> 
                            {username} 
                        </span>
                    </strong>
                    <p>
                        <img src="icons/level.svg" alt="level" />
                        Level {level}
                    </p>
                </div>
            </div>
            {isActive ? (<div/>) : ( 
                <span><button onClick={openPersonalizeModal}><img src="icons/settings.png"/> </button></span>
            )}
        </div>
    )
}