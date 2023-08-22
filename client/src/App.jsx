import Layout from "./Layout";
import { UserContextProvider } from "./components/UserContext";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import AddSlide from "./components/AddSlide";
import AddDesignBoard from "./components/AddDesignBoard";
import AddDesign from "./components/AddDesign";
import DesignBoard from "./components/DesignBoard";
import About from "./components/About";
import DesignGallery from "./components/DesignGallery";
import ContactUsPage from "./pages/ContactUsPage";

// axios.defaults.baseURL = "https://wasana-bakers-bombuwala.onrender.com/";
axios.defaults.baseURL = "http://localhost:4000/";

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
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/:id" element={<DesignBoard />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id/:designId" element={<DesignGallery />} />
          <Route path="/account/board/:id" element={<ProfilePage />} />
          <Route path="/account/design/:id" element={<ProfilePage />} />
          <Route path="/account/slide/:id" element={<ProfilePage />} />
          <Route path="/account/board/:id" element={<AddDesignBoard />} />
          <Route path="/account/design/:id" element={<AddDesign />} />
          <Route path="/account/slide/:id" element={<AddSlide />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
