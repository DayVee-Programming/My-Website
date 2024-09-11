import clsx from "clsx";
import { images } from "../utils/images.js";
import { useContext, useState } from "react";
import { AppContext } from "../context/appContext.jsx";
import ProjectsCardItem from "./ProjectsCardItem.jsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectsCard = ({ card }) => {
  const { theme } = useContext(AppContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const descTextS = clsx("projects__cards-card-desc-text", {
    "dark-text": theme === "dark",
  });
  const linkImgS = clsx("projects__cards-card-desc-source-link-img", {
    light: theme === "dark",
  });
  const sliderImgS = clsx("projects__cards-card-slider-img", {
    light: theme === "dark",
  });
  const sliderArrowS = clsx("projects__cards-card-slider-arrow", {
    light: theme === "dark",
  });

  const goPrevSlide = () => {
    const isFirstSlide = slideIndex === 0;
    const newIndex = isFirstSlide ? card.images.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  };
  const goNextSlide = () => {
    const isLastSlide = slideIndex === card.images.length - 1;
    const newIndex = isLastSlide ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
  };

  return (
    <li key={card.id} className="projects__cards-card">
      <div className="projects__cards-card-slider">
        {card?.images?.length > 1 && (
          <FaArrowLeft
            className={`${sliderArrowS} left`}
            onClick={() => goPrevSlide()}
          />
        )}
        <img
          src={card.images[slideIndex].value}
          alt=""
          className={sliderImgS}
        />
        {card?.images?.length > 1 && (
          <FaArrowRight
            className={`${sliderArrowS} right`}
            onClick={() => goNextSlide()}
          />
        )}
      </div>
      <div className="projects__cards-card-desc">
        <h2 className="projects__cards-card-desc-title">{card.title}</h2>
        <p className={descTextS}>{card.textT}</p>
        <ul className="projects__cards-card-desc-list">
          {card.list?.map((item) => (
            <ProjectsCardItem item={item} key={item.id} />
          ))}
        </ul>
        <div className="projects__cards-card-desc-source">
          <a
            href={card.liveLink}
            target="_blank"
            className="projects__cards-card-desc-source-link"
          >
            <p className="projects__cards-card-desc-source-link-text">Live</p>
            <img className={linkImgS} src={images.liveIcon} alt="" />
          </a>
          <a
            href={card.codeLink}
            target="_blank"
            className="projects__cards-card-desc-source-link"
          >
            <p className="projects__cards-card-desc-source-link-text">Code</p>
            <img className={linkImgS} src={images.githubIcon} alt="" />
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectsCard;
