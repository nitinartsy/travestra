import { useEffect, useRef, useState } from "react";
import styles from './footer.module.css'
import StartIcon from "@/icons/StartIcon";
import { useRouter } from "next/router";

const Footer = ({Ref}) => {
    const router = useRouter();
    const footerRef = useRef(null);
    const [isFixedfooter, setIsFixedfooter] = useState(false);
    const [initialfooterTop, setInitialfooterTop] = useState(0);
    const offset = 100; // Adjust this value to control when it becomes fixed

    useEffect(() => {
        if (footerRef.current) {
            setInitialfooterTop(footerRef.current.offsetTop);
        }

        const handleScroll = () => {
            if (window.scrollY >= initialfooterTop + offset) {
                setIsFixedfooter(true);
            } else {
                setIsFixedfooter(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [initialfooterTop]);





    const handleAngel = () => {
        router.push('/for_angels')
    }
    const handleFounders = () => {
        router.push('/for_founders')
    }


    const handletandc = () => {
        router.push('/terms&condition')
    }


      const handleContact = () => {
        router.push('/contact')
    }

    return (
        <>
            <div   className={`${styles.footer_main_container} ${isFixedfooter ? styles.fixd : ""} `}>
                <div className={styles.Footer_links}>
                    <ul className={styles.star_clasMain}>
                        <StartIcon/>
                        <li className={styles["star_clas"]}>Book a call</li>
                    </ul>
                    <ul>
                        <li onClick={handleFounders}>Founders</li>
                        <li onClick={handleAngel} >Angels</li>
                    </ul>
                    <ul>
                        <li onClick={handleContact} >Contact</li>
                        <li >Privacy</li>
                        <li onClick={handletandc}>Terms & Conditions</li>
                    </ul>
                </div>
                <div className={styles.Footer_text}>
                    <h1>
                        Let’s&nbsp;Build
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Footer