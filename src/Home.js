import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import "./styles.scss";

export default function Home() {
  const { username } = useParams();

  return (
    <div className="App">
      <Main username={username} />
      <Footer />
    </div>
  );
}
