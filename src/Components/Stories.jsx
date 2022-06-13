import React from "react";
// import { AppContext } from "./Context";
import { useGlobalContext } from "./Context";
import { Button } from "@material-ui/core";

const Stories = () => {
  // const dataa = useContext(AppContext)
  const { hits, isLoading, removePost } = useGlobalContext();
  console.log("hits", hits);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <div className="stories-div">
        {hits.map((value) => {
          const { title, author, objectID, url, num_commnets } = value;
          return (
            <>
              <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                  By<span> {author} </span>
                  <span> {num_commnets}</span>
                </p>
                <div className="card-button">
                  <a href={url} target="_blank">
                    Read More...
                  </a>
                  {/* <a href="#" onClick={() => removePost(objectID)}>
                    Remove
                          </a> */}
                  <Button
                    onClick={() => removePost(objectID)}
                    variant="contained"
                    color="secondary"
                  >
                    {" "}
                    Remove
                  </Button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
