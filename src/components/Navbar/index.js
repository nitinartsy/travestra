import React, { useState, useEffect, useRef } from 'react';
import styles from './navbar.module.css';
import { Router, useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleDayInLife = () => {
        router.push('/day_in_tavastrain')
    } 

    const handleHome = () => {
        router.push('/')
    }

    const handleFaq = () => {
        router.push('/faq')
    }


    const handleAngel = () => {
        router.push('/for_angels')
    }
    const handleFounders = () => {
        router.push('/for_founders')
    }



    return (
        <>
            <div className={styles['navbar-main']}>
                <div className={styles['navbar-inner']}>
                    <div onClick={handleHome} className={styles["navbar-logo"]}>
                        <img src="/img/logomain.png" alt="Logo" />
                    </div>
                    <div className={styles["navbar-links"]}>
                        <ul>
                            <li ref={dropdownRef} className={styles['dropdown']} onClick={toggleDropdown}>
                                About us
                                <span className={`${styles['dropdown-icon']} ${isDropdownOpen ? styles['rotate'] : ''}`}>
                                    <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8857 0.159232C10.8128 0.0935379 10.7137 0.0566198 10.6104 0.0566198C10.5071 0.0566198 10.408 0.0935379 10.335 0.159232L5.80845 4.20351C5.73551 4.26866 5.63643 4.30558 5.5331 4.30558C5.42977 4.30558 5.33069 4.26866 5.25776 4.20351L0.659445 0.0979381C0.506878 -0.0339922 0.264346 -0.0323632 0.114217 0.101196C-0.0359182 0.235297 -0.0383503 0.451918 0.108746 0.588738L4.70706 4.69542C5.16355 5.10153 5.90146 5.10153 6.35789 4.69542L10.8863 0.650588L10.8857 0.651131C10.9593 0.58598 11 0.497479 11 0.405191C11 0.312895 10.9593 0.224376 10.8857 0.159232Z" fill="white" />
                                    </svg>
                                </span>
                                <ul className={`${styles["drodpwn-main"]} ${styles['dropdown-menu']} ${isDropdownOpen ? styles['show'] : ''}`}>
                                    <li>People</li>
                                    <li>Case Studies</li>
                                    <li>Newsroom/blogs</li>
                                    <li onClick={handleDayInLife}>A day in life of a Tavastrian</li>
                                </ul>
                            </li>
                            <li onClick={handleFounders}>Founders</li>
                            <li onClick={handleAngel}>Angels</li>
                            <li onClick={handleFaq} >FAQs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
