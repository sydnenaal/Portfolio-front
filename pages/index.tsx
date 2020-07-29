import Head from "next/head";
import { useRef } from "react";

import styles from "./style.module.sass";
import { FirstSection, Footer, ProjectsSection, Header } from "components";

const Home: React.FC = () => {
  const secondSectionRef = useRef<HTMLHeadingElement>();

  return (
    <>
      <Head>
        <title>Home page</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/fonts/Gilroy/stylesheet.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.main}>
        <Header />
        <FirstSection
          bottomSectionRef={secondSectionRef}
          backgroundTitle="Hi! I'm Seraphin"
          forwardTitle="I design logos and identity systems for start-ups, businesses and solopreneurs"
        />
        <div className={styles.secondSection} ref={secondSectionRef}>
          <div className={styles.secondSection_left}>Creating it bold</div>
          <div className={styles.secondSection_right}>
            <span>
              In a world filled with messages, call to actions, and data you
              must be bold to stand out from the crowd. Be that as it may, being
              bold isn't about vibrant colors, capital letters, and in your face
              designs. Being bold is about providing an experience that is
              memorable and relatable.
            </span>
          </div>
        </div>
        <div className={styles.process}>
          <div className={styles.process_title}>
            <span>THE PROCESS</span>
            <span>Behind the scenes</span>
          </div>
          <div className={styles.process_body}>
            <div className={styles.process_body_step}>
              <div className={styles.process_body_step__icon}></div>
              <div className={styles.process_body_step__desc}>
                <span>1. DISCOVER</span>
                <span>
                  Together, we try to analyze and understand your business. Get
                  to know the market your are in and who your competitors are.
                  Who is your ideal customer and how could we connect with them
                  effectively.
                </span>
              </div>
            </div>
            <div className={styles.process_body_step}>
              <div className={styles.process_body_step__icon}></div>
              <div className={styles.process_body_step__desc}>
                <span>2. PLAN</span>
                <span>
                  Taking our discovery insights we formulate a plan of action
                  that will help us create your brand identity from the group
                  up.
                </span>
              </div>
            </div>
            <div className={styles.process_body_step}>
              <div className={styles.process_body_step__icon}></div>
              <div className={styles.process_body_step__desc}>
                <span>3. EXECUTE</span>
                <span>
                  With you along the way we create a cohesive identity system.
                  Establish your logos, fonts, colors and more, for consistency
                  and unity.
                </span>
              </div>
            </div>
            <div className={styles.process_body_step}>
              <div className={styles.process_body_step__icon}></div>
              <div className={styles.process_body_step__desc}>
                <span>4. DELIVER</span>
                <span>
                  A finished product you will be proud of. An identity system
                  that could delight your dream customer & achieve your goals.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectsTitle}>LATEST WORKS</div>
        <ProjectsSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
