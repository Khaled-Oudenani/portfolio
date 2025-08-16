import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import "./App.css";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;

// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

// export default function App() {
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <main>This app is using the dark mode</main>
//     </ThemeProvider>
//   );
// }
