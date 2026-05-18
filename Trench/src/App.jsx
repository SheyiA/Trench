import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignupCTA from "./components/SignupCTA";
import Mission from "./components/Mission";
import Pricing from "./components/Pricing";
import WaitlistModal from "./components/WaitlistModal";
import Footer from "./components/Footer";
// temp page routing 
import Dashboard from "./pages/Dashboard";
import NewTrade from "./pages/NewTrade";
import Journal from "./pages/Journal";
// **********************
function App() {
  const [page, setPage] = useState("home");
  const [showModal, setShowModal] = useState(false);
  if (page === "dashboard") {
    return <Dashboard onNewTrade={() => setPage("newTrade")} onJournalClick={() => setPage("journal")} />;
  }
  
  if (page === "newTrade") {
    return <NewTrade />;
  }

  if(page === "journal") {
    return <Journal />;
  }

  return (
    <>
<Navbar onDashboardClick={() => setPage("dashboard")} openModal={() => setShowModal(true)}/>
<Hero openModal={() => setShowModal(true)} />
<Mission />
<Pricing openModal={() => setShowModal(true)} />
<SignupCTA openModal={() => setShowModal(true)} />

{showModal && (
  <WaitlistModal onClose={() => setShowModal(false)} />
)}

<Footer/>
    </>
  );
}

export default App;

