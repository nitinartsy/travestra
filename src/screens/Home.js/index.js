import Image from "next/image";
import styles from './homePage.module.css'
import { useEffect, useRef, useState } from "react";
import Unique from "@/components/Unique";


let gsap, ScrollTrigger, SplitType;



if (typeof window !== "undefined") {
    gsap = require("gsap").default;
    ScrollTrigger = require("gsap/ScrollTrigger").default;
    SplitType = require("split-type").default;
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    const descriptionRef = useRef(null);
    const logoRef = useRef(null);
    const sectionRef = useRef(null);
    const sectionBRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);

    // postion fixed end

    const containerRef = useRef(null);

    useEffect(() => {

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "15% 23%", // Element ka 25% point, viewport ke 70% point par trigger hoga
            end: "80% 20%",
            // markers:true,
            end: "+=900",
            pin: true,
            scrub: 5,
        });

        const elements = gsap.utils.toArray(`.${styles.CohortGraph1}`);

        elements.forEach((el) => {

            ScrollTrigger.create({
                trigger: el,
                start: "50% 5%",
                toggleActions: "play none none reverse",
                scrub: 5,
                onEnter: () => el.classList.add(styles.active),
                onLeaveBack: () => el.classList.remove(styles.active)
            });
        });

    }, []);

    useEffect(() => {
        // Ensure code runs only on the client side
        if (typeof window !== "undefined") {
            // Split and animate description text
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
                        markers: false,
                        onEnter: () => ScrollTrigger.refresh(), // Refresh ScrollTrigger on enter
                    },
                });
            }

            // Split and animate logo text
            if (logoRef.current) {
                const logoText = new SplitType(logoRef.current, { types: "chars" });
                gsap.from(logoText.chars, {
                    yPercent: 130,
                    stagger: 0.1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: logoRef.current,
                        start: "top 80%",
                        onEnter: () => ScrollTrigger.refresh(), // Refresh ScrollTrigger on enter
                    },
                });
            }

            // Refresh ScrollTrigger on component mount
            ScrollTrigger.refresh();
        }
    }, []);

    useEffect(() => {
        if (!sectionRef.current || !sectionBRef.current) return;

        const initialTop = sectionRef.current.offsetTop;
        const stopFixedTop = sectionBRef.current.offsetTop;

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY >= initialTop && scrollY < stopFixedTop) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const imageGridData = [
        [
            { src: "/img/hu1.png", company: "Company A", name: "Sample Name 1" },
            { src: "/img/hu2.png", company: "Company B", name: "Sample Name 2" },
            { src: "/img/hu1.png", company: "Company C", name: "Sample Name 3" },
        ],
        [
            { src: "/img/hu1.png", company: "Company D", name: "Sample Name 4" },
            { src: "/img/hu2.png", company: "Company E", name: "Sample Name 5" },
        ],
        [
            { src: "/img/hu1.png", company: "Company A", name: "Sample Name 1" },
            { src: "/img/hu2.png", company: "Company B", name: "Sample Name 2" },
            { src: "/img/hu1.png", company: "Company C", name: "Sample Name 3" },
        ],
        [
            { src: "/img/hu1.png", company: "Company D", name: "Sample Name 4" },
            { src: "/img/hu2.png", company: "Company E", name: "Sample Name 5" },
        ],
        [
            { src: "/img/hu1.png", company: "Company A", name: "Sample Name 1" },
            { src: "/img/hu2.png", company: "Company B", name: "Sample Name 2" },
            { src: "/img/hu1.png", company: "Company C", name: "Sample Name 3" },
        ],
        [
            { src: "/img/hu1.png", company: "Company D", name: "Sample Name 4" },
            { src: "/img/hu2.png", company: "Company E", name: "Sample Name 5" },
        ],
        [
            { src: "/img/hu1.png", company: "Company A", name: "Sample Name 1" },
            { src: "/img/hu2.png", company: "Company B", name: "Sample Name 2" },
            { src: "/img/hu1.png", company: "Company C", name: "Sample Name 3" },
        ],
        [
            { src: "/img/hu1.png", company: "Company D", name: "Sample Name 4" },
            { src: "/img/hu2.png", company: "Company E", name: "Sample Name 5" },
        ],
        [
            { src: "/img/hu1.png", company: "Company A", name: "Sample Name 1" },
            { src: "/img/hu2.png", company: "Company B", name: "Sample Name 2" },
            { src: "/img/hu1.png", company: "Company C", name: "Sample Name 3" },
        ],
        [
            { src: "/img/hu1.png", company: "Company D", name: "Sample Name 4" },
            { src: "/img/hu2.png", company: "Company E", name: "Sample Name 5" },
        ],
        [
            { src: "/img/hu1.png", company: "Company A", name: "Sample Name 1" },
            { src: "/img/hu2.png", company: "Company B", name: "Sample Name 2" },
            { src: "/img/hu1.png", company: "Company C", name: "Sample Name 3" },
        ],
        [
            { src: "/img/hu1.png", company: "Company D", name: "Sample Name 4" },
            { src: "/img/hu2.png", company: "Company E", name: "Sample Name 5" },
        ],
        [
            { src: "/img/hu1.png", company: "Company A", name: "Sample Name 1" },
            { src: "/img/hu2.png", company: "Company B", name: "Sample Name 2" },
            { src: "/img/hu1.png", company: "Company C", name: "Sample Name 3" },
        ],
        [
            { src: "/img/hu1.png", company: "Company D", name: "Sample Name 4" },
            { src: "/img/hu2.png", company: "Company E", name: "Sample Name 5" },
        ],
        [
            { src: "/img/hu1.png", company: "Company A", name: "Sample Name 1" },
            { src: "/img/hu2.png", company: "Company B", name: "Sample Name 2" },
            { src: "/img/hu1.png", company: "Company C", name: "Sample Name 3" },
        ],
        [
            { src: "/img/hu1.png", company: "Company D", name: "Sample Name 4" },
            { src: "/img/hu2.png", company: "Company E", name: "Sample Name 5" },
        ],
        [
            { src: "/img/hu1.png", company: "Company A", name: "Sample Name 1" },
            { src: "/img/hu2.png", company: "Company B", name: "Sample Name 2" },
            { src: "/img/hu1.png", company: "Company C", name: "Sample Name 3" },
        ],
        [
            { src: "/img/hu1.png", company: "Company D", name: "Sample Name 4" },
            { src: "/img/hu2.png", company: "Company E", name: "Sample Name 5" },
        ],

    ];



    return (
        <div className={styles.free}>
            {/* -------------HeroSection start--------------------------------------------------------------------------------------------------------------------------------- */}
            <div className={styles.HeroSection}>
                <div className={styles.HeroSectionpart1}>
                    <Image
                        src="/heroImage.svg"
                        width={500}
                        height={300}
                        alt="Hero Section Image"
                        className={styles.heroImage}
                    />
                    <h1>Live. Build. Launch.</h1>
                    <p ref={descriptionRef} className={styles.heroDescription}>
                        <strong>Live.</strong> World's first fully residential accelerator. <br />
                        <strong>Build.</strong> Team up with us to co-create your vision. <br />
                        <strong>Launch.</strong> Secure seed funding via our investor network.
                    </p>
                </div>

                <div className={styles.HeroSectionpart2}>
                    <div className={styles.VectorContainer}>

                        <svg width="85" height="90" viewBox="0 0 85 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.844666 1.46151C0.846634 1.43973 0.850571 1.41888 0.853409 1.39733C0.857552 1.36627 0.861031 1.33522 0.866707 1.30463C0.871506 1.27938 0.878059 1.25481 0.883949 1.22979C0.889839 1.20476 0.895721 1.17695 0.903137 1.15077C0.910553 1.12458 0.918846 1.10233 0.926918 1.07824C0.93499 1.05414 0.943718 1.02633 0.953537 1.00107C0.963348 0.975811 0.972504 0.957272 0.982101 0.93549C0.993668 0.909073 1.00392 0.882656 1.01788 0.856934C1.02792 0.836774 1.0397 0.81754 1.05061 0.797612C1.065 0.77189 1.07875 0.745936 1.09425 0.720909C1.10733 0.700053 1.12217 0.680356 1.13634 0.660196C1.15053 0.640035 1.16644 0.61385 1.18324 0.593458C1.2068 0.56287 1.23211 0.534367 1.25785 0.505633C1.26679 0.495668 1.27442 0.485009 1.28381 0.475276C1.29319 0.465543 1.30192 0.45836 1.31065 0.449322C1.33813 0.421515 1.36584 0.393939 1.39529 0.368218C1.41427 0.351765 1.43433 0.337166 1.45396 0.321872C1.4736 0.306577 1.49432 0.288966 1.51548 0.273904C1.53664 0.258841 1.55911 0.244937 1.58224 0.230802C1.60536 0.216666 1.62281 0.203921 1.64397 0.191871C1.66513 0.179822 1.6876 0.168699 1.71072 0.157807C1.73385 0.146916 1.75632 0.134635 1.77988 0.123743C1.80344 0.112852 1.8222 0.107291 1.84335 0.0991803C1.86909 0.089216 1.89483 0.0787882 1.92123 0.0702142C1.94151 0.0637258 1.96226 0.0588591 1.98276 0.0532976C2.01047 0.0458822 2.03795 0.0377721 2.06631 0.0317471C2.08813 0.0271125 2.11124 0.0243316 2.13393 0.0208556C2.16055 0.0164528 2.18694 0.0113544 2.21421 0.00857368C2.25085 0.00463429 2.28772 0.0034763 2.32458 0.00254939C2.33768 0.00254939 2.35033 0.000463203 2.36364 0.000463203H40.54C40.945 0.000463203 41.3334 0.171363 41.6198 0.475567C41.9062 0.77977 42.067 1.19236 42.067 1.62257C42.067 2.05277 41.9062 2.46536 41.6198 2.76957C41.3334 3.07377 40.945 3.24467 40.54 3.24467H6.05078L84.3769 86.4465C84.5187 86.5971 84.6312 86.776 84.7079 86.9728C84.7847 87.1696 84.8242 87.3805 84.8242 87.5936C84.8242 87.8066 84.7847 88.0175 84.7079 88.2144C84.6312 88.4112 84.5187 88.59 84.3769 88.7406C84.2351 88.8913 84.0667 89.0108 83.8814 89.0923C83.6962 89.1738 83.4976 89.2158 83.297 89.2158C83.0965 89.2158 82.8979 89.1738 82.7126 89.0923C82.5274 89.0108 82.359 88.8913 82.2172 88.7406L3.89112 5.53832V42.1747C3.89112 42.6049 3.73023 43.0175 3.44386 43.3217C3.15749 43.6259 2.76907 43.7968 2.36407 43.7968C1.95908 43.7968 1.57068 43.6259 1.2843 43.3217C0.997925 43.0175 0.837044 42.6049 0.837044 42.1747V1.62326C0.837044 1.56935 0.839577 1.51543 0.844666 1.46151Z" fill="#E6E6E6" />
                        </svg>

                    </div>

                    <button className={styles.videoButton}>
                        <Image
                            src="/VideoLogo.svg"
                            width={30}
                            height={30}
                            alt="Play Video"
                            className={styles.VideoLogo}
                        />
                        Watch Video
                    </button>
                </div>
            </div>
            {/* -------------HeroSection end--------------------------------------------------------------------------------------------------------------------------------- */}

            <div className={styles.Logo}>
                <h1 ref={logoRef} className={styles.split}>
                    TAVASTRA
                </h1>
            </div>


            {/* -------------ForSection start--------------------------------------------------------------------------------------------------------------------------------- */}
            <div ref={containerRef} >
                <div className="ForSection">
                    <div className={styles.ForSection1Navbar}>
                        <div className={styles.founder}>
                            <p>For Founders</p>
                        </div>
                        <div className={styles.angels}>
                            <p>For Angels</p>
                        </div>
                    </div>
                    <div className={styles.ForSection1}>
                        <div className={styles.ForSection1Discription}>
                            <p>
                                Join Tavastra's immersive 3-month residency program. Master startup essentials with expert mentorship and a structured curriculum, build your MVP with full-stack support, and connect with investors. Plus, a monthly stipend to fuel your focus.
                            </p>
                        </div>
                        
                            <h1 className={styles.for_founder}>For Founders</h1>
                        
                    </div>
                </div>
                <div className={styles.midSection}>
                    {/* -------------Cohort Section--------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className={styles.Cohort}>
                        <div className={styles.CohortBTN}>
                            <button>Know more</button>
                        </div>
                        <div className={styles.CohortGraph}>
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className={styles.CohortGraph1}>
                                    <div className={styles.CohortGraphText}>Fund & Launch</div>
                                    <div className={styles.CohortGraph2Line}>
                                        <div className={styles.CohortGraph2Linecircle}></div>
                                        <div className={styles.CohortGraph2smallLine}></div>
                                    </div>
                                    <div className={styles.CohortGraphText}>Share and scale.</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* -------------TimeLineBar Section--------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* <div className={styles.TimeLineBar}>
                    <div className={styles.TimeLineBarHead}>
                        <h1>Tavastra</h1>
                    </div>
                </div> */}
                </div>
            </div>


            {/* travestra  */}
            {/* <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Tavastra </h1>
                </div>

                <div className={styles.TimeLineBar}>

                    <div className={styles.TimeLineBarmain}>


                        <div className={styles.TimeLineBarEllipse}>
                            <div className={`${styles.EllipseActive}`}>
                                <span>01</span>
                            </div>
                            <div className={styles.Ellipse}>
                                <span>02</span>
                            </div>
                            <div className={styles.Ellipse}>
                                <span>03</span>
                            </div>
                            <div className={styles.Ellipse}>
                                <span>04</span>
                            </div>
                            <div className={styles.Ellipse}>
                                <span>05</span>
                            </div>
                            <div className={styles.Ellipse}>
                                <span>06</span>
                            </div>

                        </div>

                        <div className={styles.verticalline} ></div>

                        <div>



                            <div className={styles.TimeLineBarParagraph} >

                                <div className={`${styles.timeline_active} ${styles.TimeLineBarParagraph1st}`}>
                                    <p>
                                        World's first fully residential accelerator
                                    </p>
                                </div>

                                <div className={`${styles.timeline_active} ${styles.TimeLineBarParagraph2nd}`}>
                                    <p>
                                        Live and learn in a fully immersive environment dedicated to building your startup.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.TimeLineBarImg}>
                                <img src='/unique.svg' alt='Unique' />
                            </div>
                            <div className={styles.TimeLineBarParagraph} >

                                <div className={styles.TimeLineBarParagraph1st}>
                                    <p>
                                        Essential Pillars of Entrepreneurship
                                    </p>
                                </div>

                                <div className={styles.TimeLineBarParagraph2nd}>
                                    <p>
                                        Learn Lean Startup, Design Thinking, Agile Development, and Growth Hacking in an immersive startup residency.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.TimeLineBarParagraph} >

                                <div className={styles.TimeLineBarParagraph1st}>
                                    <p>
                                        Essential Pillars of Entrepreneurship
                                    </p>
                                </div>

                                <div className={styles.TimeLineBarParagraph2nd}>
                                    <p>
                                        Learn Lean Startup, Design Thinking, Agile Development, and Growth Hacking in an immersive startup residency.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.TimeLineBarParagraph} >

                                <div className={styles.TimeLineBarParagraph1st}>
                                    <p>
                                        Essential Pillars of Entrepreneurship
                                    </p>
                                </div>

                                <div className={styles.TimeLineBarParagraph2nd}>
                                    <p>
                                        Learn Lean Startup, Design Thinking, Agile Development, and Growth Hacking in an immersive startup residency.
                                    </p>
                                </div>
                            </div>


                            <div className={styles.TimeLineBarParagraph} >

                                <div className={styles.TimeLineBarParagraph1st}>
                                    <p>
                                        Chance to Co-create Your Startup Vision
                                    </p>
                                </div>

                                <div className={styles.TimeLineBarParagraph2nd}>
                                    <p>
                                        Get 360 degree full stack support across ideation, branding, legal, tech, strategy, and fundraising to bring your idea to life.
                                    </p>
                                </div>
                            </div>


                            <div className={styles.TimeLineBarParagraph} >

                                <div className={styles.TimeLineBarParagraph1st}>
                                    <p>
                                        Ongoing Support and Community
                                    </p>
                                </div>

                                <div className={styles.TimeLineBarParagraph2nd}>
                                    <p>
                                        Benefit from 15 months of guidance (3 months residency + 12 months extended support), resources, and a thriving network.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>


            </div> */}

            {/* -------------BackedBy Section--------------------------------------------------------------------------------------------------------------------------------- */}
            <div className={styles.Backendby}>
                {/* <div className={styles.BackendbyHead}>
                    <h1>Backed by</h1>
                </div> */}
                <div ref={sectionRef} className={`${styles.BackendbyHead} ${isFixed ? styles.fixed : ""}`}>
                    <h1>Backed by</h1>
                </div>
                <div className={styles.galleryBody}>
                    <div className={styles.gallery}>
                        {imageGridData.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={`${styles.imageGridRow} ${row.length === 3 ? styles.imageGri3 : styles.imageGri2}`}
                            >
                                {row.map((item, imgIndex) => (
                                    <div key={imgIndex} className={styles.imageGridDiv}>
                                        <div className={styles.company_name_container}>
                                            <span className={styles.dot}></span>
                                            <span className={styles.company}>{item.company}</span>
                                        </div>
                                        <img src={item.src} className={styles.gridImage} alt={item.name} />
                                        <span className={styles.name}>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.hidebackedBy} ref={sectionBRef}>
                </div>

            </div>
        </div>


    );
}