import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';

function About() {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          fill={true}
          alt="groupphoto"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgtitle}>Digital Storytellers</h1>
          <h2 className={styles.imgdesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;