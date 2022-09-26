import { useState } from "react";
import CanvasDraw from "react-canvas-draw";

import Sidenav from "./components/Sidenav";

function App() {
  const [color, setColor] = useState("#b32aa9");

  const height = window.innerHeight - 100;
  const width = window.innerWidth - 250;

  return (
    <div className="flex App">
      <Sidenav currentColor={color} colorSetter={setColor} />
      <main>
        <CanvasDraw
          canvasWidth={width}
          canvasHeight={height}
          brushColor={color}
        />
      </main>
    </div>
  );
}

export default App;
