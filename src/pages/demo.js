import { useEffect, useRef, useState } from "react";
import styles from './demo.module.css'

const StickyComponent = () => {
    const sectionRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [initialTop, setInitialTop] = useState(0);
    const offset = 100; // Adjust this value to control when it becomes fixed

    useEffect(() => {
        if (sectionRef.current) {
            setInitialTop(sectionRef.current.offsetTop);
        }

        const handleScroll = () => {
            if (window.scrollY >= initialTop + offset) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [initialTop]);

    return (
        <div className={styles.container}>
            <div ref={sectionRef} className={`${styles.BackendbyHead} ${isFixed ? styles.fixed : ""}`}>
                <h1>Backed by</h1>
            </div>
            <div className={styles.content}>
                {/* Dummy content for scrolling */}
                <p>Scroll down 100px to see the effect...</p>
                <div style={{ height: "200vh" }}></div>
            </div>
        </div>
    );
};

export default StickyComponent;
