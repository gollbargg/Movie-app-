import React, { useState } from "react";
import Cards from "../components/CardsMovie/Cards";
import _ from "lodash";
import Pagination from "../components/Pagination/Pagination";
import "./style.css";

const Movies = ({ list }) => {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const archiveMovies = paginate(list, currentPage, perPage);
  const handlePerPage = (e) => {
    setPerPage(parseInt(e.target.value));
  };
  return (
    <div style={{ textAlign: "center", fontSize: "3rem" }}>
      <select
        name="cars"
        id="cars"
        onClick={handlePerPage}
        className="cardSelect"
      >
        <option value="10">10</option>
        <option value="8">8</option>
        <option value="4">4</option>
        <option value="2">2</option>
      </select>
      <Cards list={archiveMovies} />
      <Pagination
        totalMovies={list.length}
        currentPage={currentPage}
        perPage={perPage}
        onPageChange={handlePageChange}
      />{" "}
    </div>
  );
};

export default Movies;

export const paginate = (movies, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  return _(movies).slice(startIndex).take(perPage).value();
};
