import React, { useState, useEffect } from "react";

import axios from "axios";
import DotLoader from "react-spinners/DotLoader";

function Joke() {
  const [joke, setJoke] = useState([]);
  const [loading, setLoading] = useState(true);
  const [anotherJoke, setAnotherJoke] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        setJoke([res.data.joke]);
        setLoading(false);
      });
  }, [anotherJoke]);

  return (
    <div className="joke-box">
      {loading ? (
        <div className="loading-spinner">
          <DotLoader color={"#23a6d5"} size={60} />
        </div>
      ) : (
        <div className="joke">
          <p className="joke-text">{joke}</p>

          <button
            onClick={() => setAnotherJoke(!anotherJoke)}
            className="btn-joke"
          >
            Another one
          </button>
        </div>
      )}
    </div>
  );
}

export default Joke;
