import Layout from "./Layout";
import { UserContextProvider } from "./components/UserContext";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import AddSlide from "./components/AddSlide";
import AddDesignBoard from "./components/AddDesignBoard";
import DesignBoard from "./components/DesignBoard";
import About from "./components/About"

axios.defaults.baseURL = "http://localhost:4001";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/slide" element={<AddSlide />} />
          <Route path="/designs" element={<AddDesignBoard />} />
          <Route path="/:id" element={<DesignBoard />} />
          <Route path="/about" element ={<About />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
