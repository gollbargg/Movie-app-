import React, { useEffect, useState } from "react";
import Card from "./../CardMovie/Card";
import "./style.css";
const Cards = ({ list }) => {
  const [movieList, setMovielist] = useState(list);

  const handleLike = (id, param) => {
    const allmovie = [...movieList];
    const foundMovie = allmovie.find((m) => m.id === id);
    const idx = allmovie.findIndex((m) => m.id === id);
    if (foundMovie) {
      if (param > 0) {
        allmovie[idx].likes += 1;
      } else {
        allmovie[idx].dislikes += 1;
      }
      setMovielist(allmovie);
    }
  };
  const handleDelete = (id) => {
    const allmovie = [...movieList];
    const newList = allmovie.filter((m) => m.id !== id);

    setMovielist(newList);
  };
  useEffect(() => {
    setMovielist(list);
  }, [list]);
  return (
    <div className="cardsContent">
      {movieList.length > 0 &&
        movieList.map((item) => (
          <Card
            key={item.id}
            category={item.category}
            like={item.likes}
            dislikes={item.dislikes}
            title={item.title}
            image={item.img}
            handleLike={(param) => handleLike(item.id, param)}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
    </div>
  );
};

export default Cards;
