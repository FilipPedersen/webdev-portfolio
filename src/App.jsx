import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import PortfolioList from "./components/portfolioList/portfolioList";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <PortfolioList />
      <Contact />
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
