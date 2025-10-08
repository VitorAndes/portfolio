import styles from "./LinkMedia.module.css";

interface LinkProps {
  style: React.CSSProperties;
  imgSrc: string;
  socialName: string;
  socialLink: string;
}

export function LinkMedia({
  style,
  imgSrc,
  socialName,
  socialLink,
}: LinkProps) {
  return (
    <a href={socialLink} target="_blank" rel="noreferrer">
      <div className={`${styles.container} ${styles.noselect}`}>
        <div className={styles.canvas}>
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`${styles.tracker} ${styles[`tr${i + 1}`]}`}
            ></div>
          ))}

          <div className={styles.card} style={style}>
            <div className={styles.prompt}>
              <img src={imgSrc} alt="social media logo" />
            </div>
            <div className={styles.title}>{socialName}</div>
          </div>
        </div>
      </div>
    </a>
  );
}
