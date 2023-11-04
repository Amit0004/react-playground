import { useState } from "react";
import "./App.css";
import { ExplorerData } from "./assets/explorer-data";
import Explorer from "./components/explorer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageCarousel from "./components/image-carousel/image-carousel";

function App() {
  const [explorerData, setExplorerData] = useState(ExplorerData);

  const images: [] = [
    {
      src: "src/assets/images/image1.jpg",
    },
    {
      src: "src/assets/images/image2.jpg",
    },
    {
      src: "src/assets/images/image3.jpg",
    },
    {
      src: "src/assets/images/image4.jpg",
    },
    {
      src: "src/assets/images/image5.jpg",
    },
    {
      src: "src/assets/images/image6.jpg",
    },
    {
      src: "src/assets/images/image7.jpg",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <div style={{ width: "500px", margin: "auto" }}>
          <Routes>
            <Route
              path="/explorer"
              element={<Explorer explorerData={explorerData} />}
            />
            <Route
              path="/image-carousel"
              element={<ImageCarousel images={images} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
