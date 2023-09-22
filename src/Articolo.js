import React from "react";

const Articolo = ({ body, title }) => {
  return (
    <article>
      <h6>{title}</h6>
      <p>{body}</p>
    </article>
  );
};

export default Articolo;
