import { technologiesData } from "../../data/TechnologiesData";
import { Card } from "../card/Card";
import style from "./Technologies.module.css";

export function Technologies() {
  return (
    <Card>
      <div className={style.technologies_container}>
        {technologiesData.map((tech) => (
          <img key={tech.id} draggable={false} src={tech.icon} alt={tech.alt} />
        ))}
      </div>
    </Card>
  );
}
