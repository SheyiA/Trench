import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignupCTA from "./components/SignupCTA";
import Dashboard from "./pages/Dashboard";
function App() {
  const [page, setPage] = useState("home");

  if (page === "dashboard") {
    return <Dashboard />;
  }

  return (
    <>
<Navbar onDashboardClick={() => setPage("dashboard")} />
<Hero />
<SignupCTA />
    </>
  );
}

export default App;

