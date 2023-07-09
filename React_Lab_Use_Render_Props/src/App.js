import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to set the mouse position on the screen
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    };

    // retrieve the current mouse position on the page. 
    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // return the render mouseposition back, since mouseposition is a jsx we have to use curly braces. 
  return render({mousePosition})
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  return (
    //we add the render attribute into the Basic tracker mouse logger so that it can have the props even though we don't pass one into. 
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  return (
    <MousePosition
      render={({mousePosition}) =>(
        <p>
          ({mousePosition.x}, {mousePosition.y})
       </p>
      )}
    />
  )
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
