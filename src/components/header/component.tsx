import { useDispatch } from "react-redux";

import styles from "./style.module.sass";
import { setContactState } from "ducks/reducers";

type Props = {
  background?: string;
};

const Header: React.FC<Props> = ({ background }) => {
  const dispatch = useDispatch();

  const handleToggleModal = () => dispatch(setContactState(true));

  return (
    <>
      <div
        className={styles.header}
        style={{ backgroundColor: background || "white" }}
      >
        <div className={styles.header_user}>SERAPHIM VYSOTSKY</div>
        <div className={styles.header_menu}>
          <a href="/">HOME</a>
          <a href="/work">WORK</a>
          <a href="/about">ABOUT</a>
          <a onClick={handleToggleModal}>CONTACT</a>
        </div>
      </div>
    </>
  );
};

export default Header;
