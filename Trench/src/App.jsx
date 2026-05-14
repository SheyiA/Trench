import { useState } from "react";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignupCTA from "./components/SignupCTA";
// temp page routing 
import Dashboard from "./pages/Dashboard";
import NewTrade from "./pages/NewTrade";
// **********************
function App() {
  const [page, setPage] = useState("home");

  if (page === "dashboard") {
    return <Dashboard onNewTrade={() => setPage("newTrade")} />;
  }
  
  if (page === "newTrade") {
    return <NewTrade />;
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

