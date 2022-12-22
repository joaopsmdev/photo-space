import styles from "./Menu.module.scss"
import React from 'react'
import icones from "./icones.json"

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            {icones.map((icones) => {
                return(
                    <li key={icones.id} className={styles.menu__item}>
                        <img src={icones.path} alt={icones.alt} />
                        <a href={icones.link}>{icones.link}</a>
                    </li>    
                )
            })}
            
        </ul>    
    </nav>
  )
}
