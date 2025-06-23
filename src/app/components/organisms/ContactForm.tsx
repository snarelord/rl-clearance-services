"use client";

import { ReactEventHandler, useRef } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className={styles.contactFormContent}>
      <form onSubmit={onSubmit} ref={formRef} className={styles.contactForm}>
        <h2 className={styles.contactH2}>Contact</h2>
        <p className={styles.subPara}>Get in touch below with your enquiry</p>

        <label className={styles.formHeading}>Name</label>
        <textarea id="name" className={styles.textarea}></textarea>

        <label className={styles.formHeading}>Email</label>
        <textarea id="email" className={styles.textarea}></textarea>

        <label className={styles.formHeading}>Phone number</label>
        <textarea id="phone" className={styles.textarea}></textarea>

        <label className={styles.formHeading}>Postcode</label>
        <textarea id="postcode" className={styles.textarea}></textarea>

        <label className={styles.formHeading}>Message</label>
        <textarea id="message" className={styles.formMessage}></textarea>

        <button id="button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
