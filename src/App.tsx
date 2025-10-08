import style from "./App.module.css";
import { Profile } from "./components/profile/Profile";
import { SocialMedia } from "./components/social-media/SocialMedia";
export function App() {
  return (
    <main className={style.main}>
      <Profile />
      <SocialMedia />
    </main>
  );
}
