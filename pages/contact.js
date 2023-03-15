import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [phone, setphone] = useState("");
  const [thankMsg, setthankMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, phone, email, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // clearing the fields after successfull submission
        setemail("");
        setdesc("");
        setname("");
        setphone("");
        // to show thank you message after submitting the form
        setthankMsg("Thanks for submitting!");
        // to hide the thank you message after 2sec
        setTimeout(() => {
          setthankMsg("");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name === "phone") {
      setphone(e.target.value);
    } else if (e.target.name === "name") {
      setname(e.target.value);
    } else if (e.target.name === "email") {
      setemail(e.target.value);
    } else if (e.target.name === "desc") {
      setdesc(e.target.value);
    } else {
      console.log("Error");
    }
  };
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={handleChange}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={handleChange}
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className={styles.formtext}>
            We will never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            className={styles.input}
            type="phone"
            value={phone}
            onChange={handleChange}
            name="phone"
            id="phone"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.formlabel} htmlFor="desc">
            Elaborate your concern
          </label>
          <textarea
            className={styles.input}
            value={desc}
            onChange={handleChange}
            name="desc"
            id="desc"
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
        <p>{thankMsg}</p>
      </form>
    </div>
  );
};

export default Contact;
