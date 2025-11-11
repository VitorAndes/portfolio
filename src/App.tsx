import { Analytics } from "@vercel/analytics/react";
import style from "./App.module.css";
import { Carousel } from "./components/carousel/Carousel";
import { Profile } from "./components/profile/Profile";
import { SocialMedia } from "./components/social-media/SocialMedia";
import { Technologies } from "./components/technologies/Technologies";
export function App() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <section className={style.container_profile}>
          <Profile />
          <SocialMedia />
        </section>
        <section className={style.container_projects}>
          <Carousel />
        </section>
      </div>

      <Technologies />
      <Analytics />
    </main>
  );
}
