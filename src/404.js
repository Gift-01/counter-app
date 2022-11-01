import Icon404 from "./assets/404.webp";
import "./styles/404.css";

const Error404Page = () => {
  return (
    <div className="error-page">
      <img src={Icon404} alt="404" />
      <h2>Page not found!</h2>
    </div>
  );
};

export default Error404Page;
