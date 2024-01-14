import { useState } from "react";
import "./styles.scss";

export default function Follow() {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing((prevState) => !prevState);
  };

  return (
    <div className="Follow">
      <button className="FollowButton" onClick={toggleFollow}>
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}
