import { About, Footer, Skills, Testimonial, Work, Header } from "./container";
import { Navbar } from "./components";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
