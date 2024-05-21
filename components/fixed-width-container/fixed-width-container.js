import styles from "./fixed-width-container.module.css";

export default function FixedWidthContainer({ children, className }) {
  const classes = [styles.container, className].join(" ");
  return <div className={classes}>{children}</div>;
}
