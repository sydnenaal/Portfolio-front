import { memo } from "react";

import { projects } from "constants/projects";
import styles from "./style.module.sass";

type Props = {
  reference?: any;
};

function ProjectsSection({ reference }: Props) {
  return (
    <section className={styles.secondSection}>
      <div className={styles.projects} ref={reference}>
        {projects.map((item, index) => (
          <div className={styles.project} key={index}>
            <div className={styles.project_icon}>
              <img src={item.icon} height="100%" color="white" alt="project" />
            </div>
            <div className={styles.project_info}>
              <div>
                <div className={styles.project_info__title}>{item.title}</div>
                <div className={styles.project_info__text}>{item.text}</div>
                <div className={styles.project_info__button}>See more</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(ProjectsSection);
