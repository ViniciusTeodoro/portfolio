import "./App.css";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
