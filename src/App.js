// import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
