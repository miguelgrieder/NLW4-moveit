import { useContext, useState } from 'react';
import { PersonalizeContext } from '../contexts/PersonalizeContext';
import styles from '../styles/components/PersonalizeModal.module.css';




export function PersonalizeModal() {
  const {closePersonalizeModal, askChangeTime}= useContext(PersonalizeContext);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    askChangeTime(button.name);
  };


    return(
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div>Personalize</div>
            <div> <p>Escolha a duração do ciclo</p> 
            <button type="button" name="25"onClick={buttonHandler}>25</button>
            <button type="button" name="35"onClick={buttonHandler}>35</button>
            <button type="button" name="45"onClick={buttonHandler}>45</button>
            <button type="button" name="60"onClick={buttonHandler}>60</button></div>
            
              <button type="button"  onClick={closePersonalizeModal}>
                <img src="/icons/close.svg" alt="Fechar modal" />
              </button>
          </div>
        </div>
    )
}