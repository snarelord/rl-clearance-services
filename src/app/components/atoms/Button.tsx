import type React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({ children, variant = "primary", className = "" }: ButtonProps) {
  return <button className={`${styles.button} ${styles[variant]} ${className}`}>{children}</button>;
}
