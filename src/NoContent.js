import notFound from "./assets/images/not-found.svg";
import "./styles.scss";

export default function NoContent() {
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

  return (
    <div>
      <img src={notFound} />
      <h5>Sorry, we couldn't find any results for your search.</h5>
    </div>
  );
}
