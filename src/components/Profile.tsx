import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { PersonalizarContext } from '../contexts/PersonalizarContext'
import styles from '../styles/components/Profile.module.css'




export function Profile() {
    const {level} = useContext(ChallengesContext)
    const {openPersonalizarModal} = useContext(PersonalizarContext)
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent.ffln10-1.fna.fbcdn.net/v/t1.6435-9/241075066_1029601827814642_6829893930135403273_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEKIv9QOH5siz-v5_N7193GhsGyNPwWGN-GwbI0_BYY3zLfh_fdEQXzaGbEUNs0y7YtZg6KaRVpNWNqZj7WiJ7D&_nc_ohc=Qc7bYkBbtuMAX9gRHoL&_nc_oc=AQl-wSn_IgiRwCfuqkUCSAH_mjk8aANPHe6ZsYVnPPMokDmRCEyibDyckd1RnjxFO1U&_nc_ht=scontent.ffln10-1.fna&oh=3616a94713ac52dce7c183372dc03c94&oe=61847285" alt="btc" />
            <div>
                <strong> <span> Miguel DG </span>
                <span><button onClick={openPersonalizarModal}><img src="icons/settings.png"/> </button></span>
                </strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}</p>
            </div>
        </div>
    )
}