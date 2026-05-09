import Home from "./sections/Home";
import About from "./sections/About";
import Messages from "./sections/Messages";
import TechShowcase from "./sections/TechShowcase";
import SkillsShow from "./sections/SkillsShow";
import TerminalUI from "./sections/TerminalUI";
import Page7 from "./sections/Page7";
import CustomCursor from "./components/CustomCursor";
const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent">
      <CustomCursor />
      <Home />
      <About />
      <Messages />
      <TechShowcase />
      <SkillsShow />
      <TerminalUI />
      <Page7 />
    </div>
  );
};

export default App;
