import styles from "./style.module.sass";

type Props = {
  bottomSectionRef: any;
  backgroundTitle: string;
  forwardTitle: string;
};

const HeaderSection: React.FC<Props> = ({
  bottomSectionRef,
  backgroundTitle,
  forwardTitle,
}) => {
  const chevronStyles = { fontSize: "4vw", cursor: "pointer" };
  const handleClickChevronBottom = () => {
    bottomSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.firstSection}>
      <div className={styles.twinTitles}>
        <div className={styles.twinTitles_titleOne}>
          <span>{backgroundTitle}</span>
        </div>
        <div className={styles.twinTitles_titleTwo}>
          <span>{forwardTitle}</span>
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
    </section>
  );
};

export default HeaderSection;
