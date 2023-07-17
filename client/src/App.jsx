import Layout from "./Layout";
import { UserContextProvider } from "./components/UserContext";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import AddSlide from "./components/AddSlide";
import AddDesignBoard from "./components/AddDesignBoard";

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
          <Route path="/account/slide" element={<AddSlide />} />
          <Route path="/account/designs" element={<AddDesignBoard />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
