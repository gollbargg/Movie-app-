import React from "react";
import { range } from "lodash";
import "./style.css";
const Pagination = ({ totalMovies, currentPage, perPage, onPageChange }) => {
  const pageCount = Math.ceil(totalMovies / perPage);
  if (pageCount === 1) return null;

  const pages = range(1, pageCount + 1);
  console.log(totalMovies);
  return (
    <nav aria-label="Page navigation" className="navPage">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              style={{ cursor: "pointer", fontSize: "2rem" }}
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
