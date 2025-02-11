import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const Graph = () => {
  const pathHighlight = useRef(null);
  const pathFull = useRef(null);
  
  const stagesRef = useRef([]);
  const stageAnimations = useRef([]);
  const currentStage = useRef(null);
  const positions = [0.18, 0.43, 0.68, 1]; 
  let minX, maxX;




  useEffect(() => {
    
    gsap.to(pathHighlight.current, {
      scrollTrigger: {
        trigger: pathHighlight.current,
        start: "top 90%" , 
        end: "top 90%", 
        // scrub: 1, 
        markers: true,
        toggleActions: "play none none reverse",
        
      },
      attr: {
        d: "M39 307.126c432 0 514-628.126 966-42.126", 
        duration: 2,
      },
      ease: "power2.inOut",
    });

    gsap.set(pathHighlight.current, {
      attr: {
        d: "M39 307.126c432 0 514-0 966-0",
      },
    });
  }, []);

// ----------------------------


useEffect(() => {

  gsap.to(pathFull.current, {
    scrollTrigger: {
      trigger: pathFull.current,
      start: "bottom 90%" ,
      end: "bottom 90%", 
      // scrub: 1, 
      markers: true,
      toggleActions: "play none none reverse",
      
    },
    attr: {
      d: "M39 307.126c432 0 514-628.126 966-42.126",
      duration: 2,
    },
    ease: "power2.inOut",
  });

 
  gsap.set(pathFull.current, {
    attr: {
      d: "M39 307.126c432 0 514-0 966-0", 
    },
  });
}, []);
  
// ------------------------------------

useEffect(() => {
  
  gsap.to(pathHighlight.current, {
    scrollTrigger: {
      trigger: pathHighlight.current,
      start: "bottom 90%" , 
      end: "bottom 90%",
      // scrub: 1, 
      markers: true,
      toggleActions: "play none none reverse",
      
    },
    attr: {
      d: "M39 307.126c432 0 514-628.126 966-42.126", 
      duration: 2,
    },
    ease: "power2.inOut",
  });

 
  gsap.set(pathHighlight.current, {
    attr: {
      d: "M39 307.126c432 0 514-0 966-0", 
    },
  });
}, []);
  
// -----------------------------------------------
  useEffect(() => {
    const pathLength = pathHighlight.current.getTotalLength();
    gsap.set(pathHighlight.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength * positions[0],
    });

    // Create Stage Animations
    stagesRef.current.forEach((stage, index) => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      tl.to(stage.querySelector(".headings"), { yPercent: -50 })
        .from(stage.querySelector("p"), { y: 10, opacity: 0 }, 0)
        .pause();

      stageAnimations.current.push(tl);
    });

    
    Observer.create({
      target: window,
      type: "pointer, touch",
      onMove: (self) => handlePointer(self.x),
    });


    const updateValues = () => {
      minX = window.innerWidth * 0.05;
      maxX = window.innerWidth - minX;
    };
    updateValues();
    window.addEventListener("resize", updateValues);

    return () => {
      window.removeEventListener("resize", updateValues);
    };
  }, []);

  const handlePointer = (x) => {
    const clamped = gsap.utils.clamp(minX, maxX, x);
    const normalized = gsap.utils.normalize(minX, maxX, clamped);
    const stage = Math.floor(normalized === 1 ? 0.999999 * 4 : normalized * 4);

    if (stage !== currentStage.current) {
      if (currentStage.current != null) {
        stageAnimations.current[currentStage.current].reverse();
      }
      const pathLength = pathHighlight.current.getTotalLength();
      gsap.to(pathHighlight.current, {
        strokeDashoffset: pathLength * (1 - positions[stage]),
      });
      stageAnimations.current[stage].play();
      currentStage.current = stage;
    }
  };

  return (
    <div style={{ height: "80vh", width: "60Vw", marginLeft:'20%', background:'rgba(29, 29, 29, 1)' ,background: "#030303", color: "#ededed" }}>
      <div className="main" style={{ padding: "0 5%" }}>
        <svg
          viewBox="0 0 1000 419"
          className="w-full relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(1, 0, 0, 1, -23.0000005, 4.0000001)">
            <path
              ref={pathFull}
              id="path-full"
              stroke="#383838"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
              d="M39 307.126c432 0 514-628.126 966-42.126"
            ></path>
            <path
              ref={pathHighlight}
              id="path-highlight"
              stroke="#777"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
              d="M39 307.126c432 0 514-628.126 966-42.126"
            ></path>
          </g>
        </svg>

        
{/* ----------------------------------------------------------------------------------------------- */}

        <div className="stages" style={{ display: "flex", opacity: 1 }}>
          {["Bring ideas to life Invest & Empower", "Guide & Shape Make a difference.", "Launch & Scale Witness growth and impact.", "Reap the Rewards Share in the success."].map((stage, index) => (
            <div
              key={index}
              className="stage"
              ref={(el) => (stagesRef.current[index] = el)}
              style={{
                padding: "8px 8px 8px 0",
                width: "25%",
                height: "180px",
              }}
            >
              <div className="heading" style={{ overflow: "hidden" }}>
                <div className="headings">
                  {/* <span style={{ fontSize: "24px" }}>{stage}</span> */}
                  <span style={{ fontSize: "24px", color: "#ffff" }}>{stage}</span>
                </div>
              </div>
              <p>
                {/* {  ${ + 1}.} */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graph;