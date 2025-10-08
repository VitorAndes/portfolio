import { Card } from "../card/Card";
import { LinkMedia } from "../link-media/LinkMedia";
import style from "./SocialMedia.module.css";

export function SocialMedia() {
  return (
    <Card>
      <div className={style.container}>
        <h1 className={style.card_title}>Social media</h1>

        <div className={style.socialMedia}>
          <LinkMedia
            style={{
              background: "#FF78B2",
            }}
            imgSrc={"/svg/instagram.svg"}
            socialName={"Instagram"}
            socialLink={"https://www.instagram.com/vtr_andes/"}
          />
          <LinkMedia
            style={{ background: "#2867B2" }}
            imgSrc={"/svg/linkedin.svg"}
            socialName={"Linkedin"}
            socialLink={"https://www.linkedin.com/in/vitor-andes-dos-santos/"}
          />
          <LinkMedia
            style={{ background: "#000000" }}
            imgSrc={"/svg/github.svg"}
            socialName={"Github"}
            socialLink={"https://github.com/VitorAndes"}
          />
        </div>
      </div>
    </Card>
  );
}
