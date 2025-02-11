import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./day.module.css";

// Declare variables outside the component for lazy loading
let ScrollTrigger, SplitType;

const DayTavas = () => {
    const timelineRef = useRef(null);
    const descriptionRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            "[data-timeline-item]",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" }
        );
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("gsap/ScrollTrigger").then((module) => {
                ScrollTrigger = module.ScrollTrigger;
                gsap.registerPlugin(ScrollTrigger);

                import("split-type").then((module) => {
                    SplitType = module.default;

                    if (descriptionRef.current) {
                        const text = new SplitType(descriptionRef.current, { types: "chars" });
                        gsap.from(text.chars, {
                            opacity: 0.2,
                            stagger: 0.1,
                            duration: 1,
                            scrollTrigger: {
                                trigger: descriptionRef.current,
                                start: "top 80%",
                                end: "top 50%",
                                scrub: true,
                            },
                        });
                    }

                    if (logoRef.current) {
                        const logoText = new SplitType(logoRef.current, { types: "chars" });
                        gsap.from(logoText.chars, {
                            yPercent: 130,
                            stagger: 0.1,
                            duration: 0.8,
                            scrollTrigger: {
                                trigger: logoRef.current,
                                start: "top 80%",
                            },
                        });
                    }

                    ScrollTrigger.refresh();
                });
            });
        }
    }, []);

    return (
        <>
            <div className={styles.free}>
                <div className={styles.HeroSection}>
                    <div className={styles.HeroSectionpart1}>
                        <div className={styles.Logo_text}>
                            <h1 ref={logoRef} className={styles.split}>
                                A day in the life of Tavastrain
                            </h1>
                            <div className={styles.VectorContainer}>
                                <svg width="84" height="99" viewBox="0 0 84 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00775146 96.575C0.00971985 96.5989 0.0136566 96.6217 0.0164948 96.6453C0.0206375 96.6794 0.0241165 96.7134 0.0297928 96.7469C0.0345917 96.7746 0.0411453 96.8015 0.0470352 96.8289C0.0529251 96.8563 0.0588074 96.8868 0.0662231 96.9155C0.0736389 96.9442 0.0819321 96.9685 0.090004 96.9949C0.0980759 97.0213 0.106804 97.0518 0.116623 97.0795C0.126434 97.1072 0.13559 97.1275 0.145187 97.1513C0.156754 97.1803 0.167007 97.2092 0.180969 97.2374C0.191002 97.2595 0.202789 97.2806 0.213692 97.3024C0.228088 97.3306 0.241837 97.359 0.257332 97.3864C0.270416 97.4093 0.285255 97.4309 0.299431 97.4529C0.313614 97.475 0.329529 97.5037 0.346329 97.5261C0.369888 97.5596 0.395195 97.5908 0.420937 97.6223C0.429878 97.6332 0.437508 97.6449 0.446892 97.6555C0.456276 97.6662 0.465004 97.6741 0.473732 97.684C0.501221 97.7145 0.528923 97.7447 0.558372 97.7728C0.577354 97.7909 0.59742 97.8069 0.61705 97.8236C0.636688 97.8404 0.65741 97.8597 0.678566 97.8762C0.69973 97.8927 0.722198 97.9079 0.745323 97.9234C0.768448 97.9389 0.785896 97.9528 0.807053 97.9661C0.828217 97.9793 0.850685 97.9914 0.87381 98.0034C0.896935 98.0153 0.919411 98.0288 0.94297 98.0407C0.96653 98.0526 0.985283 98.0587 1.00644 98.0676C1.03218 98.0785 1.05791 98.0899 1.08431 98.0993C1.1046 98.1065 1.12534 98.1118 1.14584 98.1179C1.17355 98.126 1.20103 98.1349 1.2294 98.1415C1.25121 98.1466 1.27433 98.1496 1.29702 98.1534C1.32363 98.1582 1.35003 98.1638 1.3773 98.1669C1.41394 98.1712 1.45081 98.1725 1.48767 98.1735C1.50076 98.1735 1.51342 98.1758 1.52673 98.1758H39.7031C40.1081 98.1758 40.4965 97.9885 40.7829 97.6552C41.0692 97.3219 41.2301 96.8699 41.2301 96.3986C41.2301 95.9272 41.0692 95.4752 40.7829 95.1419C40.4965 94.8086 40.1081 94.6214 39.7031 94.6214H5.21387L83.54 3.46397C83.6818 3.29893 83.7943 3.10299 83.871 2.88736C83.9477 2.67172 83.9872 2.44061 83.9872 2.20721C83.9872 1.97382 83.9477 1.74271 83.871 1.52708C83.7943 1.31144 83.6818 1.11552 83.54 0.950478C83.3982 0.785439 83.2298 0.654518 83.0445 0.565201C82.8592 0.475883 82.6607 0.429924 82.4601 0.429924C82.2596 0.429924 82.061 0.475883 81.8757 0.565201C81.6904 0.654518 81.5221 0.785439 81.3803 0.950478L3.05421 92.1084V51.9689C3.05421 51.4976 2.89332 51.0456 2.60695 50.7123C2.32057 50.379 1.93216 50.1917 1.52716 50.1917C1.12217 50.1917 0.733765 50.379 0.447388 50.7123C0.161011 51.0456 0.0001297 51.4976 0.0001297 51.9689V96.3978C0.0001297 96.4569 0.00266266 96.5159 0.00775146 96.575Z" fill="#E6E6E6" />
                                </svg>
                            </div>
                        </div>
                        {/* <h1>Live. Build. Launch.</h1> */}
                        <p ref={descriptionRef} className={styles.heroDescription}>
                            Imagine waking up to the crisp mountain air and stunning views of the Himalayas. This is just the beginning of a typical day as a Tavastrian, a founder in the Tavastra residency program.
                        </p>
                    </div>

                    <div className={styles.HeroSectionpart2}>

                    </div>
                </div>
            </div>

            <div className={styles.timelineContainer}>
                <div className={styles.staticT}></div>

                <div ref={timelineRef} className={styles.timeline}>
                    <div className={styles.timelineItemRight}>
                        <p className={styles.poclr}>Morning Ritual (9:00 AM - 9:30 AM)</p>
                        <div className={`${styles.timelineItem}`} data-timeline-item>
                            <h4>Mindful Mornings: </h4>
                            <p>Start your day with a guided meditation or mindfulness session, setting the tone for focus and creativity.</p>
                            <h4>Tribe Huddle</h4>
                            <p>
                                Gather with your team (if applicable) for a quick stand-up meeting to discuss daily goals and progress
                            </p>
                        </div>
                    </div>
                    <div className={styles.timelineItemLeft}>
                        <p className={styles.poclr}>Morning Ritual (9:00 AM - 9:30 AM)</p>
                        <div className={`${styles.timelineItem}`} data-timeline-item>
                            <h4>Mindful Mornings: </h4>
                            <p>Start your day with a guided meditation or mindfulness session, setting the tone for focus and creativity.</p>
                            <h4>Tribe Huddle</h4>
                            <p>
                                Gather with your team (if applicable) for a quick stand-up meeting to discuss daily goals and progress
                            </p>
                        </div>
                    </div>
                    <div className={styles.timelineItemRight}>
                        <p className={styles.poclr}>Morning Ritual (9:00 AM - 9:30 AM)</p>
                        <div className={`${styles.timelineItem}`} data-timeline-item>
                            <h4>Mindful Mornings: </h4>
                            <p>Start your day with a guided meditation or mindfulness session, setting the tone for focus and creativity.</p>
                            <h4>Tribe Huddle</h4>
                            <p>
                                Gather with your team (if applicable) for a quick stand-up meeting to discuss daily goals and progress
                            </p>
                        </div>
                    </div>
                    <div className={styles.timelineItemLeft}>
                        <p className={styles.poclr}>Morning Ritual (9:00 AM - 9:30 AM)</p>
                        <div className={`${styles.timelineItem}`} data-timeline-item>
                            <h4>Mindful Mornings: </h4>
                            <p>Start your day with a guided meditation or mindfulness session, setting the tone for focus and creativity.</p>
                            <h4>Tribe Huddle</h4>
                            <p>
                                Gather with your team (if applicable) for a quick stand-up meeting to discuss daily goals and progress
                            </p>
                        </div>
                    </div>
                    <div className={styles.timelineItemRight}>
                        <p className={styles.poclr}>Morning Ritual (9:00 AM - 9:30 AM)</p>
                        <div className={`${styles.timelineItem}`} data-timeline-item>
                            <h4>Mindful Mornings: </h4>
                            <p>Start your day with a guided meditation or mindfulness session, setting the tone for focus and creativity.</p>
                            <h4>Tribe Huddle</h4>
                            <p>
                                Gather with your team (if applicable) for a quick stand-up meeting to discuss daily goals and progress
                            </p>
                        </div>
                    </div>
                    <div className={styles.timelineItemLeft}>
                        <p className={styles.poclr}>Morning Ritual (9:00 AM - 9:30 AM)</p>
                        <div className={`${styles.timelineItem}`} data-timeline-item>
                            <h4>Mindful Mornings: </h4>
                            <p>Start your day with a guided meditation or mindfulness session, setting the tone for focus and creativity.</p>
                            <h4>Tribe Huddle</h4>
                            <p>
                                Gather with your team (if applicable) for a quick stand-up meeting to discuss daily goals and progress
                            </p>
                        </div>
                    </div>
                    {/* More timeline items */}
                </div>
            </div>
        </>
    );
};

export default DayTavas;
