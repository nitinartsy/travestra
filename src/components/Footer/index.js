import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={styles.footer_main_container}>
                <div className={styles.Footer_links}>
                    <ul className={styles.star_clasMain}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8.63867" y="0.75" width="1.72222" height="17.5" fill="#50B281" stroke="#50B281" stroke-width="0.5" />
                            <rect x="18.25" y="8.52777" width="1.72222" height="17.5" transform="rotate(90 18.25 8.52777)" fill="#50B281" stroke="#50B281" stroke-width="0.5" />
                            <rect x="2.70406" y="3.69946" width="1.72222" height="17.5" transform="rotate(-45 2.70406 3.69946)" fill="#50B281" stroke="#50B281" stroke-width="0.5" />
                            <rect x="3.92188" y="16.0738" width="1.72222" height="17.5" transform="rotate(-135 3.92188 16.0738)" fill="#50B281" stroke="#50B281" stroke-width="0.5" />
                        </svg>
                        <li className={styles["star_clas"]}>Book a call</li>
                    </ul>
                    <ul>
                        <li>Founders</li>
                        <li>Angels</li>
                    </ul>
                    <ul>
                        <li>Contact</li>
                        <li>Privacy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className={styles.Footer_text}>
                    <h1>
                        Let’s Build
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Footer