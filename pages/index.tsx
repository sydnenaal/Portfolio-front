import Head from "next/head";

import styles from "./style.module.sass";
import { useRef } from "react";

const projects = [
  {
    icon: "/assets/images/icon_vdoroge.png",
    title: "VDoroge",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u",
  },
  {
    icon: "/assets/images/icon_kivot.png",
    title: "Kivot",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eos?",
  },
  {
    icon: "/assets/images/icon_soul.png",
    title: "Soul Lbdv",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eos?",
  },
  {
    icon: "/assets/images/icon_grotesque.png",
    title: "Grotesque",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eos?",
  },
];

export default function Home() {
  const projectsRef = useRef<HTMLHeadingElement>();
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
        <section>
          <div className={styles.header}>
            <div className={styles.header_user}>SERAPHIM VYSOTSKY</div>
            <div className={styles.header_menu}>
              <span>HOME</span>
              <span>WORK</span>
              <span>ABOUT</span>
              <span>CONTACT</span>
            </div>
          </div>
          <div className={styles.selfAssLicking}>
            <div className={styles.selfAssLicking_titleOne}>
              <span>Case Studies</span>
            </div>
            <div className={styles.selfAssLicking_titleTwo}>
              <span>
                Insight into thoughtful and thoroughful process behind great
                results
              </span>
            </div>
          </div>
          <div className={styles.arrowDown}>
            <span
              onClick={() => {
                projectsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className="material-icons"
              style={{ fontSize: "3vw", cursor: "pointer" }}
            >
              keyboard_arrow_down
            </span>
          </div>
        </section>

        <section>
          <div className={styles.projects} ref={projectsRef}>
            {projects.map((item, index) => (
              <div className={styles.project} key={index}>
                <div className={styles.project_icon}>
                  <img src={item.icon} height="50%" alt="project" />
                </div>
                <div className={styles.project_info}>
                  <div>
                    <div className={styles.project_info__title}>
                      {item.title}
                    </div>
                    <div className={styles.project_info__text}>{item.text}</div>
                    <div className={styles.project_info__button}>See more</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className={styles.workTogether}>
            <span>Interested in working together?</span>
            <span>GET IN TOUCH!</span>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contacts_resource}>
              <span>Behance</span>
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
            <div className={styles.contacts_owner}>
              © Seraphim Vysotsky 2020
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
