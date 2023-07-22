import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen max-w-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}
