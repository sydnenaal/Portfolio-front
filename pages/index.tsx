import Head from "next/head";
import { useRef, useState, useEffect } from "react";

import styles from "./style.module.sass";
import ModalContact from "components/contact/modalContact";
import { getContacts } from "api";

const projects = [
  {
    icon: "/assets/images/icon_vdoroge.svg",
    title: "VDoroge",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt u",
  },
  {
    icon: "/assets/images/icon_kivot.svg",
    title: "Kivot",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eos?",
  },
  {
    icon: "/assets/images/icon_soul.svg",
    title: "Soul Lbdv",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eos?",
  },
  {
    icon: "/assets/images/icon_grotesque.svg",
    title: "Grotesque",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eos?",
  },
];

interface ContactsType {
  behance: string;
  instagram: string;
  facebook: string;
  _id: string;
}

export default function Home() {
  const projectsRef = useRef<HTMLHeadingElement>();
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [contacts, setContacts] = useState<ContactsType>({
    behance: "",
    instagram: "",
    facebook: "",
    _id: "",
  });

  const handleToggleModal = () => setIsModalOpen((isOpen: Boolean) => !isOpen);

  useEffect(() => {
    getContacts({
      successCallback: (res) => {
        setContacts(res.data);
      },
    });
  }, []);

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
        <section className={styles.firstSection}>
          <div className={styles.header}>
            <div className={styles.header_user}>SERAPHIM VYSOTSKY</div>
            <div className={styles.header_menu}>
              <span>HOME</span>
              <span>WORK</span>
              <span>ABOUT</span>
              <span onClick={handleToggleModal}>CONTACT</span>
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

        <section className={styles.secondSection}>
          <div className={styles.projects} ref={projectsRef}>
            {projects.map((item, index) => (
              <div className={styles.project} key={index}>
                <div className={styles.project_icon}>
                  <img
                    src={item.icon}
                    height="100%"
                    color="white"
                    alt="project"
                  />
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

        <section className={styles.thirdSection}>
          <div className={styles.workTogether}>
            <span>Interested in working together?</span>
            <span onClick={handleToggleModal}>GET IN TOUCH!</span>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contacts_resource}>
              <a href={contacts.behance}>Behance</a>
              <a href={contacts.instagram}>Instagram</a>
              <a href={contacts.facebook}>Facebook</a>
            </div>
            <div className={styles.contacts_owner}>
              © Seraphim Vysotsky 2020
            </div>
          </div>
        </section>

        <ModalContact isOpen={isModalOpen} handleClose={handleToggleModal} />
      </div>
    </>
  );
}
