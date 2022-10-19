import { useEffect, useState } from "react";
import { MemeData } from "./components/meme_data";
import { MemeComponent } from "./components/meme_component";
import './App.css';
import React from "react";
import { getAllMeme } from "./api/meme_api";


function App() {

  const [memes, setMemes] = useState<MemeData[]>([]);
  useEffect(() => {
    getAllMeme().then((res) => {
      setMemes([res[Math.floor(Math.random() * 100)]]);
    });
  }, []);

  const handleButtonClicked = async () => {
    const res = await getAllMeme();
    setMemes([res[Math.floor(Math.random() * 100)]]);
  }

  return (
    <div className="app">
      <div className="section">
        <h2>Start</h2>
        <MemeComponent memes={memes} />
      </div>
      <div className="section">
        <div className="flex">
          <h2>Click Button</h2>
          <button className="button" onClick={handleButtonClicked}>
            New meme
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
