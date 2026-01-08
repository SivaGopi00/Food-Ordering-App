import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import "./index.css";
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
