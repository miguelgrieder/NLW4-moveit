import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";


import Head from 'next/head'
import { GetServerSideProps } from 'next'
import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { PersonalizeProvider } from "../contexts/PersonalizeContext";

//Pagina inicial

interface HomeProps{level: number;
   currentExperience: number;
   challengesCompleted: number;
   cicleDuration: number;}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}>
    <div className={styles.container}>
        
        <Head>
          <title>Início</title>  
        </Head>
        <ExperienceBar />
        <CountdownProvider cicleDuration={props.cicleDuration}>
        <PersonalizeProvider>
      <section>
          <div>
              <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>

          <div>
            <ChallengeBox/>
          </div>
          
      </section>
      </PersonalizeProvider>
      </CountdownProvider>
      
    </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, cicleDuration} = ctx.req.cookies;
  return{
    props: {level: Number(level),
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted),
      cicleDuration: Number(cicleDuration),
    }
  }
}