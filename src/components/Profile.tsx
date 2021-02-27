import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export const Profile = () => {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer} >
            <img src="https://github.com/GeDelfino.png" alt="Gean Delfino"/>

            <div>
                <strong>Gean Delfino</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}
