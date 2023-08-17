import React from "react";
import styles from "./styles/home.module.css";

const Home = () => {
  return (
    <main className={styles.page}>
      <div className={styles.profileCard}>
        <div className={styles.imageContainer}>
          <img
            src="./img/home/profile-pic.png"
            height={200}
            width={200}
            alt="naren gavli"
            className={styles.profileImage}
          />
        </div>

        <div className={styles.profileName}>Prashant Lalwani</div>

        <div className={styles.profileRole}>
          Designer, Developer & Problem Solver
        </div>

        <div className={styles.resumeContainer}>
          <a
            href="https://drive.google.com/file/d/1vt9Rk8qGLr1cyDz_gmqQtIuUwMgmCX_o/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-outline-primary rounded btn-lg">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
