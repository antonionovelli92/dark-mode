import React from "react";

const Articolo = ({ body, title, id }) => {
  return (
    <article>
      <span className="shadow rounded">{id}</span>
      <h6>{title}</h6>
      <p>{body}</p>
    </article>
  );
};

export default Articolo;
