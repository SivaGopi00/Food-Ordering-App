import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import "./index.css";
import Body from "./src/components/Body";
import MenuPage from "./src/pages/MenuPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/restaurant",
        element: <MenuPage />,
      },
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
