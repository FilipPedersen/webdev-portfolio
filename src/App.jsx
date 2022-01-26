import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import PortfolioList from "./components/portfolioList/portfolioList";
import Contact from "./components/contact/contact";

const App = () => {
  return <div>
    <Intro/>
    <About/>
    <PortfolioList/>
    <Contact />
  </div>;
};

export default App;