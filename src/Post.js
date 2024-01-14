import { useEffect, useState } from "react";
import { sendIconAct } from "./assets/SendIconAct";
import { sendIconInac } from "./assets/SendIconInac";
import { mockComments } from "./mockContent/Comments";
import { mockUsers } from "./mockContent/Users";
import Follow from "./Follow";
import Like from "./Like";
import Purchase from "./Purchase";
import "./styles.scss";

export default function Post(props) {
  const [likes, setLikes] = useState(0);
  const [icon, setIcon] = useState(false);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState("");

  const changeIcon = (condition) => {
    setIcon(condition);
  };

  useEffect(() => {
    setLikes(generateLikesAmount());
    setComments([generateComment(), generateComment(), generateComment()]);
    setUser(generateUser());
  }, [props.exemplo]);

  const generateLikesAmount = () => {
    return Math.round(Math.random() * 200);
  };

  const generateComment = () => {
    let commentNum = Math.floor(Math.random() * mockComments.length);
    let userNum = Math.floor(Math.random() * mockUsers.length);
    return { user: mockUsers[userNum], message: mockComments[commentNum] };
  };

  const generateUser = () => {
    let userNum = Math.floor(Math.random() * mockUsers.length);
    return mockUsers[userNum];
  };

  return (
    <div className="Post">
      <div>{user}</div>
      <div className="PhotoSection">
        <img className="Photo" src={props.url} alt="" />
      </div>
      <div className="ButtonsSection">
        <div className="LikeSection">
          <div>{likes} Likes</div>
          <Like likes={likes} setLikes={setLikes} />
        </div>
        <Follow />
        <Purchase price="$0.99" url={props.url} />
      </div>
      <div className="CommentSection">
        {comments.map((comment) => {
          return (
            <div className="Comment">
              <span className="CommentUser">{comment.user}</span>
              <span className="CommentText">{comment.message}</span>
            </div>
          );
        })}
      </div>
      <div className="InputSection">
        <input
          className="CommentInput"
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          className="CommentButton"
          onMouseOver={() => changeIcon(true)}
          onMouseLeave={() => changeIcon(false)}
          onClick={() => {
            setComments([...comments, { user: props.username, message }]);
            setMessage("");
          }}
        >
          {icon ? sendIconAct : sendIconInac}
        </button>
      </div>
    </div>
  );
}
