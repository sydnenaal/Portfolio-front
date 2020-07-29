import { useEffect, useState } from "react";
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

const Footer: React.FC = () => {
  const dispatch = useDispatch();

  const [contacts, setContacts] = useState<ContactsType>({
    behance: "",
    instagram: "",
    facebook: "",
    _id: "",
  });

  const handleToggleModal = () => dispatch(setContactState(true));

  useEffect(() => {
    getContacts({
      successCallback: (res) => {
        setContacts(res.data);
      },
    });
  }, []);

  return (
    <section className={styles.footer}>
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
        <div className={styles.contacts_owner}>© Seraphim Vysotsky 2020</div>
      </div>
    </section>
  );
};

export default Footer;
