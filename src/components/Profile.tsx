import React from 'react'
import styles from '../styles/components/Profile.module.css'

export const Profile = () => {
    return (
        <div className={styles.profileContainer} >
            <img src="https://github.com/GeDelfino.png" alt="Gean Delfino"/>

            <div>
                <strong>Gean Delfino</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}
