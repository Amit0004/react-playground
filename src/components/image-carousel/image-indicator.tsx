const ImageIndicator = ({
  counter,
  currentIndex,
}: {
  counter: number;
  currentIndex: number;
}) => {
  return (
    <div className="image-carousel-indicator">
      {[...Array(counter)].map((_, index) => {
        return (
          <div
            key={index}
            className={
              currentIndex === index ? "indicator active" : "indicator"
            }
          ></div>
        );
      })}
    </div>
  );
};

export default ImageIndicator;
