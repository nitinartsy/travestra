import React from 'react'
import styles from './contact.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useEffect, useRef } from "react";
import DownArrow from '@/icons/DownArrow'
import ContactForm from './ContactForm'

let gsap, ScrollTrigger, SplitType;

if (typeof window !== "undefined") {
  gsap = require("gsap").default;
  ScrollTrigger = require("gsap/ScrollTrigger").default;
  SplitType = require("split-type").default;
  gsap.registerPlugin(ScrollTrigger);
}


const Contact = () => {
  const descriptionRef = useRef(null);
  const logoRef = useRef(null);

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


  return (
    <>
      <div className={styles.free}>
        <Navbar />
        <div className={styles.contact_info}>
          <div>
            <p>Email-sample@mail.com</p>
            <p>Phone-91-XXXXXXXXXX</p>
          </div>
        </div>
        <div className={styles.HeroSection}>
          <div className={styles.HeroSectionpart1}>
            <p ref={descriptionRef} className={styles.heroDescription}>
              The standard Lorem Ipsum passage, used since the 1500s
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className={styles.HeroSectionpart2}>
            <div className={styles.VectorContainer}>
              <DownArrow />
            </div>
          </div>
        </div>
        {/* -------------HeroSection end--------------------------------------------------------------------------------------------------------------------------------- */}

        <div className={styles.Logo}>
          <h1 ref={logoRef} className={styles.split}>
            CONTACT
          </h1>
        </div>

        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default Contact