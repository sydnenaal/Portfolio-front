import Head from "next/head";
import { useRef } from "react";

import styles from "./style.module.sass";
import { FirstSection, Footer, ProjectsSection, Header } from "components";

const searchStyle = { marginLeft: "12px" };

const processItems = [
  {
    iconPath: "/assets/icons/icon_search.svg",
    alt: "search",
    style: searchStyle,
    width: "55px",
    title: "1. DISCOVER",
    subTitle: `Together, we try to analyze and understand your business. Get
    to know the market your are in and who your competitors are.
    Who is your ideal customer and how could we connect with them
    effectively.`,
  },
  {
    iconPath: "/assets/icons/icon_flowchart.svg",
    alt: "flowchart",
    width: "65px",
    title: "2. PLAN",
    subTitle: `Taking our discovery insights we formulate a plan of action
    that will help us create your brand identity from the group
    up.`,
  },
  {
    iconPath: "/assets/icons/icon_pencil.svg",
    alt: "pencil",
    width: "55px",
    title: "3. EXECUTE",
    subTitle: `With you along the way we create a cohesive identity system.
    Establish your logos, fonts, colors and more, for consistency
    and unity.`,
  },
  {
    iconPath: "/assets/icons/icon_briefcase.svg",
    alt: "briefcase",
    width: "55px",
    title: "4. DELIVER",
    subTitle: `A finished product you will be proud of. An identity system
    that could delight your dream customer & achieve your goals.`,
  },
];

function Home() {
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
            {processItems.map((item) => (
              <div className={styles.process_body_step} key={item.alt}>
                <div className={styles.process_body_step__icon}>
                  <img
                    width={item.width}
                    style={item.style}
                    src={item.iconPath}
                    alt={item.alt}
                  />
                </div>
                <div className={styles.process_body_step__desc}>
                  <span>{item.title}</span>
                  <span>{item.subTitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.projectsTitle}>LATEST WORKS</div>
        <ProjectsSection />
        <Footer />
      </div>
    </>
  );
}

export default Home;
