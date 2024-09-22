import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Technologies } from "./components/Technologies.jsx";
import { Works } from "./components/Works.jsx";

function App() {
  return (
    <>
      <Header />
      <About />
      <Works />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
