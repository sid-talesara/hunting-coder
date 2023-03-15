/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  // This function will fetch in client side
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((data) => {
  //       setBlogs(data);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem, index) => {
          return (
            <div key={index}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogitempara}>
                {" "}
                {blogitem.content.substr(0, 140)}...
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}
