import { Link, useNavigate, useParams } from "react-router-dom";
import "../project.css";
import { useEffect, useState } from "react";
import projects, { ProjectType } from "../utils/projects";
import { gsap } from "gsap";

function ProjectPage() {
  const [project, setProject] = useState<ProjectType | null>(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  function getProject() {
    const temp = projects.find((e) => e.slug === slug);
    if (temp) {
      setProject(temp);
    } else {
      navigate("/");
    }
  }

  function onMenuItemMouseEnter(item: string) {
    document.documentElement.style.setProperty("--cursor-size", "0px");
    gsap.to(item, {
      duration: 0.5,
      transitionTimingFunction: "ease-in-out",
      transform: "translateY(-140%)",
    });
  }

  function onMenuItemMouseLeave(item: string) {
    document.documentElement.style.setProperty("--cursor-size", "32px");
    gsap.to(item, {
      transitionTimingFunction: "ease-in-out",
      transform: "translateY(0%)",
      duration: 0.5,
    });
  }

  useEffect(() => {
    if (slug) {
      getProject();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (!project) {
    return <>Loading...</>;
  }

  return (
    <div className="projectPage">
      <nav>
        <Link to={"/"}>Jayesh Sadhwani</Link>
      </nav>
      <div className="projectTitle">{project.name}</div>
      <a href={project.link} target="_blank" className="link">
        <div
          className="visitNow"
          onMouseEnter={() => {
            onMenuItemMouseEnter("#visit_now");
          }}
          onMouseLeave={() => {
            onMenuItemMouseLeave("#visit_now");
          }}
        >
          <span id="visit_now">Visit Now</span>
          <span id="visit_now">Visit Now</span>
        </div>
      </a>
      <hr />

      <div className="options">
        <div className="option">
          <div className="optionTitle">Type</div>
          <div className="optionData">{project.project_type}</div>
        </div>

        <div className="option">
          <div className="optionTitle">Technologies</div>
          <div className="optionData">
            {project.technologies.split(",").join(", ")}
          </div>
        </div>
      </div>

      <div
        className="projectImg"
        style={{ backgroundImage: `url(${project.img})` }}
      ></div>

      <div className="overview">
        <div className="overviewHeading">Project Overview</div>

        <div className="info">{project.overview}</div>
      </div>
    </div>
  );
}

export default ProjectPage;
