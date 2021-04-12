import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

type MovieData = {
  Title: string;
  Poster: string; // a url
  Director: string;
  Actors: string;
  Language: string;
  Type: string;
  Plot: string;
  Genre: string; // comma-separated...
  Year: string;
  imdbID: string;
  imdbRating: string;
};

export default function MoviePage() {
  const routeParams = useParams<{ imdb_id: string }>();

  const [movieData, setMovieData] = useState<MovieData>();

  useEffect(() => {
    async function fetchData() {
      const queryParam = encodeURIComponent(routeParams.imdb_id);
      // Option A: use the browser-native fetch function
      const data = await fetch(
        `https://omdbapi.com/?apikey=6a06f383&i=${queryParam}`
      ).then((r) => r.json());
      console.log("data", data);
      setMovieData(data);
    }
    fetchData();
  }, [routeParams.imdb_id]);

  return (
    <div style={{ padding: "20px" }}>
      {movieData ? (
        <div
          style={{
            boxShadow: "2px 8px 20px #ddd",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
          }}>
          <h1>
            {movieData.Title}({movieData.Type})
          </h1>
          <p>{movieData.Genre}</p>
          <div style={{ display: "flex" }}>
            <img
              src={movieData.Poster}
              alt={movieData.Title}
              style={{
                boxShadow: "2px 8px 20px #ddd",
                padding: "20px",
                margin: "20px",
                borderRadius: "10px",
              }}
            />
            <div style={{ margin: "30px" }}>
              <dl>
                <dt>Director</dt>
                <dd>{movieData.Director}</dd>
              </dl>
              <dl>
                <dt>Actors</dt>
                <dd>{movieData.Actors}</dd>
              </dl>
              <dl>
                <dt>Language</dt>
                <dd>{movieData.Language}</dd>
              </dl>
              <dl>
                <dt>Plot</dt>
                <dd>{movieData.Plot}</dd>
              </dl>
              <dl>
                <dt>IMDB Rating</dt>
                <dd>{movieData.imdbRating}</dd>
              </dl>
              <dl>
                <dt>Year</dt>
                <dd>{movieData.Year}</dd>
              </dl>
            </div>
          </div>
          <Link to="/">
            <h1>&#8249;</h1>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
