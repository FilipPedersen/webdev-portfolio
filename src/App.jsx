import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import PortfolioList from "./components/portfolioList/portfolioList";

const App = () => {
  return <div>
    <Intro/>
    <About/>
    <PortfolioList/>
  </div>;
};

export default App;