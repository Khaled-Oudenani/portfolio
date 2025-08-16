import portfolio from "../assets/portfolio.jpg";
// import hamza from "../assets/hamza.jpg";
import "../App.css";
const Home = () => {
  return (
    <div id="home" className="home">
      <img
        src={portfolio}
        alt="portfolio"
        style={{ borderRadius: "50%", width: "200px", height: "200px" }}
      />
      <h1>Hi, I'm Khaled 👋</h1>
      <h2>24 years old and a Front-End Developer</h2>
      <p>
        I build modern, responsive, and user-friendly web applications using
        <strong> React</strong> and cutting-edge web technologies.
      </p>
    </div>
  );
};

export default Home;
