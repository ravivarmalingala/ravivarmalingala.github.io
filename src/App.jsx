import { Container } from "@chakra-ui/react";
import Navbar from "./components/layout/Navbar";
import { Canvas } from "./Canvas";
import ColorPalette from "./components/layout/ColorPalette";
import Header from "./components/layout/Header";
import PortfolioList from "./components/layout/portfolio/PortfolioList";
import Contact from "./components/layout/Contact";
import Copyright from "./components/layout/Copyright";
import Education from "./components/layout/Education";

function App() {
  return (
    <div>
      <Container maxW="1300px">
        <Navbar />
        <Header />
        <Education />
        <PortfolioList />
        <Contact />
        <Copyright />
      </Container>
      <Canvas />
      <ColorPalette />
    </div>
  );
}

export default App;
