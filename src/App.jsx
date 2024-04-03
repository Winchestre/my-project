import Mainlayout from "./Layouts/Mainlayout";
import { Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Flights from "./pages/Flights";
import Wallet from "./pages/Wallet";
import { Reports } from "./pages/Reports";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import Home from "./pages/Home/home";

export default function App() {
  return (
    <Mainlayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="flights" element={<Flights />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="reports" element={<Reports />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </Mainlayout>
  );
}