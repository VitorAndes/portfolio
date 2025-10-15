import { useRef, useState } from "react";
import { ProjectsData } from "../../data/ProjectsData";
import { Card } from "../card/Card";
import style from "./Carousel.module.css";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToProject = (index: number) => {
    setCurrentIndex(index);
    const carousel = carouselRef.current;
    if (carousel) {
      const itemWidth = carousel.offsetWidth;
      carousel.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const itemWidth = carousel.offsetWidth;
      const newIndex = Math.round(carousel.scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <>
      <Card>
        <nav className={style.nav_hub}>
          {ProjectsData.map((project, index) => {
            return (
              <button
                className={`${style.nav_button} ${
                  currentIndex === index ? style.nav_button_active : ""
                }`}
                key={project.title}
                onClick={() => scrollToProject(index)}
                aria-label="botão link de projetos"
              >
                {project.title}
              </button>
            );
          })}
        </nav>
      </Card>

      <div
        ref={carouselRef}
        className={style.carousel_wrapper}
        onScroll={handleScroll}
      >
        {ProjectsData.map((project) => (
          <div key={project.title} className={style.carousel_item}>
            <Card>
              <div className={style.carousel_container}>
                <img
                  className={style.carousel_image}
                  src={project.image}
                  alt="imagem do projeto"
                />
                <div className={style.carousel_content}>
                  <div className={style.content_infos}>
                    <div className={style.info_project}>
                      <h2>{project.title}</h2>

                      <div>
                        <a
                          className={style.project_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.github}
                        >
                          github <img src="svg/github.svg" />
                        </a>
                        <a
                          className={style.project_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.link}
                        >
                          projeto <img src="svg/link.svg" />
                        </a>
                      </div>
                    </div>
                    <p>{project.description}</p>
                  </div>
                  <div className={style.content_techs}>
                    {project.techs.map((tech) => (
                      <span key={tech} className={style.badge}>
                        <p>{tech}</p>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
