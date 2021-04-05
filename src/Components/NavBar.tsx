import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();
  const searchText: string = useParams();

  const [searchMovie, setSearchMovie] = useState(searchText);
  const routeParam = encodeURIComponent(searchMovie);
  const handelSearch = () => {
    console.log("searchMovie", searchMovie);
    history.push(`/discover/${routeParam}`);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/"> &#127909;Movie Time! &#127871;</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="/discover/:searchText?">Discover </Nav.Link>
          <Nav.Link href="/movie/:imdb_id">Movies</Nav.Link> */}
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            // value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            placeholder="Search Movie.."
            className="mr-sm-2"
          />

          <Button variant="outline-info" onClick={handelSearch}>
            <Link to={`/discover/${routeParam}`}> Search </Link>
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}
