import { useContext } from 'react';
import { PersonalizarContext } from '../contexts/PersonalizarContext';
import styles from '../styles/components/PersonalizarModal.module.css';

export function PersonalizarModal() {
  const {closePersonalizarModal}= useContext(PersonalizarContext);
    return(
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div>Personalizar</div>
            <div> <p>Escolha a duração do ciclo</p> <button>25</button><button>35</button><button>45</button><button>60</button></div>
            
              <button type="button"  onClick={closePersonalizarModal}>
                <img src="/icons/close.svg" alt="Fechar modal" />
              </button>
          </div>
        </div>
    )
}