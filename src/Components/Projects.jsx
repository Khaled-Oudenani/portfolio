import "../App.css";
import anim from "../assets/anim.png";
import manage from "../assets/manage.png";

const projects_data = [
  {
    id: 1,
    name: "Animes",
    description: " a website for watching Animes trailer and description",
    image: anim,
    link: "https://mellow-raindrop-07c8c1.netlify.app/",
  },
  {
    id: 2,
    name: "Management",
    description: "a website for employees or students Management",
    image: manage,
    link: "https://dapper-flan-58dc3c.netlify.app/",
  },
];
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="container-card">
        {projects_data.map((project) => (
          <div className="card-wrap" key={project.id}>
            <div className="project-card">
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link}>App Link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
