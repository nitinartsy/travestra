import { useEffect, useRef, useState } from "react";
import styles from "./faq.module.css"; // Importing CSS Module
import { Accordion, AccordionItem } from "../Accordion.js";

let gsap, ScrollTrigger, SplitType;


if (typeof window !== "undefined") {
  gsap = require("gsap").default;
  ScrollTrigger = require("gsap/ScrollTrigger").default;
  SplitType = require("split-type").default;
  gsap.registerPlugin(ScrollTrigger);
}


const options = [
  {
    title: "General Questions",
    accordions: [
      { id: "01", heading: "What is Tavastra?", content: "Tavastra is a startup studio that provides a unique and comprehensive ecosystem for entrepreneurs to build and launch successful companies. We offer a 3-month residency program that includes a stipend, expert mentorship, a structured curriculum, co-working space, accommodation with meals, and full-stack MVP development support (branding, marketing, legal, tech, product, and more). We also help connect founders with investors and provide ongoing support after the program." },
      { id: "02", heading: "Accordion 2", content: "Content for Accordion 2" },
      { id: "03", heading: "Accordion 3", content: "Content for Accordion 3" },
      { id: "04", heading: "Accordion 4", content: "Content for Accordion 4" },
    ],
  },
  {
    title: "For Founder",
    accordions: [
      { id: "01", heading: "Accordion 1", content: "Content for Option 2, Accordion 1" },
      { id: "02", heading: "Accordion 2", content: "Content for Option 2, Accordion 2" },
      { id: "03", heading: "Accordion 3", content: "Content for Option 2, Accordion 3" },
      { id: "04", heading: "Accordion 4", content: "Content for Option 2, Accordion 4" },
    ],
  },
  {
    title: "For Angels Investor",
    accordions: [
      { id: "01", heading: "Accordion 1", content: "Content for Option 2, Accordion 1" },
      { id: "02", heading: "Accordion 2", content: "Content for Option 2, Accordion 2" },
      { id: "03", heading: "Accordion 3", content: "Content for Option 2, Accordion 3" },
      { id: "04", heading: "Accordion 4", content: "Content for Option 2, Accordion 4" },
    ],
  },
  {
    title: "Application Process",
    accordions: [
      { id: "01", heading: "Accordion 1", content: "Content for Option 2, Accordion 1" },
      { id: "02", heading: "Accordion 2", content: "Content for Option 2, Accordion 2" },
      { id: "03", heading: "Accordion 3", content: "Content for Option 2, Accordion 3" },
      { id: "04", heading: "Accordion 4", content: "Content for Option 2, Accordion 4" },
    ],
  },
  {
    title: "Program logistics",
    accordions: [
      { id: "01", heading: "Accordion 1", content: "Content for Option 2, Accordion 1" },
      { id: "02", heading: "Accordion 2", content: "Content for Option 2, Accordion 2" },
      { id: "03", heading: "Accordion 3", content: "Content for Option 2, Accordion 3" },
      { id: "04", heading: "Accordion 4", content: "Content for Option 2, Accordion 4" },
    ],
  },
  {
    title: "Residency Life",
    accordions: [
      { id: "01", heading: "Accordion 1", content: "Content for Option 2, Accordion 1" },
      { id: "02", heading: "Accordion 2", content: "Content for Option 2, Accordion 2" },
      { id: "03", heading: "Accordion 3", content: "Content for Option 2, Accordion 3" },
      { id: "04", heading: "Accordion 4", content: "Content for Option 2, Accordion 4" },
    ],
  },
  {
    title: "Post Program and Others",
    accordions: [
      { id: "01", heading: "Accordion 1", content: "Content for Option 2, Accordion 1" },
      { id: "02", heading: "Accordion 2", content: "Content for Option 2, Accordion 2" },
      { id: "03", heading: "Accordion 3", content: "Content for Option 2, Accordion 3" },
      { id: "04", heading: "Accordion 4", content: "Content for Option 2, Accordion 4" },
    ],
  },
];


const Faq = () => {
  const descriptionRef = useRef(null);
  const logoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Default open first option
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0); // Default open first accordion

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle accordion
  };


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


  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div className={styles.free}>
        <div className={styles.HeroSection}>
          <div className={styles.HeroSectionpart1}>
            <h1 ref={logoRef} className={styles.split}>
              FAQs
            </h1>

          </div>

          <div className={styles.HeroSectionpart2}>
            <div className={styles.VectorContainer}>

              <svg width="85" height="90" viewBox="0 0 85 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.844666 1.46151C0.846634 1.43973 0.850571 1.41888 0.853409 1.39733C0.857552 1.36627 0.861031 1.33522 0.866707 1.30463C0.871506 1.27938 0.878059 1.25481 0.883949 1.22979C0.889839 1.20476 0.895721 1.17695 0.903137 1.15077C0.910553 1.12458 0.918846 1.10233 0.926918 1.07824C0.93499 1.05414 0.943718 1.02633 0.953537 1.00107C0.963348 0.975811 0.972504 0.957272 0.982101 0.93549C0.993668 0.909073 1.00392 0.882656 1.01788 0.856934C1.02792 0.836774 1.0397 0.81754 1.05061 0.797612C1.065 0.77189 1.07875 0.745936 1.09425 0.720909C1.10733 0.700053 1.12217 0.680356 1.13634 0.660196C1.15053 0.640035 1.16644 0.61385 1.18324 0.593458C1.2068 0.56287 1.23211 0.534367 1.25785 0.505633C1.26679 0.495668 1.27442 0.485009 1.28381 0.475276C1.29319 0.465543 1.30192 0.45836 1.31065 0.449322C1.33813 0.421515 1.36584 0.393939 1.39529 0.368218C1.41427 0.351765 1.43433 0.337166 1.45396 0.321872C1.4736 0.306577 1.49432 0.288966 1.51548 0.273904C1.53664 0.258841 1.55911 0.244937 1.58224 0.230802C1.60536 0.216666 1.62281 0.203921 1.64397 0.191871C1.66513 0.179822 1.6876 0.168699 1.71072 0.157807C1.73385 0.146916 1.75632 0.134635 1.77988 0.123743C1.80344 0.112852 1.8222 0.107291 1.84335 0.0991803C1.86909 0.089216 1.89483 0.0787882 1.92123 0.0702142C1.94151 0.0637258 1.96226 0.0588591 1.98276 0.0532976C2.01047 0.0458822 2.03795 0.0377721 2.06631 0.0317471C2.08813 0.0271125 2.11124 0.0243316 2.13393 0.0208556C2.16055 0.0164528 2.18694 0.0113544 2.21421 0.00857368C2.25085 0.00463429 2.28772 0.0034763 2.32458 0.00254939C2.33768 0.00254939 2.35033 0.000463203 2.36364 0.000463203H40.54C40.945 0.000463203 41.3334 0.171363 41.6198 0.475567C41.9062 0.77977 42.067 1.19236 42.067 1.62257C42.067 2.05277 41.9062 2.46536 41.6198 2.76957C41.3334 3.07377 40.945 3.24467 40.54 3.24467H6.05078L84.3769 86.4465C84.5187 86.5971 84.6312 86.776 84.7079 86.9728C84.7847 87.1696 84.8242 87.3805 84.8242 87.5936C84.8242 87.8066 84.7847 88.0175 84.7079 88.2144C84.6312 88.4112 84.5187 88.59 84.3769 88.7406C84.2351 88.8913 84.0667 89.0108 83.8814 89.0923C83.6962 89.1738 83.4976 89.2158 83.297 89.2158C83.0965 89.2158 82.8979 89.1738 82.7126 89.0923C82.5274 89.0108 82.359 88.8913 82.2172 88.7406L3.89112 5.53832V42.1747C3.89112 42.6049 3.73023 43.0175 3.44386 43.3217C3.15749 43.6259 2.76907 43.7968 2.36407 43.7968C1.95908 43.7968 1.57068 43.6259 1.2843 43.3217C0.997925 43.0175 0.837044 42.6049 0.837044 42.1747V1.62326C0.837044 1.56935 0.839577 1.51543 0.844666 1.46151Z" fill="#E6E6E6" />
              </svg>

            </div>

            <button className="primary_btn">

              Apply Now
            </button>
            <p>Frequently Asked Questions</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {/* Navbar */}
        <div >
          {/* List Section */}
          <ul className={styles.accordionOptions}>
            {options.map((option, index) => (
              <li key={index}
                  className={`${styles.optionButton} ${activeIndex === index ? styles.activeOption : ""
                    }`}

                  onClick={() => {
                    setActiveIndex(index);
                    setOpenAccordionIndex(0); // Reset accordion when switching options
                  }}
                >
                  {option.title}
    
              </li>
            ))}
          </ul>

          {/* Accordion Section */}
          {activeIndex !== null && (
            <div className={styles.accordion_inner_container}>
              <Accordion>
                {options[activeIndex].accordions.map((acc, idx) => (
                  <AccordionItem
                    count={acc.id}
                    key={idx}
                    value={`acc-${activeIndex}-${idx}`}
                    title={acc.heading}
                    isOpen={openAccordionIndex === idx} // Ensures only one stays open
                    onClick={() => toggleAccordion(idx)}
                  >
                    <p className="p-2 text-gray-300">{acc.content}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Faq;
