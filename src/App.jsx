import { useState } from "react";
import Button from "./components/Button";
const App = () => {
  const [color, setColor] = useState("grey");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <Button text="#711DB0" color="#711DB0" colorChanger={setColor} />
        <Button text="#C21292" color="#C21292" colorChanger={setColor} />
        <Button text="#EF4040" color="#EF4040" colorChanger={setColor} />
        <Button text="#FFA732" color="#FFA732" colorChanger={setColor} />
        <Button text="#000000" color="#000000" colorChanger={setColor} />
      </div>
    </div>
  );
};

export default App;
