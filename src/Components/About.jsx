import "../App.css";
const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-me">
        <h1>About Me</h1>
        <div>
          <p>
            I'm Khaled Oudenani, a passionate Front-End Developer from Laghouat{" "}
            <span style={{ color: "#ffc400ff", fontWeight: "bold" }}>
              [ALGERIA]
            </span>{" "}
            with a strong focus on creating modern, responsive, and
            user-friendly web applications.
          </p>
          <p>
            I enjoy turning complex problems into simple, beautiful, and
            intuitive designs.
          </p>
          <p>
            My main stack includes <strong>React</strong>,{" "}
            <strong>JavaScript</strong>, and <strong>CSS</strong>, but I’m
            always eager to learn new technologies and expand my skill set.
          </p>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Skills</h1>
      <div className="skills-section">
        <div className="skills">
          <p>Html</p>
          <hr style={{ width: "50%" }} />
        </div>
        <div className="skills">
          <p>CSS</p>
          <hr style={{ width: "40%" }} />
        </div>
        <div className="skills">
          <p>Js</p>
          <hr style={{ width: "55%" }} />
        </div>
        <div className="skills">
          <p>React js</p>
          <hr style={{ width: "50%" }} />
        </div>
        <div className="skills">
          <p>Matrial UI</p>
          <hr style={{ width: "40%" }} />
        </div>
      </div>
    </div>
  );
};

export default About;
