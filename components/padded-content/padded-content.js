import styles from "./padded-content.module.css";

export default function PaddedContent({ children }) {
  return <div className={styles.content}>{children}</div>;
}
