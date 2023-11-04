import { Suspense } from "react";

const Image = ({ src, transition }: { src: string; transition: string }) => {
  return (
    <div className="image-box">
      <Suspense fallback={<h5>Loading image...</h5>}>
        {transition === "left" ? (
          <img loading="lazy" className="left-animate" src={src} alt="image" />
        ) : null}
        {transition === "right" ? (
          <img loading="lazy" className="right-animate" src={src} alt="image" />
        ) : null}
      </Suspense>
    </div>
  );
};

export default Image;
