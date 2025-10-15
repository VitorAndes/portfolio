import { Card } from "../card/Card";
import styles from "./Profile.module.css";

export function Profile() {
  return (
    <Card>
      <div className={styles.container}>
        <header className={styles.card_header}>
          <img
            src="https://i.pinimg.com/736x/21/70/46/21704649a5e698cfe70a862e71784fb1.jpg"
            alt="banner"
            className={styles.card_banner}
          />
          <img
            src="/images/avatar.avif"
            alt="foto do vitor andes"
            className={styles.card_avatar}
          />
        </header>
        <div className={styles.card_content}>
          <h1 className={styles.card_content_name}>Vitor Andes</h1>
          <p className={styles.card_content_role}>Software developer</p>
          <p className={styles.card_content_description}>
            Front-end Developer especializado em React, TypeScript e Tailwind
            CSS. Experiência em criar interfaces modernas, responsivas e
            acessíveis, com foco em performance e boas práticas. Apaixonado por
            design, usabilidade e desenvolvimento de soluções eficientes.
          </p>
        </div>
        <div className={styles.card_tech}>
          <span className={`${styles.card_tech_badge} ${styles.badge_one}`}>
            Front-end
          </span>
          <span className={`${styles.card_tech_badge} ${styles.badge_two}`}>
            Back-end
          </span>
          <span className={`${styles.card_tech_badge} ${styles.badge_three}`}>
            UI/UX
          </span>
        </div>
      </div>
    </Card>
  );
}
