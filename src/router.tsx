import { Outlet, createBrowserRouter } from "react-router-dom";
import { Footer, Header } from "./modules";
import { About, Home } from "./pages";
import { FC } from "react";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
