import { FaFacebook } from "react-icons/fa";

import styles from "./Footer.css";

function Footer () {
  return <footer>
        <ul className={styles.social_list}>
            <li className={styles.social_item}>
                <a href="#">
                    <FaFacebook />
                </a>
            </li>
            <li className={styles.social_item}>
                <a href="#">
                    <FaFacebook />
                </a>
            </li>


        </ul>
  </footer>

}
export default Footer;