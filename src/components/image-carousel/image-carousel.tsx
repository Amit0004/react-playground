import { useMemo, useState } from "react";
import Image from "./image";
import ImageIndicator from "./image-indicator";
const ImageCarousel = ({ images }: { images: any[] }) => {
  const [currentImage, setCurrentImage] = useState<{
    src: string;
    transition: string;
  }>(images[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevClickHandler = (index: number) => {
    const upImg = images[index];
    upImg.transition = "left";
    setCurrentImage(upImg);
    setCurrentIndex((prev) => prev - 1);
  };

  const nextClickHandler = (index: number) => {
    const upImg = images[index];
    upImg.transition = "right";
    setCurrentImage(upImg);
    setCurrentIndex((prev) => prev + 1);
  };

  const ImageComponent = useMemo(
    () => (
      <Image
        key={1}
        src={currentImage.src}
        transition={currentImage.transition}
      />
    ),
    [currentImage.src, currentImage.transition]
  );

  return (
    <>
      <div className="image-carousel-header">
        <h3>Image Carousel</h3>
        <hr />
      </div>
      <div className="image-carousel">
        <div className="left-control controls">
          <button
            disabled={currentIndex === 0}
            onClick={() => prevClickHandler(currentIndex - 1)}
          >
            ◀
          </button>
        </div>
        <div className="image-section">
          {/* <Image
            key={1}
            src={currentImage.src}
            transition={currentImage.transition}
          /> */}
          {ImageComponent}
          <div className="image-carousel-controls">
            <ImageIndicator
              counter={images.length}
              currentIndex={currentIndex}
            />
          </div>
        </div>
        <div className="right-control controls">
          <button
            disabled={currentIndex === images.length - 1}
            onClick={() => nextClickHandler(currentIndex + 1)}
          >
            ▶
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
