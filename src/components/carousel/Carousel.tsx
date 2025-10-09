import { useState } from "react";
import { ProjectsData } from "../../data/ProjectsData";
import { Card } from "../card/Card";
import style from "./Carousel.module.css";
export function Carousel() {
  const [currentIndex, SetCurrentIndex] = useState(0);
  const currentProject = ProjectsData[currentIndex];

  return (
    <>
      <Card>
        <nav className={style.nav_hub}>
          {ProjectsData.map((project, index) => {
            return (
              <button
                className={style.nav_button}
                key={project.title}
                onClick={() => SetCurrentIndex(index)}
                aria-label="botão link de projetos"
              >
                {project.title}
              </button>
            );
          })}
        </nav>
      </Card>
      <Card>
        <div className={style.carousel_container}>
          <img
            className={style.carousel_image}
            src={currentProject.image}
            alt="imagem do projeto"
          />
          <div className={style.carousel_content}>
            <div className={style.content_infos}>
              <div className={style.info_project}>
                <h2>{currentProject.title}</h2>

                <div>
                  <a
                    className={style.project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={currentProject.github}
                  >
                    github <img src="svg/github.svg" />
                  </a>
                  <a
                    className={style.project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={currentProject.link}
                  >
                    projeto <img src="svg/link.svg" />
                  </a>
                </div>
              </div>
              <p>{currentProject.description}</p>
            </div>
            <div className={style.content_techs}>
              {currentProject.techs.map((tech) => (
                <span className={style.badge}>
                  <p>{tech}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
