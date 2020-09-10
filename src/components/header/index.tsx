import { memo } from "react";
import { useDispatch } from "react-redux";

import styles from "./style.module.sass";
import { setContactState } from "ducks/reducers";

type Props = {
  background?: string;
};

function Header({ background }: Props) {
  const dispatch = useDispatch();
  const style = { backgroundColor: background || "white" };

  function handleToggleModal(): void {
    dispatch(setContactState(true));
  }

  return (
    <>
      <div className={styles.header} style={style}>
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
}

export default memo(Header);
