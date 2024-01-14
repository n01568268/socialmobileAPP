import { useState } from "react";
import { likeIconAct } from "./assets/LikeIconAct";
import { likeIconInac } from "./assets/LikeIconInac";
import "./styles.scss";

export default function Follow(props) {
  const styles = {
    default: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "2px #59BEFF solid",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    },
    liked: {
      backgroundColor: "#59BEFF"
    }
  };

  const [isLiked, setIsLiked] = useState(false);

  const toggleFollow = () => {
    props.setLikes(isLiked ? props.likes - 1 : props.likes + 1);
    setIsLiked((prevState) => !prevState);
  };

  return (
    <button
      style={isLiked ? { ...styles.default, ...styles.liked } : styles.default}
      onClick={toggleFollow}
    >
      {isLiked ? likeIconAct : likeIconInac}
    </button>
  );
}
