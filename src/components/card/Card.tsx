import type { ReactNode } from "react";
import styles from "./Card.module.css";

export function Card({
  children,
  animation,
}: {
  children: ReactNode;
  animation?: string;
}) {
  return (
    <div className={`${styles.card} ${animation}`}>
      {children}
    </div>
  );
}
