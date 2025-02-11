import styles from './unique.module.css';

const Unique = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1> What make Tavastra unique?</h1>
            </div>

            <div className={styles.TimeLineBar}>
          

          {/* ------------------------------------ */}
          <div className={styles.TimeLineBarmain}>
           

            <div className={styles.TimeLineBarEllipse}>
              <div className={`${styles.EllipseActive}`}>
                {/* <img src="/Ellipse.svg" alt="Ellipse"  /> */}
              </div>
              <div className={styles.Ellipse}>
                {/* <img src="/Ellipse.svg" alt="Ellipse" className={styles.Ellipse} /> */}
              </div>
              <div className={styles.Ellipse}>
                {/* <img src="/Ellipse.svg" alt="Ellipse" className={styles.Ellipse} /> */}
              </div>
              <div className={styles.Ellipse}>
                {/* <img src="/Ellipse.svg" alt="Ellipse" className={styles.Ellipse} /> */}
              </div>
              <div className={styles.Ellipse}>
                {/* <img src="/Ellipse.svg" alt="Ellipse" className={styles.Ellipse} /> */}
              </div>
                 <div className={styles.Ellipse}>
                {/* <img src="/Ellipse.svg" alt="Ellipse" className={styles.Ellipse} /> */}
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
                    <img src='/unique.svg' alt='Unique'/>
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



          {/* ---------------------------------------- */}




        </div>


        </div>
    );
};

export default Unique;
