import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import SignIn from "./pages/SignIn";
// **********************
function App() {
  const [showModal, setShowModal] = useState(false);

    // open modal from waitlist

    const location = useLocation();

    useEffect(() => {
      if (
        location.pathname === "/" &&
        location.search.includes("waitlist=true")
      ) {
        const timer = setTimeout(() => {
          setShowModal(true);
        }, 0);
    
        return () => clearTimeout(timer);
      }
    }, [location]);
    // **************************************






  return (
    <Routes>
  
      <Route
        path="/"
        element={
          <>
            <Navbar openModal={() => setShowModal(true)} />
  
            <Hero openModal={() => setShowModal(true)} />
  
            <Mission />
  
            <Pricing openModal={() => setShowModal(true)} />
  
            <SignupCTA openModal={() => setShowModal(true)} />
  
            <Footer />
  
            {showModal && (
              <WaitlistModal
                onClose={() => setShowModal(false)}
              />
            )}
          </>
        }
      />
  
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
  
      <Route
        path="/journal"
        element={<Journal />}
      />
  
      <Route
        path="/new-trade"
        element={<NewTrade />}
      />
  
  <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;

