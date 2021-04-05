import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import MovieItem, { Movie } from "../Components/MovieItem";
import NavBar from "../Components/NavBar";

type ApiResult = {
  Response: "true";
  Search: Movie[];
  totalResults: string;
};
type SearchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: ApiResult }
  | { status: "error"; error: any };

export default function HomePage() {
  //   const searchText: string = useParams();
  const routeParams = useParams<{ searchText: string }>();
  const [state, setState] = useState<SearchState>({ status: "idle" });

  useEffect(() => {
    async function fetchData() {
      const queryParam = encodeURIComponent(routeParams.searchText);
      if (!routeParams.searchText || routeParams.searchText === "") {
        setState({ status: "idle" });
        return;
      }

      setState({ status: "loading" });

      const response = await axios.get(
        `https://omdbapi.com/?apikey=6a06f383&s=${queryParam}`
      );
      console.log("response", response);

      setState({ status: "success", data: response.data });
    }
    fetchData();
  }, [routeParams.searchText]);

  return (
    <div>
      <NavBar />
      {state.status === "idle" && (
        <>
          <p>Type in a search term and click "Search" to start...</p>
          <img
            style={{ width: "100%", height: "700px" }}
            className="homeimage"
            src="https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif"
            alt="img"
          />
        </>
      )}
      {state.status === "loading" && (
        <>
          <p>Searching...</p>{" "}
          <img
            style={{ width: "100%", height: "700px" }}
            className="homeimage"
            src="https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif"
            alt="img"
          />
        </>
      )}
      {state.status === "success" && (
        <>
          <h2>Search results</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 -10px",
            }}>
            {state.data.Search.map((movie) => {
              return <MovieItem key={movie.imdbID} movie={movie} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
