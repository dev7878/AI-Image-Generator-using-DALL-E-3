import { useState } from "react";

import GenerateImage from "./components/GenerateImage";
import Images from "./components/Images";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GenerateImage />
      <Images />
    </>
  );
}

export default App;
