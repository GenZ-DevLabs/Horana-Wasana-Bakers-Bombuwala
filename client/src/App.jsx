import Layout from "./Layout";
import { UserContextProvider } from "./components/UserContext";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import LoginPage from "./pages/LoginPage";

axios.defaults.baseURL = "http://localhost:4001";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
