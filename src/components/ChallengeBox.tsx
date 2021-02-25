import { useContext } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';
import { ChallengesContext  } from '../contexts/ChallengesContext';

export function ChallengeBox()  {
    const { ActiveChallenge,    resetChallenge }= useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            {   ActiveChallenge ?    (
               <div className={styles.challengeActive}>
                   <header>Ganhe {ActiveChallenge.amount} xp</header>

                   <main>
                       <img src={`icons/${ActiveChallenge.type}.svg`}    />
                       <strong>Novo desafio</strong>
                       <p>{ActiveChallenge.description}</p>
                   </main>

                   <footer>
                       <button 
                       type="button"
                       className={styles.challengeFailedButton}
                       onClick={resetChallenge}
                       >
                           Falhei
                        </button>
                      
                       <button 
                       type="button"
                       className={styles.challengeSucceededButton}
                       >
                        Completei
                       </button>
                   </footer>
               </div>
            ) : (
                 <div className={styles.challengeNotActive}>
                 <strong>Finalize um ciclo para receber um desafio</strong>
                 <p>
                     <img src="icons/level-up.svg" alt="Level up"/>
                     Avance de level completando desafios.
                 </p>
             </div>
            )}
        </div>
    )
}