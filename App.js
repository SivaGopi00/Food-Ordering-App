import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import "./index.css";
import Body from "./src/components/Body";
import RestaurantMenuPage from "./src/pages/RestaurantMenuPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import ContactUs from "./src/components/ContactUs";
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
        path: "/restaurants/:resId",
        element: <RestaurantMenuPage />,
      },
      {
        path: "/",
        element: <Body />,
      },
      { path: "/contactus", element: <ContactUs /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
