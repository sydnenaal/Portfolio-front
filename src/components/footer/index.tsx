import { useEffect, useState, memo } from "react";
import { useDispatch } from "react-redux";

import styles from "./style.module.sass";
import { getContacts } from "api";
import { setContactState } from "ducks/reducers";

interface ContactsType {
  behance: string;
  instagram: string;
  facebook: string;
  _id: string;
}

const contactsMock: ContactsType = {
  behance: "",
  instagram: "",
  facebook: "",
  _id: "",
};

function Footer() {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState<ContactsType>(contactsMock);
  const { behance, instagram, facebook } = contacts;

  function handleToggleModal(): void {
    dispatch(setContactState(true));
  }

  useEffect(() => {
    function handleSuccess(res: any): void {
      setContacts(res.data);
    }

    getContacts({ successCallback: handleSuccess });
  }, []);

  return (
    <section className={styles.footer}>
      <div className={styles.workTogether}>
        <span>Interested in working together?</span>
        <span onClick={handleToggleModal}>GET IN TOUCH!</span>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contacts_resource}>
          <a href={behance}>Behance</a>
          <a href={instagram}>Instagram</a>
          <a href={facebook}>Facebook</a>
        </div>
        <div className={styles.contacts_owner}>© Seraphim Vysotsky 2020</div>
      </div>
    </section>
  );
}

export default memo(Footer);
