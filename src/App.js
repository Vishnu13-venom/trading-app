import "./style/app.css";
import LastPart from "./components/lastPart";
import { useMediaQuery } from "react-responsive";
import Navbar from "./components/navbar";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const myStyle = {
    color: "black",
    backgroundColor: "black",
    fontFamily: "Sans-Serif",
    margin: "50px"
  };
  return (
    <div className="App">
      {isDesktopOrLaptop && (
        <div className="splitScreen">
          <div className="middlePane">
          <Navbar/>
          <div style={myStyle}>
          <LastPart />
          </div>
            

          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div style={({ display: "flex" }, { flexDirection: "column" })}>
          <LastPart />
        </div>
      )}
    </div>
  );
}

export default App;
