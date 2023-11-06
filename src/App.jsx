import "./App.css";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import ProjectSpace from "./pages/ProjectSpace";
import DashboardContainer from "./components/Layout/DashboardContainer";
import CheckpointsForm from "./components/CheckPoints/CheckpointsForm";
export const Profile = {
  user_name: "lead",
  email: "lead@gmail.com",
  role: "lead",
  roles: [
    "DevFest23",
    "Community Voice",
    "GDG Algiers Game Jam",
    "Google IO Extended",
    "Hashcode 21",
  ],
  img: "../assets/photo profil.png",
};
export default function App() {
  return (
    <div className="grid grid-cols-[20%,50%,30%] justify-center items-center sm:flex-row w-screen">
      <DashboardContainer />
      <ProjectSpace />
      <CheckpointsForm />
    </div>
  );
}
