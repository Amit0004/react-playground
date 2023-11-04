/**
 * Props: Total number of records
 * Handler: nextClickHandler, prevClickHandler, pageClickHandler
 */

import { useState } from "react";

const Pagination = ({ size, activePage }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(activePage);
  const nextClickHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevClickHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const pageNumberClickHandler = (index: number) => {
    setCurrentPage(index + 1);
  };
  return (
    <>
      <h3>Pagination Component</h3>
      <hr />
      <div className="pagination-parent">
        <div className="pagination-buttons">
          <button disabled={currentPage <= 1} onClick={prevClickHandler}>
            Prev
          </button>
          {[...Array(size)].map((_, index) => {
            return (
              <button
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => pageNumberClickHandler(index)}
                key={index}
              >
                {index + 1}
              </button>
            );
          })}
          <button disabled={currentPage >= size} onClick={nextClickHandler}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
