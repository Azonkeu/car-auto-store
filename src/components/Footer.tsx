import React from "react";
import styles from "../../styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href="/">
        <a className={styles.aut}>
          © 2022 Automarket Nigeria Ltd. All rights reserved.
        </a>
      </Link>
      <Link href="/">
        <a className={styles.careers}>Careers</a>
      </Link>
      <Link href="/">
        <a className={styles.terms}>Terms of Use</a>
      </Link>
      <Link href="/">
        <a className={styles.terms}>Privacy Policy</a>
      </Link>
      <Link href="/">
        <a className={styles.terms}>Cookie Policy</a>
      </Link>
      <span className={styles.spa}></span>
      <div className={styles.icon}>
        <Link href="/">
          <a className={styles.img}>
            <Image
              src="/facebook-bran.svg"
              alt="facebook icon"
              className={styles.image}
              width="23%"
              height="25rem"
            />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.img}>
            <Image
              src="/instagram-square-brands.svg"
              alt="Instagram icon"
              className={styles.image}
              width="23%"
              height="25rem"
            />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.img}>
            <Image
              src="/twitter-brands.svg"
              alt="Twitter icon"
              width="23%"
              height="25rem"
              className={styles.image}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
