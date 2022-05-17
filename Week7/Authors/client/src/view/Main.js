import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log(
                    "Something went wrong grabbing authors from db",
                    err
                );
            });
    }, []);

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setAuthors(authors.filter((author) => author._id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/new">Add an Author</Link>
            <h3>List of Authors in database:</h3>
            <table style={{ margin: "auto", border: "1px solid black" }}>
                <thead style={{ backgroundColor: "lightblue" }}>
                    <tr>
                        <th>Author</th>
                        <th>Action Items</th>
                    </tr>
                </thead>
                <tbody>
                    {authors
                        ? authors.map((author) => (
                              <tr key={author._id}>
                                  <td>{author.name}</td>
                                  <td>
                                      <Button
                                          className="mx-2 my-2"
                                          variant="warning"
                                          onClick={() => {
                                              navigate(`/edit/${author._id}`);
                                          }}
                                      >
                                          Edit
                                      </Button>
                                      <Button
                                          className="mx-2 my-2"
                                          variant="danger"
                                          onClick={(e) =>
                                              deleteHandler(author._id)
                                          }
                                      >
                                          Delete
                                      </Button>
                                  </td>
                              </tr>
                          ))
                        : null}
                </tbody>
            </table>
        </div>
    );
};

export default Main;
