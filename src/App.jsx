import "./App.scss";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { AboutMe } from "./pages/about-me/about-me";
import { Contact } from "./pages/contact/contact";
import { Experience } from "./pages/experience/experience";
import { Home } from "./pages/home/home";
import { Portfolio } from "./pages/portfolio/portfolio";
import { Skills } from "./pages/skills/skills";

function App() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <Home />
        <AboutMe />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
