import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sonali</h1>
        <p className={styles.description}>
          I'm a passionate beginner with a strong foundation in front-end
          technologies and programming languages like Java and C++, ready to
          dive into development and bring creative solutions to life.
        </p>
        <a href="https://drive.google.com/file/d/1y6nLD-uCA-bOL-4CMJwt3fwC-_CAdxro/view?usp=sharing" className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
