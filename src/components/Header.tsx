import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faTruck,
  faPhoneFlip,
  faRightToBracket,
  faRightFromBracket,
  faCartShopping,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "../../styles/header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const { asPath } = useRouter();
  return (
    <header className="header">
      <div className={styles.contact}>
        <Link href="/">
          <a className={styles.zone}>
            Offer Zone Top Deals & Discounts
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                width: "3%",
                height: "2rem",
                color: "white",
                marginLeft: "2%",
              }}
            />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.link}>
            <FontAwesomeIcon
              icon={faLocationPin}
              style={{
                width: "7%",
                height: "2rem",
                color: "white",
                marginRight: "2.5%",
              }}
            />
            Select Location
          </a>
        </Link>
        <Link href="/">
          <a className={styles.link}>
            <FontAwesomeIcon
              icon={faTruck}
              style={{
                width: "11%",
                height: "2rem",
                color: "white",
                marginRight: "2.5%",
              }}
            />
            Track Order
          </a>
        </Link>
        <Link href="/">
          <a className={styles.link}>
            <FontAwesomeIcon
              icon={faPhoneFlip}
              style={{
                width: "9%",
                height: "2rem",
                color: "white",
                marginRight: "2.5%",
              }}
            />
            001 234 5678
          </a>
        </Link>
        <Link href="/">
          <a className={styles.li}>
            <FontAwesomeIcon
              icon={faRightToBracket}
              style={{
                width: "15%",
                height: "2rem",
                color: "white",
                marginRight: "2.5%",
              }}
            />
            Log In
          </a>
        </Link>
        <Link href="/">
          <a className={styles.lin}>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              style={{
                width: "14%",
                height: "2rem",
                color: "white",
                marginRight: "2.5%",
              }}
            />
            Register
          </a>
        </Link>
      </div>
      <div className={styles.log}>
        <div className={styles.store}>
          <Image src="/log.png" alt="logo" width="100%" height="2.5rem" />
          <h2 className={styles.tit}>Auto Store</h2>
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className={styles.inp}
          />
          <button type="submit" className={styles.submit}>
            Search
          </button>
          <div className={styles.cart}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{
                width: "45%",
                height: "2rem",
                color: "white",
                marginLeft: "2%",
              }}
            />
          </div>
        </form>
      </div>
      <nav className={styles.nav}>
        <div className={styles.navdiv}>
          <div className={styles.cat}>
            <a href="" className={styles.tex}>
              {" "}
              All Categories
            </a>
            <span className={styles.btn}>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  width: "70%",
                  color: "black",
                }}
              />
            </span>
          </div>
          <Link href="/">
            <a
              className={asPath === "/" ? `${styles.active}` : `${styles.nal}`}
            >
              home
            </a>
          </Link>
          <Link href="/cars">
            <a
              className={
                asPath === "/cars" ? `${styles.active}` : `${styles.nal}`
              }
            >
              Cars
            </a>
          </Link>
          <a href="/" className={styles.about}>
            About Us
          </a>
          <a href="/" className={styles.nax}>
            New Arrivals
          </a>
          <a href="/" className={styles.nal}>
            Pages
          </a>
          <a href="/" className={styles.con}>
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
