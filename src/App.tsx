import style from "./App.module.css";
import { Carousel } from "./components/carousel/Carousel";
import { Profile } from "./components/profile/Profile";
import { SocialMedia } from "./components/social-media/SocialMedia";
import { Technologies } from "./components/technologies/Technologies";
export function App() {
  return (
    <main className={style.main}>
      <Profile />
      <SocialMedia />
      <Carousel />
      <Technologies />
    </main>
  );
}
