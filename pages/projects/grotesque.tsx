import Head from "next/head";
import { useRef } from "react";

import styles from "./style.module.sass";
import { Header, Footer } from "components";

function ProjectGrotesque() {
  const secondSectionRef = useRef<HTMLHeadingElement>();
  const chevronStyles = { fontSize: "4vw", cursor: "pointer" };

  function handleClickChevronBottom() {
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

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
      <div className={styles.mainBlock}>
        <Header background="transparent" />
        <div className={styles.headerSection}>
          <span>CASE STUDY:</span>
          <span>Hobby turns</span>
          <span>into Business</span>
          <div style={{ display: "flex" }}>
            <span>Client:</span>
            <span>Grotesque. Anya Mamonova</span>
          </div>
        </div>
        <div className={styles.arrowDown}>
          <span
            onClick={handleClickChevronBottom}
            className="material-icons"
            style={chevronStyles}
          >
            keyboard_arrow_down
          </span>
        </div>
        <div className={styles.secondSection} ref={secondSectionRef}>
          <div className={styles.secondSection_item}>
            <span>Challenge</span>
            <hr align="left" />
            <span className={styles.leftText}>
              We had to create a recognizable and relatable brand from the
              ground up. The one, that would reflect the wayward nature of its
              roots, while keeping it clean and professional.
            </span>
          </div>
          <div className={styles.secondSection_item}>
            <span>Outcome</span>
            <hr align="left" />
            <span className={styles.leftText}>
              Together with Anya we have developed a brand for Grotesque,
              including brand vision, mission and voice, alongside with
              messaging and a crisp new logo, which in turn allowed her to
              achieve her main goal: introduce unknown talents to general
              public.
            </span>
          </div>
        </div>
        <div className={styles.logoSection}>
          <img src="/assets/images/grotesque_05.svg" />
        </div>
        <div className={styles.visitCardSection}>
          <div className={styles.visitCardSection_title}>
            <span>The Background</span>
            <hr align="left" />
            <span className={styles.leftText}>
              Grotesque is a magazine for rebellious youngsters, featuring works
              of unknown artists and poetry of unknown poets. For a long time it
              was Anya's personal project, made in-house and distributed among
              friends. Having gained popularity outside of her circle, she
              decided it was time to push the boundaries. In a need for an
              identity for her project she reached out to me and the work
              started.
            </span>
          </div>
          <div className={styles.visitCardSection_cards}>
            <img src="/assets/images/grotesque_03.png" width="44%" />
            <img src="/assets/images/grotesque_04.png" width="44%" />
          </div>
        </div>
        <div className={styles.bookSection}></div>
        <div className={styles.secondSection} ref={secondSectionRef}>
          <div className={styles.secondSection_item}>
            <span>Brand Vision:</span>
            <span className={styles.leftText}>
              Give credit to the creators of tomorrow
            </span>
          </div>
          <div className={styles.secondSection_item}>
            <span>Brand Mission:</span>
            <span className={styles.leftText}>
              Help talents connect with their audience
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProjectGrotesque;
