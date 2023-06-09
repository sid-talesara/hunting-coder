/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* style JSX to style inside the jsx file */}
      <style jsx>
        {`
          h2 {
            font-size: 38px;
          }
          h3 {
            font-size: 28px;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="keywords"
          content="nextjs, huntingcoder blog, hunting coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='/sc.js' strategy="lazyOnload"></Script> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="dummy">Hunting Coder</span>
        </h1>
        <div className={styles.imagewrap}>
          <Image
            className={styles.myImg}
            src="/homeimg.jfif"
            width={237}
            height={158}
          />
        </div>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

        {/* <div className={`${styles1.con} ${styles2.con}`}> */}
        <div>
          <h2 className={styles.h2}>Latest Blogs</h2>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p>
              JavaScript is the language used to design logic for the web. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Hic error
              voluptatum impedit!
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p className={styles.p}>
              JavaScript is the language used to design logic for the web
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
