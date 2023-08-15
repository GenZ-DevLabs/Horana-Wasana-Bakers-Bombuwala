/* eslint-disable react/no-unescaped-entities */
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import axios from "axios";
import bcrypt from "bcryptjs";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const { data } = await axios.post("/login", {
        email,
        password: hashedPassword,
      });
      setUser(data);
      setRedirect(true);
      alert("Login Successful!");
    } catch (e) {
      alert("Login Failed! Please try again.");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-28 sm:mt-4 grow flex items-center justify-around text-primary">
      <div className="mb-40">
        <form
          className="px-10 py-8 shadow-lg shadow-gray-400 rounded-2xl"
          onSubmit={handleLoginSubmit}
        >
          <h1 className="text-2xl text-center mb-4 font-semibold">Admin</h1>
          <label className="ml-1 font-semibold">Email</label>
          <input
            className="block border mt-1 mb-2 px-4 py-2 w-xl rounded-2xl"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="ml-1 font-semibold">Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            className="block border px-4 py-2 w-full rounded-2xl mt-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full py-2 bg-primary text-white mt-5 rounded-2xl font-semibold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
