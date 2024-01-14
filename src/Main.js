import { useEffect, useState } from "react";
import { searchIconAct } from "./assets/SearchIconAct";
import { searchIconInac } from "./assets/SearchIconInac";

import Post from "./Post";
import NoContent from "./NoContent";

import "./styles.scss";

const IMAGES_API = "https://api.pexels.com/v1/search?query=";

export default function Main(props) {
  const [searchTerm, setSearchTerm] = useState("nature");
  const [imageUrls, setImageUrls] = useState([]);
  const [icon, setIcon] = useState(false);
  const [exemplo, setExemplo] = useState(false);

  const changeIcon = (condition) => {
    setIcon(condition);
  };

  useEffect(() => {
    makeSearch();
  }, []);

  const makeSearch = () => {
    let searchUrl = IMAGES_API + searchTerm;
    fetch(searchUrl, {
      mode: "cors",
      headers: {
        Authorization:
          "tqqJ3eYWmdFF95QaehqFybDt4XGsKf0wB2TJL680WAXcybcPt7rmp9v2"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setImageUrls(data.photos.map((photo) => photo.src.original));
      })
      .catch((error) => console.log(error));
    setExemplo(!exemplo);
  };

  return (
    <div className="Main">
      <div className="SearchBarSection">
        <input
          className="SearchBar"
          type="text"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button
          className="SearchButton"
          onClick={makeSearch}
          onMouseOver={() => changeIcon(true)}
          onMouseLeave={() => changeIcon(false)}
        >
          {icon ? searchIconAct : searchIconInac}
        </button>
      </div>

      {imageUrls.length > 0 &&
        imageUrls.map((url) => {
          return <Post url={url} exemplo={exemplo} username={props.username} />;
        })}
      {imageUrls.length == 0 && <NoContent />}
    </div>
  );
}
