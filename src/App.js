import {
  About,
  Footer,
  Skills,
  Testimonial,
  Work,
  Header,
  Certification,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Certification />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default App;
