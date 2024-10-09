import Header from "./components/Header";
import { Outlet } from "react-router-dom"; // use for define child componets in the router

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
