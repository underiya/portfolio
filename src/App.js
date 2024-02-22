// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      {/* <Stats /> */}
      {/* <Contact /> */}
      {/* <Footer />  */}
    </div>
  );
}

export default App;
